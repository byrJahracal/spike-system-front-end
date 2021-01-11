<template>
  <div body-horizontal>
    <de-menu title="Shop" :menu="currentMenu" @flip="flip"></de-menu>
    <div>
      <div main>
        <de-card v-for="(item, i) in items" :key="i" :item="item"></de-card>
      </div>
    </div>
  </div>
</template>

<script>
import DeMenu from "content/menu";
import { mapActions, mapState } from "vuex";
import DeCard from "./card";
export default {
  created() {
    this.getMenu("shop").then(() => {
      this.getItems(this.currentMenu[0].title);
    });
  },
  components: { DeMenu, DeCard },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentMenu"]),
    ...mapState("Shop", ["items"])
  },
  methods: {
    ...mapActions(["getMenu"]),
    ...mapActions("Shop", ["getItems"]),
    flip(title) {
      this.getItems(title);
    }
  }
};
</script>

<style scoped lang="scss"></style>
