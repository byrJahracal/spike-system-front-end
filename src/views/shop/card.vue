<template>
  <de-card :img="item.name"
    ><div class="cardBody">
      <p title>{{ item.name }}</p>
      <p normal>价格：{{ item.price }}</p>
      <p comment :class="{ emergency: isFlash }">库存：{{ remain }}</p>
      <p comment>商品描述：{{ item.comment }}</p>
      <div style="height:35px"></div>
    </div>
    <div id="consumeDiv" slot="slot2">
      <div style="display:inline-block">
        数量:
        <input type="number" v-model.number="number" />
      </div>
      <el-button v-if="isFlash" @click="flash()" min="1">秒杀</el-button>
      <el-button v-else @click="consume()" min="1">购买</el-button>
    </div>
  </de-card>
</template>

<script>
import DeCard from "content/card";
import { flash, consume } from "network/shop";
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
      number: 0
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
        return false;
      }
      return true;
    }
  },
  methods: {
    ...mapMutations("User", ["setBalance"]),
    ...mapActions("Shop", ["getItems"]),
    consume() {
      if (
        typeof this.number == "number" &&
        this.number <= this.item.remain &&
        this.number > 0
      ) {
        if (this.balance >= this.number * this.item.price) {
          let information =
            "您确定购买数量为" + this.number + "的" + this.item.name + "吗？";
          this.$confirm(information, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            consume({
              id: this.item.id,
              number: this.number
            })
              .then(res => {
                if (res.result) {
                  this.setBalance(res.balance);
                  this.$message({
                    type: "success",
                    message: "购买成功！共消费" + res.amount + "元。"
                  });
                } else {
                  this.$message({
                    type: "error",
                    message: "购买失败！"
                  });
                }
                this.getItems(this.item.type);
              })
              .catch(err => {
                console.error(err);
              });
          });
        } else {
          this.$alert("余额不足！", "提示");
        }
      } else {
        this.$alert("请输入正确的购买数量(1-" + this.item.remain + ")", "提示");
      }
    },
    flash() {
      if (
        typeof this.number == "number" &&
        this.number <= this.item.remain &&
        this.number > 0
      ) {
        if (this.balance >= this.number * this.item.price) {
          let information =
            "您确定下单秒杀数量为" +
            this.number +
            "的" +
            this.item.name +
            "吗？";
          this.$confirm(information, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            flash({
              id: this.item.id,
              number: this.number
            })
              .then(res => {
                if (res.result) {
                  this.$message({
                    type: "success",
                    message: "下单成功！是否秒杀成功请查询订单！"
                  });
                } else {
                  this.$message({
                    type: "error",
                    message: "下单失败！"
                  });
                }
                this.getItems(this.item.type);
              })
              .catch(err => {
                console.error(err);
              });
          });
        } else {
          this.$alert("余额不足！", "提示");
        }
      } else {
        this.$alert("请输入正确的秒杀数量(1-" + this.item.remain + ")", "提示");
      }
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
#consumeDiv {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  height: max-content;
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
</style>
