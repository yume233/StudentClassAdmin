import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Student from "../Student/Student";
import {_student, addStudent, setDetailsHid} from "store/data";
import {useStore} from "@nanostores/react";
import localforage from "localforage";
import DeleteDiaLog from "./DiaLog/DeleteDiaLog";
import EditDiaLog from "./DiaLog/EditDiaLog";
import NewUser from "./DiaLog/NewUserDiaLog";
import "react-virtualized/styles.css";
// import axios from "axios";
/*import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";*/

export default () => {
    const students = useStore(_student);
    // const styleSw = useStore(_unitStyleSw);
    const node = useRef<HTMLElement>() as any;
    /*useEffect(() => {
        BScroll.use(MouseWheel);
        const DOM = node.current;
        setTimeout(() => {
          new BScroll(DOM, {
            scrollX: false,
            scrollY: true,
            click: true,
            mouseWheel: true,
          });
        }, 500);
      }, [node]);*/
    useEffect(() => {
        localforage.getItem("students").then((res: []) => {
            if (res) {
                addStudent(res);
            }
            console.log(students);
        });
    }, []);

    return (
        <div>
            <Main ref={node}>
                {students.map((item, index) => {
                    setDetailsHid(`item${index}`, true);
                    return <Student item={item} key={index} elId={`item${index}`}/>;
                })}
            </Main>
            <DeleteDiaLog/>
            <EditDiaLog/>
            <NewUser/>
        </div>
    );
};
const Main = styled.div`
  position: relative;
  background-color: rgba(157, 157, 157, 0.06);
  display: grid;
  width: 89vw;
  height: 85vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  //grid-auto-rows: 130px;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  padding: 6px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 5px;
  //width: 250px;
  //height: 250px;
  @keyframes topIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  > div {
    animation: topIn 0.5s ease-in-out;

    :not(:first-child) {
      margin-top: 5px;
    }
  }
`;
