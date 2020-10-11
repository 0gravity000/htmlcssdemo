<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
        <li>first item</li>
        <li>second item     
        <!-- 閉じタグの </li> がここにはありません。 -->
            <ul>
            <li>second item first subitem</li>
            <li>second item second subitem
            <!-- 入れ子になった第二の順序なしリストでも同じです。 -->
                <ul>
                <li>second item second subitem first sub-subitem</li>
                <li>second item second subitem second sub-subitem</li>
                <li>second item second subitem third sub-subitem</li>
                </ul>
            </li> <!-- 三番目の順序なしリストを含む li の閉じタグ </li> です -->
            <li>second item third subitem</li>
            </ul>
        <!-- Here is the closing </li> tag -->
        </li>
        <li>third item</li>
        </ul>

        <h1>リスト2</h1>
        <ol type="i">
            <li>Introduction</li>
            <li>List of Greivances</li>
            <li>Conclusion</li>
        </ol> 

        <h1>リスト3</h1>
        <dl>
            <dt>Denim (semigloss finish)</dt>
            <dd>Ceiling</dd>
        
            <dt>Denim (eggshell finish)</dt>

            <dt>Evening Sky (eggshell finish)</dt>
            <dd>Layered on the walls</dd>
        </dl>


    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'リスト1'
            }
        },
    }
</script>

<style>
</style>
