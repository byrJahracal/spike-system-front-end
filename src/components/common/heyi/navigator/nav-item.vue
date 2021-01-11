<template>
  <li class="nav-item" left :class="{ active: isActive }" @click="itemClick">
    <div :class="icon" id="div0">
      <slot name="img"></slot>
    </div>
    <div id="div1">
      <span>{{ title }}</span>
      <slot name="content"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "HyNavItem",
  components: {},
  props: {
    icon: {
      default: "el-icon-bicycle"
    },
    title: {
      default: "hello"
    },
    path: {
      type: String,
      default: "/home"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped lang="scss">
.nav-item {
  > #div0 {
    font-size: 24px;
    vertical-align: bottom;
  }
  > #div1 {
    line-height: 1;
    white-space: nowrap;
    font-size: 16px;
    vertical-align: top;
    padding-bottom: 3px;
  }
  &:hover {
    color: orange;
  }
  color: lightgoldenrodyellow;
  text-decoration: none;
  padding: 3px 16px;
  text-align: center;
}
.active {
  color: rgb(164, 200, 255);
}
</style>
