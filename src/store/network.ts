import { atom } from "nanostores";
import { addStudent } from "./data";
import axios from "axios";
import localforage from "localforage";

export function getStudent(id: number) {
  axios
    .post(`http://127.0.0.1:5001/api/alluser?class=${id}`)
    .then(async (res) => {
      localforage
        .setItem("students", res.data)
        .then((value) => {
          addStudent(value);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}
export function deleteStudent(id: number) {
  axios
    .post(`http://127.0.0.1:5001/api/deleteUser?userId=${id}`)
    .then(async (res) => {
      getStudent(res.data.class);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function editStudent(id: number) {
  axios
    .post(`http://127.0.0.1:5001/api/deleteuser?id=${id}`)
    .then(async (res) => {
      getStudent(res.data.class);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function updateUser(data, classId) {
  axios.post(`http://127.0.0.1:5001/api/updateUser`, data).then((res) => {
    getStudent(classId);
  });
}
