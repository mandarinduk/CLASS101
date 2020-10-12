import React from "react";
import styled from "styled-components";
import MainSection from "./Components/MainSection/MainSection";
import SideBar from "./Components/SideBar/SideBar";

const MainContents = () => {
  return (
    <Container>
      <ContentSection>
        <MainSection />
      </ContentSection>
      <SideSection>
        <SideBar />
      </SideSection>
    </Container>
  );
};

export default MainContents;

const Container = styled.div`
  max-width: 1270px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  display: flex;
`;

const ContentSection = styled.div`
  width: 800px;
  margin: 0px 12px 300px 12px;
`;

const SideSection = styled.div`
  position: sticky;
  top: 0;
  width: 550px;
  height: 550px;
  margin: 0px 12px 0px 12px;
  border-radius: 3px;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 2px 6px -2px;
  border: 1px solid rgb(255, 255, 255);
  display: flex;
`;
