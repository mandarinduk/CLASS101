import React from "react";
import Headers from "./Components/Headers";
import ContentList from "./Components/ContentList";
import CreaterCenterFooter from "./Components/CreaterCenterFooter";
import styled from "styled-components";

const CreaterCenter = () => {
  const saved = ["소개", "제목 및 커버", "기본 정보"];
  return (
    <CreaterCenterWrapper>
      <Headers saved={saved} />
      <ContentList saved={saved} />
      <CreaterCenterFooter />
    </CreaterCenterWrapper>
  );
};

export default CreaterCenter;

const CreaterCenterWrapper = styled.div``;
