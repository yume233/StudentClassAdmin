import React, {useState} from "react";
import styled from "styled-components";
import {_detailsHid, addEditValue, setDelHide, setDetailsHid, setEditHide,} from "../../../store/data";
import {useStore} from "@nanostores/react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import { getStudent } from "../../../store/network";
export default (props: any) => {
  const {item, style, elId} = props;
  const [state, setState] = useState<number>(0);
  const editHid = useStore(_detailsHid);
  const statusStr = {
    0: "正常",
    1: "迟到",
    2: "早退",
    3: "请假",
  };
  const setDetails = () => {
    if (editHid[elId]) {
      setDetailsHid(elId, !editHid[elId]);
      setTimeout(() => {
        setState(150);
      }, 300);
    } else if (!editHid[elId]) {
      setState(0);
      setTimeout(() => {
        setDetailsHid(elId, !editHid[elId]);
      }, 400);
    }
  };

  return (
    <div>
      <Main
        style={style}
        // onClick={() => {
        //   setDetails();
        // }}
      >
        <Img>
          <Avatar
            alt={item.name}
            src={item.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </Img>
        <Info>
          <div>
            <a>姓名：{item.name}</a>
          </div>
          <div>
            <a>职务：{item.post}</a>
          </div>
          <div>
            <a>学号：{item.userId}</a>
          </div>
        </Info>
        <Status>
          <p>{statusStr[item.status]}</p>
        </Status>
        <Edit>
          <Button
              variant="contained"
              style={{width: "100px", marginBottom: "4px"}}
              onClick={() => {
                setEditHide();
                Object.keys(item).forEach((v) => {
                  addEditValue(v, item[v]);
                });
              }}
          >
            编辑
          </Button>
          <Button
              variant="contained"
              color="error"
              style={{width: "100px"}}
              onClick={() => {
                Object.keys(item).forEach((v) => {
                  addEditValue(v, item[v]);
                });
                setDelHide();
              }}
          >
            删除
          </Button>
        </Edit>
      </Main>
      {editHid[elId] ? null : <Menu style={{ height: state }}></Menu>}
    </div>
  );
};
const Main = styled.div`
  backdrop-filter: blur(6px);
  box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  :hover {
    background-color: #ffffff;
  }

  //border-bottom: 1px solid #070707;
  p {
    text-align: center;
    line-height: 125px;
    border-radius: 5px;

    //:hover {
    //  background-color: #468eb2;
    //  box-shadow: 0 0 10px #468eb2;
    //}
  }
`;
const Img = styled.div`
  margin: 15px;
`;
const Info = styled.div`
  //flex: 3;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 150px;

  > div {
    max-width: 120px;
    height: 20px;
    margin-bottom: 3px;
  }
`;
const Edit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 80px;
  height: 100%;
  margin-right: 30px;

  > div {
    border-radius: 5px;
    background-color: #2196f3;
    color: white;
    height: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Menu = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
`;
const Status = styled.div`
  flex: 1;
  font-size: 30px;
`;
