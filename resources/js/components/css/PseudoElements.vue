<template>
    <div id="root">
        <h1>{{msg}}</h1>
        <p>スタイルはこの段落の最初の行にのみ適用されます。
        その後のすべての文字列は普通のスタイルになります。分かりますか？</p>

        <span>ブロックレベル要素ではないので、この文字列の最初の行は、
        特殊なスタイルになりません。</span>

        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
        esse molestie consequat.</p>
        <p>-The beginning of a special punctuation mark.</p>
        <p>_The beginning of a special punctuation mark.</p>
        <p>"The beginning of a special punctuation mark.</p>
        <p>'The beginning of a special punctuation mark.</p>
        <p>*The beginning of a special punctuation mark.</p>
        <p>#The beginning of a special punctuation mark.</p>
        <p>「先頭の特殊区切り記号です。</p>
        <p>《先頭の特殊区切り記号です。</p>
        <p>“先頭の特殊区切り記号です。</p>

        <a href="#ordinary-target">This is an ordinary link.</a><br>
        <a href="/" target="_blank" rel="noreferrer noopener">You've already visited this link.</a><br>
        <a>Placeholder link (won't get styled)</a>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: '疑似要素'
            }
        },
    }
</script>

<style scoped>
::first-line {
  color: blue;
}
p::first-letter {
  color: red;
  font-size: 130%;
}

a::after {
  content: "→";
}
a::before {
  content: "♥";
}

</style>
