<?php

namespace Mosparo\FlarumIntegration\Content;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;

class MosparoSettings
{
    protected SettingsRepositoryInterface $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document): void
    {
        $prefix = 'mosparo.';
        $keys = ['host', 'uuid', 'publicKey', 'privateKey', 'verifySsl'];
        foreach ($keys as $key) {
            $document->payload[$prefix . $key] = $this->settings->get($prefix . $key);
        }
    }
}
