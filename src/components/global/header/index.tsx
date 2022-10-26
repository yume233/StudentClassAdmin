import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Main>
      <div></div>
    </Main>
  );
};
const Main = styled.div`
  position: absolute;
  top: 0;
  height: 6vh;
  width: 100vw;
  background-color: antiquewhite;
  //box-shadow: 0 2px 3px #b2b2b2;
  > div {
    :last-child {
      position: absolute;
      bottom: 0;
      height: 3px;
      width: 100%;
      box-shadow: rgb(26 26 26 / 10%) 0 1px 3px;
      background: linear-gradient(
        to right,
        rgb(55, 239, 249),
        rgb(0, 145, 228),
        rgb(100, 198, 244),
        rgb(100, 192, 236)
      );
    }
  }
`;
