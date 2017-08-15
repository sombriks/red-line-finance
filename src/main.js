
console.log("we are on %s mode", process.env.NODE_ENV || "development");

require("./main.css");

const globalstore = require("./components/globalstore");

const Vue = require("vue");
const VueRouter = require("vue-router");
const MuseUI = require("muse-ui");

globalstore.loadcontext();

Vue.use(VueRouter);
Vue.use(MuseUI);

Vue.component("saldo-parcial", require("./components/saldo-parcial.vue"));
Vue.component("novo-lancamento", require("./components/novo-lancamento.vue"));
Vue.component("item-lancamento", require("./components/item-lancamento.vue"));
Vue.component("red-line", require("./components/red-line.vue"));

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: require("./features/S0001-login/login.vue") },
    { path: '/cadastro', component: require("./features/S0002-cadastro/cadastro.vue") },
    { path: '/relatorios', component: require("./features/S0004-relatorios/relatorios.vue") },
    { path: '/categorias', component: require("./features/S0005-categorias/categorias.vue") },
    { path: '/projecoes', component: require("./features/S0006-projecoes/projecoes.vue") },
    { path: '/lancamentos', component: require("./features/S0007-lancamento/lancamento.vue") },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || to.path == "/cadastro")
    next();
  else if (globalstore.usuario)
    next();
  else
    next("/login");
})

const appInit = () => new Vue({
  router,
  el: "#app",
  render: (r) => r(require("./features/S0003-menu/menu.vue"))
});

appInit();