<template>
  <form @submit.prevent="dologin" class="row center-xs top-xs">
    <div class="col-xs-4 col-xs-offset-4">
      xxx
    </div>
  </form>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports =  {
  name:"Login",
  created(){
    if(globalstore.usuario)
      window.location.href="#/menu"
  },
  data(){
    return {
      globalstore
    }
  },
  methods:{
    dologin(){
      console.log("login")
    }
  }
}
</script>

<style>

</style>
