<template>
  <div id="header">
    <div id="left" class="slot">
      <img :src="icon" />
      <h3>{{ title }}</h3>
      <slot name="left"></slot>
    </div>
    <div id="right" class="slot">
      <slot name="right"></slot>
      <div id="avatorDIv">
        <img :src="avatar" id="avatar" />
        <div id="avatarDrop">{{ username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HyHeader",
  props: {
    title: {
      default: "Hello World"
    },
    icon: null,
    avatar: null,
    username: null
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
#header {
  background-color: #161616;
  color: rgb(255, 255, 255);
  padding: 3px 14px;
  display: flex;
  align-items: center;
  width: 100%;
  #left {
    > img {
      margin: 3px 7px;
      height: 44px;
      width: auto;
    }
    > h3 {
      display: inline-block;
      margin: 3px 2px;
      font-size: 22px;
    }
  }
  #avatorDIv {
    position: relative;
  }
  #avatorDIv:hover #avatarDrop {
    display: block;
  }
  #right {
    margin-left: auto;
  }
  .slot {
    display: flex;
    align-items: center;
  }
  #avatarDrop {
    position: absolute;
    display: none;
    white-space: nowrap;
    right: 0px;
    width: min-content;
    height: min-content;
    padding: 3px 5px;
    color: #08221a;
    background-color: #e4fff7;
    border-radius: 10%;
  }
  #avatar {
    height: 33px;
    width: auto;
  }
}
</style>
