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
                <p>ここは、クラス=section3-1</p>
                <p>クラス=section3-1のp要素</p>
                <span>クラス=section3-1のspan要素</span>
            </div>
            <div class="section3-2">
                <p>ここは、クラス=section3-2</p>
                <p>クラス=section3-2のp要素</p>
                <span>クラス=section3-2のspan要素</span>
            </div>
            <div class="section3-3">
                <p>ここは、クラス=section3-3</p>
                <p>クラス=section3-3のp要素</p>
                <span>クラス=section3-3のspan要素</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'クラスセレクター'
            }
        },
    }
</script>

<style scoped>
div.section1 {
    border: 1px solid blue;
}
div.section2-2 {
    color: red;
}
div.section3-3 span {
    font-size: 1.5rem;
    color: brown;
}

</style>
