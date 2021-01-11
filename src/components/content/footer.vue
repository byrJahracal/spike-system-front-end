<template>
  <div id="footer" footer>
    <h5 style="color:white;">互联网软件开发技术与实践</h5>
    <img src="~image/猫头鹰.png" />
    <h5>Author: Yuanheng Wang</h5>
  </div>
</template>

<script>
export default {
  created() {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
#footer {
  background: linear-gradient(120deg, #002920, #ffffff);
  img {
    width: auto;
    height: 90%;
  }
  max-height: 50px;
  margin-top: auto;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
