import Axios from "./axios.js";

export function getMenu(theme) {
  return Axios({
    method: "post",
    url: "menu/",
    data: { theme: theme }
  });
}
/*
export function getMenu(theme) {
  return new Promise(resolve => {
    console.log(theme);
    resolve({
      menu: [
        { icon: "el-icon-zoom-in", title: "个人资料" },
        { icon: "el-icon-zoom-in", title: "秒杀订单" }
      ]
    });
  });
}*/
