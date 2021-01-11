<template>
  <hy-header
    :icon="icon1"
    :avatar="icon2"
    title="Hedy Shop"
    :username="username"
  >
    <div slot="right">
      <ul navigator>
        <li @click="go('shop')">Shop</li>
        <li @click="go('manage')">Manage</li>
        <li @click="go('user')">User</li>
      </ul>
    </div>
  </hy-header>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {
      icon1: require("image/kawaii-dinosaur.png"),
      icon2: require("image/外星人.png")
    };
  },
  computed: {
    ...mapState("User", ["username"])
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss"></style>
