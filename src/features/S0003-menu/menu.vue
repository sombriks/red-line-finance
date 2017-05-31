<template>
  <div>
    <router-view></router-view>
    <mu-icon-menu icon="more_vert" v-show="globalstore.usuario" class="basemenu">
      <mu-menu-item value="1" title="Refresh" />
      <mu-menu-item value="2" title="Send feedback" />
      <mu-menu-item value="3" title="Settings" />
      <mu-menu-item value="4" title="Help" />
      <mu-menu-item value="5" title="Sign out" />
    </mu-icon-menu>
    <mu-dialog title="Red Line Finance" :open="mostralerta" @close="closeaert">
      {{txtalerta}}
      <mu-raised-button slot="actions" @click="closeaert" primary label="OK" />
    </mu-dialog>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Menu",
  created() {
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
    closeaert() {
      this.mostralerta = false;
    }
  }
}
</script>

<style>
.basemenu{
  position:fixed;
  right:0.5em;
  top:0px;
}
</style>
