import Axios from "./axios.js";

export function getItems(theme) {
  return Axios({
    method: "post",
    url: "shop/",
    data: { theme: theme }
  });
}
export function consume(item) {
  return Axios({
    method: "post",
    url: "shop/consume/",
    data: {
      item: item
    }
  });
}
export function flash(item) {
  return Axios({
    method: "post",
    url: "shop/flash/",
    data: { item: item }
  });
}
/*
export function getItems(theme) {
  return new Promise(resolve => {
    console.log(theme);
    resolve({
      items: [
        {
          name: "苹果",
          remain: 100,
          comment: "bucuo",
          price: 10,
          type: "水果"
        },
        { name: "梨", remain: 10, comment: "bucuo", price: 8, type: "水果" }
      ]
    });
  });
}

export function consume(item) {
  return new Promise(resolve => {
    console.log(item);
    resolve({
      result: true,
      amount: 100,
      balance: 70
    });
  });
}
export function flash(item) {
  return new Promise(resolve => {
    console.log(item);
    resolve({
      result: true
    });
  });
}
*/
