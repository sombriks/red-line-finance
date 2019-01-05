const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },

  ]
});

// TODO vuex and router
// router.beforeEach((to, from, next) => {
//   if (to.path == "/login" || to.path == "/cadastro") next();
//   else if (globalstore.usuario) next();
//   else next("/login");
// });

module.exports = router;