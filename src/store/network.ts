import {_postData, addStudent} from "./data";
import axios from "axios";
import localforage from "localforage";

// const url = "https://api-test-yume.herokuapp.com";
export function getStudent(id: number) {
    axios
        .post(`/api/api/alluser?class=${id}`)
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
        .post(`/api/api/deleteUser?userId=${id}`)
        .then(async (res) => {
            getStudent(res.data.class);
        })
        .catch((err) => {
            console.log(err);
        });
}

export function editStudent() {
    const data = _postData.get();
    console.log(data);
    axios
        .post(`/api/api/updateUser`, data)
        .then(async (res) => {
            console.log(res.data);
            getStudent(res.data.user.class);
        })
        .catch((err) => {
            console.log(err);
        });
}

export function addUser(data) {
    console.log("触发了");
    axios
        .post(`/api/api/setuser`, data)
        .then((res) => {
            if (res.data.user.class) getStudent(res.data.user.class);
        })
        .catch((err) => {
            console.log(err);
        });
}
