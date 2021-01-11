<template>
  <div id="app">
    <de-header v-if="isLogged"></de-header>
    <router-view />
    <de-footer v-if="isLogged"></de-footer>
  </div>
</template>

<script>
import DeHeader from "content/header";
import DeFooter from "content/footer";
import { mapGetters } from "vuex";
export default {
  components: {
    DeHeader,
    DeFooter
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("User", ["isLogged"])
  },
  methods: {}
};
</script>

<style lang="scss" scope>
@import "assets/css/base.css";
@import "assets/css/heyi/heyi.scss";
</style>
