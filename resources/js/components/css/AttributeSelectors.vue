<template>
    <div id="root">
        <h1>{{msg}}</h1>
        <ul>
        <li><a href="#internal">Internal link</a></li>
        <li><a href="http://example.com">Example link</a></li>
        <li><a href="#InSensitive">Insensitive internal link</a></li>
        <li><a href="http://example.org">Example org link</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: '属性セレクター'
            }
        },
    }
</script>

<style scoped>
a {
		color: blue;
}

/* "#" で始まる内部リンク */
a[href^="#"] {
		background-color: gold;
}

/* URL のどこかに "example" が含まれるリンク */
a[href*="example"] {
		background-color: silver;
}

/* URL のどこかに "insensitive" が含まれるリンクで、大文字小文字は区別しない */
a[href*="insensitive" i] {
		color: cyan;
}

/* ".org" で終わるリンク */
a[href$=".org"] {
		color: red;
}
</style>
