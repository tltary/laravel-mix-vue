let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/main.js', 'dist').vue();