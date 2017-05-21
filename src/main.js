
require("./main.css");

const Vue = require("vue");
const VueRouter = require("vue-router");
const MuseUI = require("muse-ui");

Vue.use(VueRouter);
Vue.use(MuseUI);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: require("./features/S0001-login/login.vue") }
  ]
});

const appInit = () => new Vue({
  router,
  el: "#app",
  render: (r) => r(require("./features/S0003-menu/menu.vue"))
});

appInit();