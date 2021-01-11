<template>
  <div class="hy-card" :style="styleObject">
    <img v-if="hasImg" :src="imgSrc" />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HyCard",
  props: {
    imgSrc: {
      default: "https://placekitten.com/1000/600"
    },
    width: {
      default: "256px"
    },
    height: {
      default: "min-content"
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
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.hy-card {
  > img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
    margin: 0;
    display: block;
  }
  > div {
    width: 100%;
    background-color: #e9f3f3;
    border-radius: 0 0 10px 10px;
    margin: 0;
  }
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 5px 7px;
  border-radius: 10px;
}
</style>
