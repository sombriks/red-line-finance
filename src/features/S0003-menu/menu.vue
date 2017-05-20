<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports =  {
  name:"Menu",
  created(){

  },
  data(){
    return {
      globalstore
    }
  }
}
</script>

<style>

</style>
