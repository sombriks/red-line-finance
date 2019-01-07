<template>
  <div>
    <mu-container>
      <mu-row>
        <mu-col span="12" sm="10" md="8" lg="6" xl="5">
          <router-view></router-view>
        </mu-col>
      </mu-row>
    </mu-container>
    <mu-menu class="fix r" dark cover :open.sync="open">
      <mu-button icon>
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item v-for="r in routes" :key="r.label" button @click="nav(r.path)">
          <mu-list-item-title>{{r.label}}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon :value="r.icon"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </div>
</template>

<script>
const { routes } = require("./router");
const { db } = require("./store");
module.exports = {
  name: "app",
  data() {
    return { open: false, routes: routes.filter(e => e.label) };
  },
  created() {
    db.category.toArray().then(cats => {
      // XXX is it my job?
      this.$store.commit("setCategories", cats);
    });
  },
  methods: {
    nav(path) {
      this.open = false;
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.fix {
  position: fixed;
  top: 1em;
  right: 1em;
}
</style>
