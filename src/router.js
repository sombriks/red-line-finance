const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: require("./views/S0001-login/login.vue") },
    { path: '/cadastro', component: require("./views/S0002-cadastro/cadastro.vue") },
    { path: '/relatorios', component: require("./views/S0004-relatorios/relatorios.vue") },
    { path: '/categorias', component: require("./views/S0005-categorias/categorias.vue") },
    { path: '/projecoes', component: require("./views/S0006-projecoes/projecoes.vue") },
    { path: '/lancamentos', component: require("./views/S0007-lancamento/lancamento.vue") },
  ]
});

// TODO vuex and router
// router.beforeEach((to, from, next) => {
//   if (to.path == "/login" || to.path == "/cadastro") next();
//   else if (globalstore.usuario) next();
//   else next("/login");
// });

module.exports = router;