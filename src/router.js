const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/entries" },
  {
    label: "Entries",
    path: "/entries",
    icon: "receipt",
    component: require("./views/entries.vue")
  },
  {
    label: "Categories",
    path: "/categories",
    icon: "class",
    component: require("./views/categories.vue")
  },
  {
    label: "Projections",
    path: "/projections",
    icon: "poll",
    component: require("./views/projections.vue")
  },
  {
    label: "Profiles",
    path: "/profiles",
    icon: "person",
    component: require("./views/profiles.vue")
  },
  {
    label: "About",
    path: "/about",
    icon: "info",
    component: require("./views/about.vue")
  }
];

const router = new VueRouter({
  routes
});

// TODO vuex and router
// router.beforeEach((to, from, next) => {
//   if (to.path == "/login" || to.path == "/cadastro") next();
//   else if (globalstore.usuario) next();
//   else next("/login");
// });

module.exports = { router, routes };
