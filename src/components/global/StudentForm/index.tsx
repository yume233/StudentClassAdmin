import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Student from "../Student/Student";
import { _student, addStudent } from "store/data";
import { useStore } from "@nanostores/react";
import localforage from "localforage";
import { _unitStyleSw, unitStyleSw, setDetailsHid } from "store/data";
import axios from "axios";
// import BScroll from "@better-scroll/core";
// useEffect(() => {
//   const DOM = node.current;
//   new BScroll(DOM, {
//     scrollY: true,
//     click: true,
//     freeScroll: true,
//   });
// }, []);
export default () => {
  const students = useStore(_student);
  // const styleSw = useStore(_unitStyleSw);
  const node = useRef<HTMLInputElement>() as any;
  useEffect(() => {
    localforage.getItem("students").then((res: []) => {
      if (res) {
        addStudent(res);
      }
      console.log(students);
    });
  }, []);

  return (
    <Main ref={node}>
      {students.map((item, index) => {
        setDetailsHid(`item${index}`, true);
        setTimeout(() => {}, 300);
        return <Student item={item} key={index} elId={`item${index}`} />;
      })}
    </Main>
  );
};
const Main = styled.div`
  position: relative;
  background-color: rgba(157, 157, 157, 0.06);
  display: grid;
  width: 89vw;
  height: 85vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  //grid-auto-rows: 130px;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  padding: 6px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 5px;
  //width: 250px;
  //height: 250px;
  > div {
    :not(:first-child) {
      margin-top: 5px;
    }
  }
`;
