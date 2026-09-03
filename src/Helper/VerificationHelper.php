<?php

namespace Mosparo\FlarumIntegration\Helper;

use Exception;
use Flarum\Settings\SettingsRepositoryInterface;
use Mosparo\ApiClient\Client;
use Mosparo\ApiClient\VerificationResult;

class VerificationHelper
{
    protected SettingsRepositoryInterface $settings;

    public Exception $lastException;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function verifySubmission(string $submitToken, string $validationToken, array $formData): ?VerificationResult
    {
        $host = $this->settings->get('mosparo.host');
        $publicKey = $this->settings->get('mosparo.publicKey');
        $privateKey = $this->settings->get('mosparo.privateKey');
        $verifySsl = boolval($this->settings->get('mosparo.verifySsl', true));

        $client = new Client($host, $publicKey, $privateKey, ['verify' => $verifySsl]);
        try {
            $result = $client->verifySubmission($formData, $submitToken, $validationToken);
        } catch (Exception $e) {
            $this->lastException = $e;
            $result = null;
        }

        return $result;
    }
}
