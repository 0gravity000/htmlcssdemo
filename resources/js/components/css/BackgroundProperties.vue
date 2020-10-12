<template>
    <div id="root">
        <h1>{{msg}}</h1>

        <div class="exampleone">
        Lorem ipsum dolor sit amet, consectetuer
        </div>
        <div class="exampletwo">
        Lorem ipsum dolor sit amet, consectetuer
        </div>
        <div class="examplethree">
        Lorem ipsum dolor sit amet, consectetuer
        </div>
        <p class="catsandstars">
            Here are more cats for you.<br />Look at them!
        </p>

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
        </div>

        <div class="section3">
        </div>


    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                msg: '背景操作系プロパティ'
            }
        },
    }
</script>

<style scoped>
/*
backgraound-colorプロパティ
backgraound-imageプロパティ
backgraound-clipプロパティ
backgraound-repeatプロパティ
backgraound-sizeプロパティ
backgraound-originプロパティ
backgraound-positionプロパティ
backgraound-attachmentプロパティ
*/

.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153,102,153);
  color: rgb(255,255,204);
}

.examplethree {
  background-color: #777799;
  color: #FFFFFF;
}

.section1 {
  background-image:
      url("https://mdn.mozillademos.org/files/11991/startransparent.gif"), 
      url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-color: transparent;
  color: red;
}


</style>
