module.exports = {
  configureWebpack: {
    resolve: {
      //extensions: [],
      alias: {
        //"@": "src"
        assets: "@/assets",
        content: "@/components/content",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        image: "@/assets/image",
        heyi: "@/components/common/heyi",
        router: "@/router",
        store: "@/store"
      }
    }
  }
};
