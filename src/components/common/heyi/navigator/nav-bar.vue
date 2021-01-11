<template>
  <div class="nav-bar">
    <ul>
      <nav-item
        v-for="(item, i) in navList"
        :key="i"
        :path="item.path"
        :icon="item.icon"
        :title="item.title"
      ></nav-item>
    </ul>
  </div>
</template>

<script>
import NavItem from "./nav-item";
export default {
  name: "HyNavBar",
  components: {
    NavItem
  },
  props: {
    navList: null
    /*
      default:[
        {
          path:"/home",
          icon:"el-icon-s-home",
          title:"主页"
        }
      ]*/
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.nav-bar {
  > ul {
    list-style-type: none;
  }
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #546364;
  border-radius: 10px;
  width: max-content;
}
</style>
