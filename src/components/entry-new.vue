<template>
  <form @submit.prevent="dosave()">
    <mu-card>
      <mu-card-text>
        <mu-text-field
          v-model="entry.entryValue"
          label="New Entry"
          type="number"
          prefix="$"
          label-float
          full-width
        />
        <mu-text-field v-model="entry.entryDescription" label="Description" label-float full-width/>
        <mu-select label="Category" v-model="entry.categoryId" full-width>
          <mu-option
            v-for="cat in categories"
            :key="cat.categoryId"
            :label="cat.categoryDescription"
            :value="cat.categoryId"
          ></mu-option>
        </mu-select>
      </mu-card-text>
      <mu-card-actions>
        <mu-flex justify-content="end">
          <mu-button type="submit" flat primary>Save</mu-button>
        </mu-flex>
      </mu-card-actions>
    </mu-card>
  </form>
</template>

<script>
const { mapState } = require("vuex");
const { db } = require("../store");
module.exports = {
  name: "entry-new",
  data: _ => ({ entry: { entryDescription: "", entryValue: 0.0 } }),
  computed: mapState(["categories"]),
  methods: {
    dosave() {
      db.entry.add(this.entry);
      this.entry = { entryDescription: "", entryValue: 0.0 };
    }
  }
};
</script>

<style>
</style>
