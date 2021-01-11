<template>
  <div side id="menu">
    <el-menu
      heyi
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#546364"
      text-color="#fff"
      active-text-color="rgb(124, 243, 213)"
    >
      <el-menu-item-group>
        <h1 slot="title">{{ title }}</h1>
        <el-menu-item
          v-for="(item, i) in menu"
          :key="i"
          :index="String(i)"
          @click="flip(item.title)"
          style="overflow:hidden"
        >
          <div id="on"></div>
          <img id="down" :src="getImage(item.icon)" />
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    menu: {
      default: () => [
        { icon: "icons8-苹果", title: "第一栏" },
        { icon: "icons8-运动器材", title: "第二栏" }
      ]
    },
    title: {
      default: "test"
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getImage(src) {
      return require("image/" + src + ".png");
    },
    flip(title) {
      this.$emit("flip", title);
    }
  }
};
</script>

<style scoped>
#menu {
  width: 200px;
}
h1 {
  color: rgb(79, 206, 174);
}
#on {
  position: absolute;
  display: inline-block;
  width: 25px;
  height: 30px;
  top: 50%;
  transform: translate(-22px, -50%);
  z-index: 1;
  background-color: #546364;
}
#down {
  position: relative;
  left: -20px;
  width: 22px;
  height: auto;
  margin-right: 8px;
  filter: drop-shadow(25px 0 0);
}
</style>
