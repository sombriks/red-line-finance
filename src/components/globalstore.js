
const glob = {
  loadcontext() {
    const data = localStorage.getItem("red-line");
    if (data) {
      data = JSON.parse(data);
      glob.usuario = data.usuario;
      glob.usuarios = data.usuarios;
      glob.categorias = data.categorias;
      glob.lancamentos = data.lancamentos;
    } else
      glob.initcontext();
  },
  savecontext() {
    let data = {
      usuario: glob.usuario,
      usuarios: glob.usuarios,
      categorias: glob.categorias,
      lancamentos: glob.lancamentos
    };
    data = JSON.stringify(data);
    localStorage.setItem("red-line", data);
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
    glob.lancamentos = [];
  },
  existe(usuario) {
    if (!usuario)
      return false
    return glob.usuarios.filter(e => e.email == usuario.email).length > 0;
  },
  autentica(usuario) {
    glob.usuario = glob.usuarios.filter(e => {
      if(e.email == usuario.email && e.senha == usuario.senha)
        return e; 
    })[0];
  }
};

module.exports = glob;