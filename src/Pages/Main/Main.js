import React from "react";
import styled from "styled-components";
import MainSliders from "./MainSliders";
import MdClasses from "./MdClasses";
import MainClasses from "./MainClasses";

const Main = () => {
  return (
    <>
      <Wrapper>
        <MainSliders />
        <MdClasses />
        <MainClasses />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
