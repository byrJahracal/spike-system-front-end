import Axios from "./axios.js";

export function loginReq(user) {
  if (user === "null") {
    return Axios({
      method: "post",
      url: "user/login/",
      headers: {
        AuthorizeType: "token"
      }
    });
  } else {
    return Axios({
      method: "post",
      url: "user/login/",
      headers: {
        AuthorizeType: "password"
      },
      data: {
        user: user
      }
    });
  }
}
export function charge(amount) {
  return Axios({
    method: "post",
    url: "user/charge/",
    data: {
      amount: amount
    }
  });
}
export function getItems() {
  return Axios({
    method: "get",
    url: "user/order/"
  });
}
export function deleteItem(id) {
  return Axios({
    method: "post",
    url: "user/order/delete/",
    data: {
      id: id
    }
  });
}
/*
      export function loginReq(user) {
        return new Promise(function(resolve) {
          console.log(user);
          resolve({
            token: "hhhh",
            role: "consumer",
            username: "Test User",
            balance: 1000,
            result: true
          });
        });
      }

      export function getItems() {
        return new Promise(function(resolve) {
          resolve({
            items: [
              {
                id: 1,
                username: "consumer",
                commodityName: "苹果",
                number: 3,
                amount: 10,
                state: "秒杀成功",
                time: "1111"
              },
              {
                id: 0,
                username: "consumer2",
                commodityName: "梨",
                number: 5,
                amount: 100,
                state: "秒杀失败",
                time: "1111"
              }
            ]
          });
        });
      }

      export function deleteItem(id) {
        return new Promise(resolve => {
          console.log(id);
          resolve({
            result: true
          });
        });
      }

      export function charge(amount) {
        return new Promise(resolve => {
          console.log(amount);
          resolve({
            result: true,
            balance: 1100
          });
        });
      }
      */
