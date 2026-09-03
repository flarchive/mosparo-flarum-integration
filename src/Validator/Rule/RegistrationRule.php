<?php

namespace Mosparo\FlarumIntegration\Validator\Rule;

use Closure;
use Flarum\Locale\Translator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Mosparo\FlarumIntegration\Event\RegistrationFormData;
use Mosparo\FlarumIntegration\Helper\VerificationHelper;

class RegistrationRule implements ValidationRule, DataAwareRule
{
    protected VerificationHelper $verificationHelper;

    protected Dispatcher $dispatcher;

    protected Translator $translator;

    protected array $data = [];

    public function __construct(VerificationHelper $verificationHelper, Dispatcher $dispatcher, Translator $translator)
    {
        $this->verificationHelper = $verificationHelper;
        $this->dispatcher = $dispatcher;
        $this->translator = $translator;
    }

    public function setData(array $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $submitToken = $this->data['mosparo_submit_token'];
        $validationToken = $this->data['mosparo_validation_token'];
        if (!$submitToken || !$validationToken) {
            $fail($this->translator->trans('mosparo-integration.api.verification_failed'));
            return;
        }

        $formDataEvent = new RegistrationFormData(
            [
                'username' => $this->data['username'] ?? '',
                'email' => $this->data['email'] ?? '',
                'nickname' => $this->data['nickname'] ?? '',
            ],
            ['username', 'email'],
            ['username', 'email'] + ((($this->data['nickname'] ?? '') !== '') ? ['nickname'] : [])
        );
        $this->dispatcher->dispatch($formDataEvent);

        $result = $this->verificationHelper->verifySubmission($submitToken, $validationToken, $formDataEvent->formData);
        if ($result === null || !$result->isSubmittable() || !$result->isValid()) {
            $fail($this->translator->trans('mosparo-integration.api.verification_failed'));
            return;
        }

        // Confirm that all required fields were verified
        $verifiedFields = array_keys($result->getVerifiedFields());
        $fieldDifference = array_diff($formDataEvent->requiredFields, $verifiedFields);
        $verifiableFieldDifference = array_diff($formDataEvent->verifiableFields, $verifiedFields);

        if (!empty($fieldDifference) || !empty($verifiableFieldDifference)) {
            $fail($this->translator->trans('mosparo-integration.api.verification_failed'));
        }
    }
}
