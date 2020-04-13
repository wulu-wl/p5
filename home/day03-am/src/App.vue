<template>
  <div id="app">sss</div>
</template>

<script>
import jsonp from "@/assets/jsonp.js";
import axios from "axios";
export default {
  name: "App",
  mounted() {
    axios.get("/api/getname").then(res => {
      console.log(res);
    });
    // jsonp({
    //   url: "http://localhost:3000/getname",
    //   params: {},
    //   callback: "a"
    // }).then(res => {
    //   console.log(res);
    // });
  }
};
</script>

<style>
</style>
