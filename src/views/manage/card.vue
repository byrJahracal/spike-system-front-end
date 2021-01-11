<template>
  <de-card :img="item.name">
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
          <el-button @click="changeItem()">提交</el-button>
        </div>
      </form>
    </div>
    <div class="cardBody">
      <p title>{{ item.name }}</p>
      <p normal>价格：{{ item.price }}</p>
      <p comment :class="{ emergency: isFlash }">库存：{{ remain }}</p>
      <p comment>商品描述：{{ item.comment }}</p>
      <div style="height:35px"></div>
    </div>
    <div slot="slot2" class="buttonDiv">
      <el-button @click="deleteItem()">删除</el-button>
      <el-button @click="changeMode()">编辑</el-button>
    </div>
  </de-card>
</template>

<script>
import DeCard from "content/card";
import { changeItem, deleteItem } from "network/manage";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  components: {
    DeCard
  },
  props: {
    item: {
      default: () => {
        return {
          id: 0,
          name: "苹果",
          remain: 111,
          comment: "bucuo",
          price: 10,
          type: "水果"
        };
      }
    }
  },
  data() {
    return {
      mode: false,
      number: 0,
      newItem: {
        id: 0,
        name: "苹果",
        remain: 111,
        comment: "bucuo",
        price: 10,
        type: "水果"
      }
    };
  },
  computed: {
    ...mapState("User", ["balance"]),
    remain() {
      if (this.item.remain >= 100) {
        return "充足";
      }
      return this.item.remain;
    },
    isFlash() {
      if (this.item.remain >= 100) {
        console.log(this.item.remain);
        return false;
      }
      return true;
    }
  },
  methods: {
    ...mapMutations("User", ["setBalance"]),
    ...mapActions("Manage", ["getItems"]),
    changeMode() {
      if (!this.mode) {
        this.newItem = {
          id: this.item.id,
          name: this.item.name,
          remain: this.item.remain,
          comment: this.item.comment,
          price: this.item.price,
          type: this.item.type
        };
      }
      this.mode = !this.mode;
    },
    changeItem() {
      if (
        this.newItem.name != "" &&
        typeof this.newItem.price === "number" &&
        typeof this.newItem.remain === "number" &&
        this.newItem.comment != "" &&
        this.newItem.type != ""
      ) {
        changeItem(this.newItem)
          .then(res => {
            if (res.result) {
              this.$message({
                type: "success",
                message: "修改成功！"
              });
            } else {
              this.$message({
                type: "error",
                message: "修改失败！"
              });
            }
            this.getItems(this.item.type);
          })
          .catch(err => {
            console.error(err);
          });
        this.changeMode();
      } else {
        this.$alert("请输入完整的商品信息！");
      }
    },
    deleteItem() {
      deleteItem(this.item.id)
        .then(res => {
          if (res.result) {
            this.$message({
              type: "success",
              message: "删除成功！"
            });
          } else {
            this.$message({
              type: "error",
              message: "删除失败！"
            });
          }
          this.getItems(this.item.type);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.cardBody {
  padding-left: 8px;
  padding-top: 3px;
  padding-bottom: 5px;
  p {
    margin-bottom: 6px;
  }
  width: 100%;
  height: min-content;
}
#form {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  > div {
    margin-top: 3px;
    line-height: 1.5;
  }
}
.buttonDiv {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  height: 40px;
  margin-right: 6px;
  margin-bottom: 5px;
  padding-right: 20px;
  input {
    width: 50px;
    margin-right: 8px;
    border: 3px solid rgb(113, 198, 255);
    border-radius: 10%;
    background: #ffffff;
    outline: none;
    height: 30px;
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
}
.emergency {
  color: rgb(255, 115, 22);
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
