
// imports

const md5 = require("md5");
const Vue = require("vue");

// models / functions

const glob = {
  loadcontext() {
    let data = localStorage.getItem("red-line");
    if (data) {
      data = JSON.parse(data);
      glob.usuario = data.usuario;
      glob.usuarios = data.usuarios;
      glob.categorias = data.categorias;
      console.log("context loaded");
    } else
      glob.initcontext();
  },
  savecontext() {
    // sync usuario logado com o que tem no cadastro
    if (glob.usuario) {
      glob.usuarios = glob.usuarios.filter(e => e.email != glob.usuario.email);
      glob.usuarios.push(glob.usuario);
    }
    // ah, good to go
    let data = {
      usuario: glob.usuario,
      usuarios: glob.usuarios,
      categorias: glob.categorias
    };
    data = JSON.stringify(data);
    localStorage.setItem("red-line", data);
    console.log(glob)
    console.log("context saved");
  },
  initcontext() {
    glob.usuarios = [];
    glob.categorias = [
      { nome: "Alimentação", tipo: "Saída" },
      { nome: "Transporte", tipo: "Saída" },
      { nome: "Vestuário", tipo: "Saída" },
      { nome: "Moradia", tipo: "Saída" },
      { nome: "Lazer", tipo: "Saída" },
      { nome: "Ganhos", tipo: "Entrada" }
    ];
    console.log("context created");
    glob.savecontext();
  },
  existe(usuario) {
    return new Promise((resolve, reject) => {
      if (!usuario)
        reject("Usuário não encontrado");
      const u = glob.usuarios.filter(e => e.email == usuario.email);
      if (u.length > 0)
        resolve(u);
      else
        reject("Usuário não encontrado");
    });
  },
  autentica(usuario) {
    return new Promise((resolve, reject) => {
      glob.usuario = glob.usuarios.filter(e => {
        if (e.email == usuario.email && e.senha == md5(usuario.senha))
          return e;
      })[0];
      Vue.set(glob, "usuario", glob.usuario);
      glob.savecontext();
      if (glob.usuario) resolve(glob.usuario);
      else reject("Usuario ou senha incorretos");
    });
  },
  cadastra(usuario) {
    return new Promise((resolve, reject) => {
      if (!usuario.email) {
        reject("informe seu email");
        return;
      }
      if (!usuario.nome) {
        reject("informe seu nome");
        return;
      }
      if (!usuario.senha) {
        reject("informe sua senha");
        return;
      }
      if (usuario.senha != usuario.senha2) {
        reject("senha e confirmação de senha diferem");
        return;
      }
      glob.existe(usuario).then(_ => {
        reject("Usuário com este email já existe");
      }).catch(_ => {
        delete usuario.senha2;
        usuario.senha = md5(usuario.senha);
        usuario.lancamentos = [];
        usuario.projecao = [];
        glob.usuarios.push(usuario);
        glob.usuario = usuario;
        Vue.set(glob, "usuario", usuario);
        glob.savecontext();
        resolve("OK");
      });
    });
  }
};

// exports

module.exports = glob;