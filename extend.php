<?php

namespace Mosparo\FlarumIntegration;

use Flarum\Api\Context;
use Flarum\Api\ForgotPasswordValidator;
use Flarum\Api\Resource\UserResource;
use Flarum\Api\Schema;
use Flarum\Extend;
use Flarum\Forum\LogInValidator;
use Flarum\User;
use Mosparo\FlarumIntegration\Validator\Rule\RegistrationRule;
use Mosparo\FlarumIntegration\ValidatorExtension\ForgotPasswordValidatorExtension;
use Mosparo\FlarumIntegration\ValidatorExtension\LoginValidatorExtension;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->content(Content\MosparoSettings::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Settings())
        ->serializeToForum('mosparoHost', 'mosparo.host')
        ->serializeToForum('mosparoUuid', 'mosparo.uuid')
        ->serializeToForum('mosparoPublicKey', 'mosparo.publicKey'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Validator(LogInValidator::class))
        ->configure(LoginValidatorExtension::class),

    (new Extend\Validator(ForgotPasswordValidator::class))
        ->configure(ForgotPasswordValidatorExtension::class),

    (new Extend\ApiResource(UserResource::class))
        ->fields(function () {
            return [
                Schema\Str::make('mosparo_submit_token')
                    ->visible(false)
                    ->writable(function (User\User $user, Context $context) {
                        return $context->creating();
                    })
                    ->set(function () {}), // The field is only temporary...
                Schema\Str::make('mosparo_validation_token')
                    ->visible(false)
                    ->writable(function (User\User $user, Context $context) {
                        return $context->creating();
                    })
                    ->set(function () {}) // The field is only temporary...
                    ->rules([
                        'required',
                        resolve(RegistrationRule::class)
                    ], true),
            ];
        })
];
