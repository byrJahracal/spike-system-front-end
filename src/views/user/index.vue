<template>
  <div body-horizontal>
    <de-menu title="User" :menu="currentMenu" @flip="flip"></de-menu>
    <div>
      <div main>
        <div v-if="activeMenuTitle === '个人资料'">
          <form>
            <div>
              <p>用户名:{{ username }}</p>
            </div>
            <div>
              <p>身份:{{ role }}</p>
            </div>
            <div v-if="role === 'consumer'">
              <p>账户余额:{{ balance }}</p>
            </div>
            <div class="buttonDiv" v-if="role === 'consumer'">
              <p>充值：</p>
              <input type="number" min="1" v-model.number="amount" />
              <el-button @click="toCharge()">确认充值</el-button>
            </div>
            <div class="buttonDiv">
              <el-button @click="toLogout()">退出登录</el-button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="activeMenuTitle === '秒杀订单'" main>
        <de-card v-for="(item, i) in items" :key="i" :item="item"></de-card>
      </div>
    </div>
  </div>
</template>

<script>
import DeMenu from "content/menu";
import { mapState, mapActions } from "vuex";
import DeCard from "./card";
export default {
  created() {
    this.getMenu("user").then(() => {
      this.flip(this.currentMenu[0].title);
      this.getItems();
    });
  },
  components: { DeMenu, DeCard },
  props: {},
  data() {
    return {
      activeMenuTitle: "",
      amount: 0
    };
  },
  computed: {
    ...mapState(["currentMenu"]),
    ...mapState("User", ["role", "username", "balance", "items"])
  },
  methods: {
    ...mapActions(["getMenu"]),
    ...mapActions("User", ["getItems", "charge", "logout"]),
    flip(title) {
      this.activeMenuTitle = title;
      console.log(title);
    },
    toCharge() {
      if (typeof this.amount === "number") {
        this.charge(this.amount)
          .then(res => {
            if (res.result) {
              this.$message({
                type: "success",
                message: "充值成功！"
              });
            } else {
              this.$message({
                type: "error",
                message: "充值失败！"
              });
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        this.$alert("请输入正确的充值金额！");
      }
    },
    toLogout() {
      let information = "您确认退出登录吗？";
      this.$confirm(information, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.logout().then(() => {
          this.$router.push("/login");
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
form {
  position: relative;
  width: 320px;
  background: rgb(235, 235, 235);
  padding: 8px 6px;
  border-radius: 15px;
  input,
  textarea {
    width: 100%;
    margin-right: 8px;
    border: 3px solid rgb(113, 198, 255);
    border-radius: 5px;
    background: #ffffff;
    outline: none;
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
  input {
    height: 30px;
    margin-bottom: 4px;
  }
  div {
    position: relative;
  }
  p {
    padding: 5px 0;
    font-weight: bold;
    white-space: nowrap;
  }
  .buttonDiv {
    display: flex;
    align-items: center;
    right: 0;
    bottom: 0;
    height: max-content;
    margin-bottom: 5px;
    padding-right: 10px;
  }
}
</style>
