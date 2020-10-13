<template>
    <div id="root">
        <h1>{{msg}}</h1>
        <div class="section1">
            <p class="shadow-1">Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            <p class="shadow-2">Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore.</p>

            <p class="decoration-1">Here's some text with wavy red underline!</p>
            <p class="decoration-2">This text has lines both above and below it.</p>

            <p>1. <code>word-break: normal</code></p>
            <p class="normal narrow">This is a long and
            Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
            グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>
            <p>2. <code>word-break: break-all</code></p>
            <p class="breakAll narrow">This is a long and
            Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
            グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>
            <p>3. <code>word-break: keep-all</code></p>
            <p class="keepAll narrow">This is a long and
            Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
            グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>
        </div>

        <div class="section2">
            <p class="white-space-1">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
            <p class="white-space-2">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
            <p class="white-space-3">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
            <p class="white-space-4">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
            <p class="white-space-5">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
            <p class="white-space-6">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>---</p>
        </div>

        <div class="section3">
            <p>They say the fishing is excellent at
            Lake <em class="overflow-wrap-1">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
            though I've never been there myself. (<code>normal</code>)</p>
            <p>They say the fishing is excellent at 
            Lake <em class="overflow-wrap-2">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, 
            though I've never been there myself. (<code>overflow-wrap: anywhere</code>)</p>
            <p>They say the fishing is excellent at
            Lake <em class="overflow-wrap-3">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
            though I've never been there myself. (<code>overflow-wrap: break-word</code>)</p>
          </div>

        <div class="section4">
        </div>

    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'テキスト操作系プロパティ'
            }
        },
    }
</script>

<style scoped>
.shadow-1 {
    text-shadow: blue 3px 3px;
}
.shadow-2 {
    text-shadow: blue 3px 3px 10px;
}

.decoration-1 {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: red;
}
.decoration-2 {
    text-decoration-line: underline overline line-through;
}

.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.white-space-1 { white-space: normal; }
.white-space-2 { white-space: nowrap; }
.white-space-3 { white-space: pre; }
.white-space-4 { white-space: pre-wrap; }
.white-space-5 { white-space: pre-line; }
.white-space-6 { white-space: break-spaces; }

div.section3 p {
   width: 13em;
   margin: 2px;
   background: gold;
}

.overflow-wrap-1 { 
   overflow-wrap: normal; 
}
.overflow-wrap-2 { 
   overflow-wrap: anywhere; 
}
.overflow-wrap-3 {
   overflow-wrap: break-word;
}


</style>
