<template>
  <div>
    <router-view></router-view>
    <mu-icon-menu icon="menu" v-show="globalstore.usuario" class="basemenu">
      <mu-menu-item title="Lançamento" href="#/lancamentos" rightIcon="add_box" />
      <mu-menu-item title="Projeção" href="#/projecoes" rightIcon="assignment" />
      <mu-menu-item title="Categoria" href="#/categorias" rightIcon="format_list_bulleted" />
      <mu-menu-item title="Relatório" href="#/relatorios" rightIcon="assessment" />
      <mu-menu-item title="Sair" @click="sair" rightIcon="exit_to_app" />
    </mu-icon-menu>
    <mu-dialog title="Red Line Finance" :open="mostralerta" @close="closealert">
      {{txtalerta}}
      <mu-raised-button slot="actions" @click="closealert" primary label="OK" />
    </mu-dialog>
    <mu-dialog title="Red Line Finance" :open="mostraconfirm" @close="cbconfirm('no')">
      {{txtconfirm}}
      <mu-raised-button slot="actions" @click="cbconfirm('no')" label="CANCELAR" />
      <mu-raised-button slot="actions" @click="cbconfirm('yes')" primary label="OK" />
    </mu-dialog>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Menu",
  created() {
    window.alert = this.alert;
    window.confirm = this.confirm;
  },
  data() {
    return {
      globalstore,
      txtalerta: "",
      txtconfirm: "",
      mostralerta: false,
      mostraconfirm: false,
      _cbconfirm: null
    }
  },
  methods: {
    alert(msg) {
      this.txtalerta = msg;
      this.mostralerta = true;
    },
    confirm(msg, cbconfirm) {
      this.txtconfirm = msg;
      this.mostraconfirm = true;
      this._cbconfirm = cbconfirm;
    },
    closealert() {
      this.mostralerta = false;
    },
    cbconfirm(yesno) {
      this.mostraconfirm = false;
      if (this._cbconfirm) {
        this._cbconfirm(yesno);
        this._cbconfirm = null;
      }
    },
    sair() {
      confirm("Vai mesmo sair?", okmaybe => {
        if ("yes" == okmaybe) {
          this.globalstore.usuario = null;
          this.globalstore.savecontext();
          window.location.href = "#/login";
        }
      });
    }
  }
}
</script>

<style>
.basemenu {
  position: fixed;
  right: 0.5em;
  top: 0px;
  font-weight: bolder;
  color:red;
}
</style>
