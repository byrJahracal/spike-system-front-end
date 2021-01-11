<template>
  <div main id="main">
    <hy-login-box title="Hedy Shop" @login="toLogin" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.toLogin("null");
  },
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("User", ["role"])
  },
  methods: {
    ...mapActions("User", ["login"]),
    toLogin(user) {
      this.login(user).then(() => {
        switch (this.role) {
          case "consumer": {
            this.$router.push("/shop");
            break;
          }
          case "seller": {
            this.$router.push("/manage");
            break;
          }
          case "false": {
            this.$message({
              type: "error",
              message: "用户名或密码错误！"
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#main {
  background-image: url("~image/online-shopping.jpg");
}
</style>
