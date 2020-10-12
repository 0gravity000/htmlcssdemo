<template>
    <div id="root">
        <h1>{{msg}}</h1>

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
                <p>ここは、id=block3-1</p>
                <p>id=block3-1のp要素</p>
                <span>id=block3-1のspan要素</span>
            </div>
            <div id="block3-2">
                <p>ここは、id=block3-2</p>
                <p>id=block3-2のp要素</p>
                <span>id=block3-2のspan要素</span>
            </div>
            <div id="block3-3">
                <p>ここは、id=block3-3</p>
                <p>id=block3-3のp要素</p>
                <span>id=block3-3のspan要素</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'IDセレクター'
            }
        },
    }
</script>

<style scoped>
div#block1 {
    border: 1px solid red;
}
div#block2-2 {
    color: green;
}
div#block3-3 span {
    font-size: 1.5rem;
    color: brown;
}

</style>
