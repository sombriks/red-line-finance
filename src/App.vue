<template>
  <div>
    <mu-menu class="fix" dark cover :open.sync="open">
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
    <router-view></router-view>
  </div>
</template>

<script>
const { routes } = require("./router");
module.exports = {
  name: "app",
  data() {
    return { open: false, routes: routes.filter(e => e.label) };
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
  left: 1em;
}
</style>
