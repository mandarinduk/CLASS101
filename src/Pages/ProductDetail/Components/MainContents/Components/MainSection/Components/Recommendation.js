import React from "react";
import styled from "styled-components";
import { Avatar, Icon, Colors } from "@class101/ui";
import RecommendedClass from "./RecommendedClass";

const Recommendation = () => {
  return (
    <Container id="recommend">
      <ClassListContainer>
        <ClassListTitle>
          <div>비슷한 유저 분들이 함께 본 클래스</div>
        </ClassListTitle>
        <RecommendedClass />
      </ClassListContainer>
    </Container>
  );
};

export default Recommendation;

const Container = styled.div`
  margin-top: 30px;
`;

const ClassListContainer = styled.div``;

const ClassListTitle = styled.div`
  div {
    font-size: 25px;
    font-weight: bold;
  }
`;
