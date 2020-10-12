<template>
    <div id="root">
        <h1>{{msg}}</h1>
        <a href="#ordinary-target">This is an ordinary link.</a><br>
        <a href="/" target="_blank" rel="noreferrer noopener">You've already visited this link.</a><br>
        <a>Placeholder link (won't get styled)</a>

        <p>この段落にはリンクが含まれています。
        <a href="#">このリンクはクリックすると赤色になります。</a>
        この段落は段落やリンクをクリックすると灰色になります。
        </p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: '疑似クラス'
            }
        },
    }
</script>

<style scoped>
a:link {    /* 未訪問リンク */
    color: blue;
}
a:visited { /* 訪問済みリンク */
    color: purple;
}
a:hover {   /* ホバー時 */
    background-color:powderblue;
}
a:active { color: red; }         /* アクティブなリンク */
p:active { background: grey; }   /* アクティブな段落 */

</style>
