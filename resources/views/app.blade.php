<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Inertia_Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <!-- Styles -->
        @include('AssetsGlobal/globalCss')

        <!-- Scripts -->
        @routes
        @vite(['resources/js/config/app.js', "resources/PagesVuejs/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body>
        @inertia
        @include('AssetsGlobal/globalJs')
    </body>
</html>
