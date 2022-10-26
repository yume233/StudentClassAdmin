import React from "react";
import styled from "styled-components";
import { useStore } from "@nanostores/react";
import { _unitStyleSw, unitStyleSw } from "store/data";
import { getStudent } from "store/network";
import Button from "@mui/material/Button";

export default () => {
  const styleSw = useStore(_unitStyleSw);
  return (
    <Main>
      <Button
        variant="contained"
        style={{ width: "100px" }}
        onClick={() => {
          getStudent(912);
        }}
      >
        刷新班级
      </Button>
    </Main>
  );
};
const Main = styled.div`
  margin-bottom: 10px;
`;
