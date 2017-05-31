<template>
  <form @submit.prevent="dologin" class="row center-xs top-xs">
    <div class="col-xs-8 col-xs-offset-2">
      <h1 class="r">Red Line finance</h1>
      <p>Ajuda pra manter o juízo e dicas espertas pras contas não apertarem</p>
      <mu-text-field type="email" label="Email" labelFloat v-model="usuario.email" required/>
      <mu-text-field type="password" label="Senha" labelFloat v-model="usuario.senha" required/>
      <br/>
      <br/>
      <mu-raised-button label="Entrar" primary type="submit" fullWidth/>
      <br/>
      <br/>
      <mu-flat-button label="Cadastrar" secondary href="#/cadastro" />
    </div>
  </form>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Login",
  created() {
    if (globalstore.usuario)
      this.initredir();
  },
  data() {
    return {
      globalstore,
      usuario: {}
    }
  },
  methods: {
    dologin() {
      globalstore.existe(this.usuario).then(_ => {
        return globalstore.autentica(this.usuario);
      }).then(_ => {
        this.initredir();
      }).catch(e => {
        alert(e);
      });
    },
    initredir() {
      if (!globalstore.usuario.projecoes)
        window.location.href = "#/projecoes";
      else
        window.location.href = "#/lancamentos";
    }
  }
}
</script>
