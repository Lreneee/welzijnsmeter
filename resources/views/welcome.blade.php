<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <title>Welzijnsmeter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

{{--    @vite('resources/css/app.css')--}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
<div id="app"></div>

</body>
</html>
