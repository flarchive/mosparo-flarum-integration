<?php

namespace Mosparo\FlarumIntegration\ValidatorExtension;

use Flarum\Foundation\AbstractValidator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Validation\Validator;
use Mosparo\FlarumIntegration\Event\LoginFormData;
use Mosparo\FlarumIntegration\Helper\VerificationHelper;

class LoginValidatorExtension
{
    protected VerificationHelper $verificationHelper;

    protected Dispatcher $dispatcher;

    public function __construct(VerificationHelper $verificationHelper, Dispatcher $dispatcher)
    {
        $this->verificationHelper = $verificationHelper;
        $this->dispatcher = $dispatcher;
    }

    public function __invoke(AbstractValidator $flarumValidator, Validator $validator)
    {
        $helper = $this->verificationHelper;
        $validator->addExtension(
            'mosparo',
            function () use ($validator, $helper) {
                $data = $validator->getData();

                $submitToken = $data['mosparo_submit_token'];
                $validationToken = $data['mosparo_validation_token'];
                if (!$submitToken || !$validationToken) {
                    return false;
                }

                $formDataEvent = new LoginFormData(
                    [
                        'identification' => $data['identification'] ?? '',
                    ],
                    ['identification'],
                    ['identification']
                );
                $this->dispatcher->dispatch($formDataEvent);

                $result = $helper->verifySubmission($submitToken, $validationToken, $formDataEvent->formData);

                if ($result === null || !$result->isSubmittable() || !$result->isValid()) {
                    return false;
                }

                // Confirm that all required fields were verified
                $verifiedFields = array_keys($result->getVerifiedFields());
                $fieldDifference = array_diff($formDataEvent->requiredFields, $verifiedFields);
                $verifiableFieldDifference = array_diff($formDataEvent->verifiableFields, $verifiedFields);

                if (!empty($fieldDifference) || !empty($verifiableFieldDifference)) {
                    return false;
                }

                return true;
            }
        );

        $validator->appendRules([
            'mosparo_validation_token' => ['required', 'mosparo'],
        ]);
    }
}
