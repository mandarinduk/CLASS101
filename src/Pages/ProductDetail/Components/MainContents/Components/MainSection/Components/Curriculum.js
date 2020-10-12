import React from "react";
import styled from "styled-components";
import CurriculumList from "./CurriculumList";

const Curriculum = () => {
  return (
    <Container id="curriculum">
      <h3>커리큘럼</h3>
      <p>
        클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
        쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
      </p>
      <CurriculumList />
    </Container>
  );
};

export default Curriculum;

const Container = styled.div`
  margin-top: 50px;
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
  }
`;
