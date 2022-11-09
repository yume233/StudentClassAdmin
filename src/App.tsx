import React from "react";
import styled from "styled-components";
import StudentForm from "./components/global/StudentForm";
import Status from "./components/global/Status/status";
import bg from "assets/img/bg.jpg";
import Buttons from "./components/global/Buttons";
import point from "assets/img/point.png";
//[ package ]

//=> Main Component
export default () => {
  return (
    <Main>
      <Background>
        <div></div>
        <div></div>
      </Background>
      {/*<Header />*/}
      {/*<div style={{ height: "6vh", width: "100vw" }}></div>*/}
      <Buttons />
      <StudentForm />
      <Status />
    </Main>
  );
};

//=> Style Component
const Main = styled.main`
  //background: url(${bg}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  > div {
    // :first-child {
    //   position: absolute;
      //   background: url(${point}) fixed;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    // }
    :last-child {
      width: 100vw;
      height: 100vh;
      top: -80px !important;
      left: -100px !important;
      background-size: cover;
      background-image: url(${bg});
    }
  }
`;
