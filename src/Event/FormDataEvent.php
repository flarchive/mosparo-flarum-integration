<?php

namespace Mosparo\FlarumIntegration\Event;

class FormDataEvent
{
    public array $formData;

    public array $requiredFields;

    public array $verifiableFields;

    public function __construct(array $formData, array $requiredFields, array $verifiableFields)
    {
        $this->formData = $formData;
        $this->requiredFields = $requiredFields;
        $this->verifiableFields = $verifiableFields;
    }
}
