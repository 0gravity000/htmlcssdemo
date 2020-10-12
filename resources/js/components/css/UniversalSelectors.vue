<template>
    <div id="root">
        <h1>{{msg}}</h1>

        <div class="section1">
            <div class="section1-1">
                <p>ここは、クラス=section1-1</p>
            </div>
            <div class="section1-2">
                <p>ここは、クラス=section1-2</p>
            </div>
            <div class="section1-3">
                <p>ここは、クラス=section1-3</p>
            </div>
        </div>
        <div class="section2">
            <div class="section2-1">
                <p>ここは、クラス=section2-1</p>
            </div>
            <div class="section2-2">
                <p>ここは、クラス=section2-2</p>
            </div>
            <div class="section2-3">
                <p>ここは、クラス=section2-3</p>
            </div>
        </div>
        <div class="section3">
            <div class="section3-1">
                <p title="section3-1">ここは、クラス=section3-1</p>
            </div>
            <div class="section3-2">
                <p>ここは、クラス=section3-2</p>
            </div>
            <div class="section3-3">
                <p>ここは、クラス=section3-3</p>
            </div>
        </div>

        <div id="block1">
            <div id="block1-1">
                <p>ここは、id=block1-1</p>
            </div>
            <div id="block1-2">
                <p>ここは、id=block1-2</p>
            </div>
            <div id="block1-3">
                <p>ここは、id=block1-3</p>
            </div>
        </div>
        <div id="block2">
            <div id="block2-1">
                <p>ここは、id=block2-1</p>
            </div>
            <div id="block2-2">
                <p>ここは、id=block2-2</p>
            </div>
            <div id="block2-3">
                <p>ここは、id=block2-3</p>
            </div>
        </div>
        <div id="block3">
            <div id="block3-1">
                <p title="block3-1">ここは、id=block3-1</p>
            </div>
            <div id="block3-2">
                <p>ここは、id=block3-2</p>
            </div>
            <div id="block3-3">
                <p>ここは、id=block3-3</p>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'ユニバーサルセレクター'
            }
        },
    }
</script>

<style scoped>
*[title] {
    font-size: 1.5rem;
    color: brown;
}

*.section1-1 {
    color: red;
}
*.section2 {
    border: 1px solid blue;
}


*#block1-1 {
    color: green;
}
*#block2 {
    border: 1px solid red;
}

</style>
