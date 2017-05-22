<template>
  <div>
    <router-view></router-view>
    <mu-dialog title="Red Line Finance" :open="mostralerta" @close="closeaert">
      {{txtalerta}}
      <mu-raised-button slot="actions" @click="closeaert" primary label="OK"/>
    </mu-dialog>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Menu",
  created() {
    globalstore.loadcontext();
    window.alert = this.alert;
  },
  data() {
    return {
      globalstore,
      txtalerta: "",
      mostralerta: false
    }
  },
  methods: {
    alert(msg) {
      this.txtalerta = msg;
      this.mostralerta = true;
    },
    closeaert(){
      this.mostralerta = false;
    }
  }
}
</script>

<style>

</style>
