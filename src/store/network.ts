import { atom } from "nanostores";
import { addStudent } from "./data";
import axios from "axios";
import localforage from "localforage";
const url = "https://api-test-yume.herokuapp.com";
export function getStudent(id: number) {
  axios
    .post(`${url}/api/alluser?class=${id}`)
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
    .post(`${url}/api/deleteUser?userId=${id}`)
    .then(async (res) => {
      getStudent(res.data.class);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function editStudent(id: number) {
  axios
    .post(`${url}/api/deleteuser?id=${id}`)
    .then(async (res) => {
      getStudent(res.data.class);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function updateUser(data, classId) {
  axios.post(`${url}/api/updateUser`, data).then((res) => {
    getStudent(classId);
  });
}
