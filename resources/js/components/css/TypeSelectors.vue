<template>
    <div id="root">
        <h1>{{msg}}</h1>

        <div class="section1">
            <div class="section1-1">
                <p>ここは、クラス=section1-1</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section1-2">
                <p>ここは、クラス=section1-2</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section1-3">
                <p>ここは、クラス=section1-3</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
        </div>
        <div class="section2">
            <div class="section2-1">
                <p>ここは、クラス=section2-1</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section2-2">
                <p>ここは、クラス=section2-2</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section2-3">
                <p>ここは、クラス=section2-3</p>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
        </div>
        <div class="section3">
            <div class="section3-1">
                <p>ここは、クラス=section3-1</p>
                <p>p要素</p>
                <span>span要素</span>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section3-2">
                <p>ここは、クラス=section3-2</p>
                <p>p要素</p>
                <span>span要素</span>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
            <div class="section3-3">
                <p>ここは、クラス=section3-3</p>
                <p>p要素</p>
                <span>span要素</span>
                <b>b要素</b>
                <em>em要素</em>
                <i>i要素</i>
                <q>q要素</q>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'タイプセレクター'
            }
        },
    }
</script>

<style scoped>
b {
    border: 1px solid blue;
}
em {
    border: 1px solid red;
}
div.section2 i {
    color: red;
}

div.section3-1 q {
    font-size: 1.5rem;
    color: brown;
}

</style>
