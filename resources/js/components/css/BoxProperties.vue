<template>
    <div id="root">
        <h1>{{msg}}</h1>
        <div class="section1">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        <div class="section2">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        <div class="section3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>

    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'ボックス操作系プロパティ'
            }
        },
    }
</script>

<style scoped>
div.section1 p {
  border: thick dashed red;
  margin: 2rem;
  padding: 1rem;
}
div.section2 p {
  border: thick dashed blue;
  margin: 10rem;
  padding: 5rem;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
}
div.section3 p {
  border: thick dashed green;
  border-radius: 12px;
  margin: 2rem;
  padding: 1rem;
  outline: 0.5rem solid khaki;
  outline-offset: 2rem;
  box-shadow: 10px 5px 20px purple;
}

</style>
