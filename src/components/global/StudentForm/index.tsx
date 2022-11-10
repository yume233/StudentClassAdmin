import React, {useEffect} from "react";
import styled from "styled-components";
import Student from "../Student/Student";
import {_student, addStudent} from "store/data";
import {useStore} from "@nanostores/react";
import localforage from "localforage";
import DeleteDiaLog from "./DiaLog/DeleteDiaLog";
import EditDiaLog from "./DiaLog/EditDiaLog";
import NewUser from "./DiaLog/NewUserDiaLog";
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ECharts from "../ECharts";
// import axios from "axios";
/*import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";*/

export default () => {
    const students = useStore(_student);
    // const styleSw = useStore(_unitStyleSw);
    const item = ({index, style}) => {
        // setDetailsHid(`item${index}`, true);
        return (
            <Student
                item={students[index]}
                key={index}
                style={style}
                elId={`item${index}`}
            />
        );
    };
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
        });
    }, []);

    return (
        <div>
            <Main>
                <div
                    style={
                        {
                            // display: chartsHide ? "none" : "unset",
                        }
                    }
                >
                    <AutoSizer>
                        {({height, width}) => (
                            <List
                                height={height}
                                itemCount={students.length}
                                itemSize={130}
                                width={width}
                            >
                                {item}
                            </List>
                        )}
                    </AutoSizer>
                </div>
                <ECharts
                    style={
                        {
                            // display: chartsHide ? "unset" : "none",
                        }
                    }
                />
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
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 70% 30%;
  width: 89vw;
  height: 85vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  //grid-auto-rows: 130px;
  //overflow: hidden;
  //overflow-y: scroll;

  padding: 6px;
  margin-bottom: 5px;
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
