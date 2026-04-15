FROM composer:2.9.7 AS composer

FROM php:8.5.5-fpm AS base

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update \
    && apt-get install -y --no-install-recommends zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

ENV PATH="$PATH:/usr/src/app/bin"

WORKDIR /usr/src/app

FROM base AS dev
