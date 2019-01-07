const version = require("../package.json").version;
console.log("this is Red Line Finance [%s] version", version);
console.log("we are on [%s] mode", process.env.NODE_ENV || "development");

require("./main.css"); // css entry point

const Vue = require("vue");
const MuseUI = require("muse-ui");
Vue.use(MuseUI);

const Theme = require("muse-ui/lib/theme").default;
Theme.use("dark");

const appInit = _ =>
  global.redline = new Vue({
    el: "#app",
    name: "red-line-finance",
    store: require("./store"),
    router: require("./router").router,
    render: r => r(require("./App.vue"))
  });

appInit();
