import React from "react";
import styled from "styled-components";
import {useStore} from "@nanostores/react";
import {_studentStatus} from "store/data";

export default () => {
    const status = useStore(_studentStatus);

    return (
        <Main>
            <div>实到:{status.present}</div>
            <div>缺席:{status.absent}</div>
            <div>请假:{status.leave}</div>
            <div>迟到:{status.late}</div>
      <div>早退:{status.earlyLeave}</div>
    </Main>
  );
};
const Main = styled.div`
  background-color: rgba(0, 91, 182, 0.58);
  backdrop-filter: blur(3px);
  color: white;
  width: 89vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;

  > div {
    height: 100%;
    line-height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #e3f2fd;
  }
`;
