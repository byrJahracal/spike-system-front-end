<template>
  <div class="hy-card">
    <div id="cardMain" :style="styleObject">
      <img v-if="hasImg" :src="image" />
      <div>
        <slot></slot>
      </div>
    </div>
    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {
  name: "HyCard",
  props: {
    img: {
      default: "https://placekitten.com/256/256"
    },
    width: {
      default: "512px"
    },
    height: {
      default: "156px"
    },
    hasImg: {
      default: true
    }
  },
  components: {},
  data() {
    return {
      styleObject: {
        width: this.width,
        height: this.height
      }
    };
  },
  computed: {
    image() {
      let src = require("image/" + this.img + ".jpg");
      return src;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.hy-card {
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 5px 7px;
  border-radius: 10px;
  position: relative;
  padding-right: 8px;
}
#cardMain {
  padding: 0;
  border-radius: 10px;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  > img {
    width: auto;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    margin: 0;
    display: block;
  }
  > div {
    background-color: #e9f3f3;
    border-radius: 0 10px 10px 0px;
    margin: 0;
    padding: 8px 6px;
    overflow-y: auto;
    width: 100%;
    height: 156px;
    position: relative;
  }
}
</style>
