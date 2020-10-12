<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>HTML CSS Demo</title>

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <header-component></header-component>
    <div class="container">
    <div class="row">
        <div id="menu" class="col">
            <router-link to="/html/links">リンク集</router-link><br>
            <h1>HTML</h1>
            <router-link to="/html/list">リスト関連</router-link><br>
            <router-link to="/html/table">テーブル関連</router-link><br>
            <h1>CSS</h1>
            <h2>セレクター</h2>
            <router-link to="/css/universal-selectors">ユニバーサルセレクター(*)</router-link><br>
            <router-link to="/css/type-selectors">タイプセレクター(element)</router-link><br>
            <router-link to="/css/class-selectors">クラスセレクター(.)</router-link><br>
            <router-link to="/css/id-selectors">IDセレクター(#)</router-link><br>
            <router-link to="/css/attribute-selectors">属性セレクター([])</router-link><br>

        </div>
        <div id="main" class="col-8">
            <router-view></router-view>
        </div>
    </div>
    </div>
</div>
<!-- Scripts -->
<script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>