<template>
  <div body-horizontal>
    <div id="dialogBack" v-if="mode">
      <form>
        <div>
          <p>名称:</p>
          <input type="text" v-model="newItem.name" />
        </div>
        <div>
          <p>价格:</p>
          <input type="number" v-model.number="newItem.price" min="0" />
        </div>
        <div>
          <p>库存:</p>
          <input type="number" v-model.number="newItem.remain" min="0" />
        </div>
        <div>
          <p>类型:</p>
          <input type="text" v-model="newItem.type" min="0" />
        </div>
        <div>
          <p>商品描述:</p>
          <textarea type="text" v-model="newItem.comment" rows="8" />
        </div>
        <div class="buttonDiv">
          <el-button @click="changeMode()">取消</el-button>
          <el-button @click="addItem()">确认</el-button>
        </div>
      </form>
    </div>
    <de-menu title="Manage" :menu="currentMenu" @flip="flip"></de-menu>
    <div>
      <div main>
        <de-card v-for="(item, i) in items" :key="i" :item="item"></de-card>
      </div>
      <el-button id="addButton" @click="changeMode">添加</el-button>
    </div>
  </div>
</template>

<script>
import DeMenu from "content/menu";
import { mapActions, mapState } from "vuex";
import DeCard from "./card";
import { addItem } from "network/manage";
export default {
  created() {
    this.getMenu("manage").then(() => {
      this.getItems(this.currentMenu[0].title);
      this.currentTitle = this.currentMenu[0].title;
    });
  },
  components: { DeMenu, DeCard },
  props: {},
  data() {
    return {
      currentTitle: "",
      mode: false,
      newItem: {
        name: "",
        remain: 0,
        comment: "",
        price: 0,
        type: ""
      }
    };
  },
  computed: {
    ...mapState(["currentMenu"]),
    ...mapState("Manage", ["items"])
  },
  methods: {
    ...mapActions(["getMenu"]),
    ...mapActions("Manage", ["getItems"]),
    flip(title) {
      this.getItems(title);
    },
    addItem() {
      if (
        this.newItem.name != "" &&
        typeof this.newItem.price === "number" &&
        typeof this.newItem.remain === "number" &&
        this.newItem.comment != "" &&
        this.newItem.type != ""
      ) {
        addItem(this.newItem)
          .then(res => {
            if (res.result) {
              this.$message({
                type: "success",
                message: "添加成功！"
              });
            } else {
              this.$message({
                type: "error",
                message: "添加失败！"
              });
            }
            this.getItems(this.currentTitle);
          })
          .catch(err => {
            console.error(err);
          });
        this.changeMode();
      } else {
        this.$alert("请输入完整的商品信息！");
      }
    },
    changeMode() {
      this.mode = !this.mode;
    }
  }
};
</script>

<style scoped lang="scss">
#addButton {
  bottom: 0;
  float: right;
  position: sticky;
  margin: 12px 16px;
}
#dialogBack {
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(63, 63, 63, 0.315);
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    }
    div {
      position: relative;
    }
    p {
      padding: 5px 0;
      font-weight: bold;
    }
  }
}
</style>
