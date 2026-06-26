&nbsp;
<p align="center">
    <img src="https://github.com/mosparo/mosparo/blob/master/assets/images/mosparo-logo.svg?raw=true" alt="mosparo logo contains a bird with the name Mo and the mosparo text"/>
</p>

<h1 align="center">
    Extension for Flarum
</h1>
<p align="center">
    A Flarum extension to protect the account forms with mosparo.
</p>

-----

## Description

The mosparo Flarum extension can protect the sign-up, login, and forgot password forms of your Flarum installation. You can use mosparo to rate-limit or protect your Flarum installation from bots.

This extension is compatible with Flarum 2.0+ (tested with Flarum 2.0.0-rc.4).

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/mosparo/flarum-integration.svg)](https://packagist.org/packages/mosparo/flarum-integration) [![Total Downloads](https://img.shields.io/packagist/dt/mosparo/flarum-integration.svg)](https://packagist.org/packages/mosparo/flarum-integration)

## How to use

Please see our [How to use](https://mosparo.io/how-to-use/) introduction on our website to learn how to use mosparo in general.

In step 3 of the how-to-use explanation, you must integrate mosparo into your website. Please follow the [Installation](#installation) part below for this process.

In step 4 of the how-to-use explanation, you must connect your website with your mosparo project. Please follow the [Usage](#usage) part below.

## Installation

Install with Composer:

```sh
composer require mosparo/flarum-integration:"^1.0"
```

## Update

Update the extension with Composer:

```sh
composer update mosparo/flarum-integration:"^1.0"
php flarum migrate
php flarum cache:clear
```

## Usage

1. Create a project in your mosparo installation
2. Install the extension in your Flarum installation
3. Enable the extension in the administration area of your Flarum installation
4. Configure the connection to your mosparo project
5. Test the sign-up, login, and forgot password forms

## Links

- [Packagist](https://packagist.org/packages/mosparo/flarum-integration)
- [GitHub](https://github.com/mosparo/flarum-integration)

## Credits / Inspired by

We're thankful for the [flarum-hcaptcha](https://github.com/Ralkage/flarum-hcaptcha) extension by [Ralkage](https://github.com/Ralkage), which helped us understand how to add mosparo to Flarum.
