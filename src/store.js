const Vue = require("vue");
const Vuex = require("vuex");
Vue.use(Vuex);

const state = {
  projections: [],
  categories: [],
  entries: []
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  }
};

exports.store = new Vuex.Store({ state, mutations });

const Dexie = require("dexie");

const db = new Dexie("red-line-finance");

db.version(1).stores({
  category: "++categoryId,categoryDescription,categoryType",
  entry: "++entryId,entryDtCreation,entryDescription,entryValue,categoryId",
  projection: "++projectionId,projectionDescription,categoryId"
});

db.on("populate", _ => {
  db.category.add({ categoryDescription: "Earnings", categoryType: "IN" });
  db.category.add({ categoryDescription: "Housing", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Eletricity", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Water", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Gas", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Internet", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Cloths", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Food", categoryType: "OUT" });
  db.category.add({ categoryDescription: "Amusement", categoryType: "OUT" });
});

db.open();

exports.db = db;
