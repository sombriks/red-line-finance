const Vue = require("vue");
const Vuex = require("vuex");
Vue.use(Vuex);

const state = {};

const mutations = {};

const store = new Vuex.Store({ state, mutations });
module.exports = store;
