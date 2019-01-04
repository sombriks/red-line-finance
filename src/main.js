console.log(
  "this is Red Line Finance version %s",
  require("../package.json").version
);
console.log("we are on %s mode", process.env.NODE_ENV || "development");

require("./main.css"); // css entry point

const Vue = require("vue");
const VueRouter = require("vue-router");
const MuseUI = require("muse-ui");
Vue.use(MuseUI);

const Theme = require("muse-ui/lib/theme").default;
Theme.use("dark");

Vue.component("saldo-parcial", require("./components/saldo-parcial.vue"));
Vue.component("novo-lancamento", require("./components/novo-lancamento.vue"));
Vue.component("item-lancamento", require("./components/item-lancamento.vue"));
Vue.component("red-line", require("./components/red-line.vue"));

const appInit = () =>
  new Vue({
    el: "#app",
    router: require("./router"),
    render: r => r(require("./App.vue"))
  });

appInit();
