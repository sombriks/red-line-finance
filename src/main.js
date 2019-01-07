const version = require("../package.json").version;
console.log("This is Red Line Finance version [%s]", version);
console.log("We are on [%s] mode", process.env.NODE_ENV || "development");

require("./main.css"); // css entry point

const Vue = require("vue");
const MuseUI = require("muse-ui");
const Theme = require("muse-ui/lib/theme").default;
Theme.use("dark");
Vue.use(MuseUI);

// components
Vue.component("category-detail", require("./components/category-detail.vue"));
Vue.component("category-listing", require("./components/category-listing.vue"));
Vue.component("entry-detail", require("./components/entry-detail.vue"));
Vue.component("entry-listing", require("./components/entry-listing.vue"));
Vue.component("entry-new", require("./components/entry-new.vue"));
Vue.component("profile-login", require("./components/profile-login.vue"));
Vue.component("profile-new", require("./components/profile-new.vue"));
Vue.component("projection-detail", require("./components/projection-detail.vue"));
Vue.component("projection-listing", require("./components/projection-listing.vue"));
Vue.component("projection-pie", require("./components/projection-pie.vue"));
Vue.component("red-line-graph", require("./components/red-line-graph.vue"));

const appInit = _ =>
  (global.redline = new Vue({
    el: "#app",
    name: "red-line-finance",
    store: require("./store").store,
    router: require("./router").router,
    render: r => r(require("./App.vue"))
  }));

appInit();
