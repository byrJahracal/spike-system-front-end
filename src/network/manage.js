import Axios from "./axios.js";

export function changeItem(item) {
  return Axios({
    method: "post",
    url: "manage/update/",
    data: { item: item }
  });
}
export function deleteItem(id) {
  return Axios({
    method: "post",
    url: "manage/delete/",
    data: { id: id }
  });
}
export function addItem(item) {
  return Axios({
    method: "post",
    url: "manage/add/",
    data: { item: item }
  });
}
/*
export function changeItem(item) {
  return new Promise(resolve => {
    console.log(item);
    resolve({
      result: true
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

export function addItem(id) {
  return new Promise(resolve => {
    console.log(id);
    resolve({
      result: true
    });
  });
}
*/
