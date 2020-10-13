<template>
    <div id="root">
        <h1>{{msg}}</h1>

        <div class="section1">
            <p class="sample-1">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
            <p class="sample-2">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
            <p class="sample-3">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
        </div>

    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'フォント操作系プロパティ'
            }
        },
    }
</script>

<style scoped>
.sample-1 {
  font-family: Times, Times New Roman, Georgia, serif;
  font-size: 24pt;
  font-weight: normal;
}
.sample-2 {
  font-family: cursive;
  font-size: 200%;
  font-weight: bold;
}
.sample-3 {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: larger;
  font-style: italic;
}

</style>
