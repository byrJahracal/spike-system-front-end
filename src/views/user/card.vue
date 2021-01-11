<template>
  <de-card :img="item.commodityName">
    <div class="cardBody">
      <p normal>买家：{{ item.username }}</p>
      <p normal>商品名称：{{ item.commodityName }}</p>
      <p normal>秒杀量：{{ item.number }}</p>
      <p normal>成交额：{{ item.amount }}</p>
      <p title class="emergency">秒杀结果：{{ item.state }}</p>
      <p normal class="emergency">秒杀时间：{{ item.time }}</p>
      <div style="height:35px"></div>
    </div>
    <div class="buttonDiv" slot="slot2">
      <el-button @click="deleteItem()">删除</el-button>
    </div>
  </de-card>
</template>

<script>
import DeCard from "content/card";
import { deleteItem } from "network/user";
import { mapActions } from "vuex";
export default {
  components: {
    DeCard
  },
  props: {
    item: {
      default: () => {
        return {
          id: 0,
          username: "consumer2",
          commodityName: "梨",
          number: 5,
          amount: 100,
          state: "秒杀失败",
          time: "1111"
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("User", ["getItems"]),
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
          this.getItems();
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
    margin-bottom: 3px;
  }
  width: 100%;
  height: min-content;
}
.buttonDiv {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  height: max-content;
  margin-bottom: 5px;
  padding-right: 20px;
}
.emergency {
  color: rgb(255, 115, 22);
}
</style>
