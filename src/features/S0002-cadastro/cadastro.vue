<template>
  <form @submit.prevent="docadastro" class="row center-xs top-xs">
    <div class="col-xs-8 col-xs-offset-2">
      <h1 class="r">Novo usuário</h1>
      <p>Os dados são personalizados por usuário, então crie o seu.</p>
      <mu-text-field type="email" label="Email" labelFloat v-model="usuario.email" required/>
      <br/>
      <mu-text-field label="Seu nome" labelFloat v-model="usuario.nome" required/>
      <br/>
      <mu-text-field type="password" label="Senha" labelFloat v-model="usuario.senha" required/>
      <mu-text-field type="password" label="Senha novamente" labelFloat v-model="usuario.senha2"
        required/>
      <br/>
      <br/>
      <mu-raised-button label="Cadastrar" primary type="submit" fullWidth/>
      <br/>
      <br/>
      <mu-flat-button label="Voltar" href="#/login" />
    </div>
  </form>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Cadastro",
  data() {
    return {
      globalstore,
      usuario: {}
    };
  },
  methods: {
    docadastro() {
      globalstore.cadastra(this.usuario).then(_ => {
        alert("Cadastro concluído!");
        window.location.href = "#/projecoes";
      }).catch(e => {
        alert(e);
      });
    }
  }
}
</script>
