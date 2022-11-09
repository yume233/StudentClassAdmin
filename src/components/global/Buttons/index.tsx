import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useStore} from "@nanostores/react";
import {_unitStyleSw, setNewHide} from "store/data";
import {getStudent} from "store/network";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import localforage from "localforage";

export default () => {
    const styleSw = useStore(_unitStyleSw);
    const [id, setId] = useState<number>(null);
    const [err, setErr] = useState<boolean>(false);
    const node = useRef<HTMLElement>() as any;
    useEffect(() => {
        setTimeout(() => {
            localforage.getItem("classId").then((value: number) => {
                setId(value);
            });
        }, 500);
    }, []);

    return (
        <Main>
            <NowId>当前班级ID：{id}</NowId>
            <div>
                <TextField
                    ref={node}
                    label="班级ID"
                    variant="filled"
                    size="small"
                    value={`${id}`}
                    onChange={(e) => {
                        const v = Number(e.target.value);
                        setId(v);
                        localforage.setItem("classId", v);
                    }}
                />
                <Button
                    variant="contained"
                    style={{width: "100px"}}
                    onClick={() => {
                        getStudent(id);
                    }}
                >
                    刷新班级
                </Button>
                <Button
                    variant="contained"
                    style={{width: "100px"}}
                    onClick={() => {
                        setNewHide();
                    }}
                >
                    添加学生
                </Button>
            </div>
        </Main>
    );
};
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 89vw;

  div {
    :last-child {
      display: flex;
      align-items: center;

      div,
      button {
        :not(div) {
          height: 43px;
        }

        margin-right: 10px;
      }
    }
  }
`;
const NowId = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  padding: 7px 18px;
  font-weight: 900;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
  font-size: 29px;
  color: #097dde;
  margin-left: 5px;
`;
