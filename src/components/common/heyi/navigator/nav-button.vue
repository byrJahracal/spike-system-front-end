<template>
  <div class="nav-button">
    <el-button type="info" plain>{{ title }}</el-button>
    <div>
      <nav-bar :nav-list="navList"></nav-bar>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavBar from "./nav-bar";
export default {
  name: "HyNavButton",
  props: {
    navList: null,
    title: {
      default: "sail"
    }
  },
  components: {
    NavBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.nav-button {
  > div {
    display: none;
    position: absolute;
    z-index: 100;
    right: 100%;
    top: 0%;
    width: max-content;
    padding-right: 3px;
  }
  &:hover > div {
    display: block;
  }
  position: absolute;
  z-index: 100;
}
</style>
