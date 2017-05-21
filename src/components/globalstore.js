
const glob = {
  loadcontext(){
    const data = localStorage.getItem("red-line");
    if(data){
      data = JSON.parse(data);
      glob.usuario = data.usuario;
      glob.lancamentos = data.lancamentos;      
    }
  },
  savecontext(){
    let data = {
      usuario: glob.usuario,
      lancamentos: glob.lancamentos
    };
    data = JSON.stringify(data);
    localStorage.setItem("red-line",data);
  }
};

module.exports = glob;