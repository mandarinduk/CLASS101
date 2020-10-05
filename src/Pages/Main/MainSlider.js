import React from "react";
import styled from "styled-components";
import { Headline2, Body1, ProgressBar } from "@class101/ui";

const Slider = (props) => {
  const { key, thumbnail, name } = props;

  return (
    <Wrapper key="id">
      <ImageContainer>
        <Image src={thumbnail} />
      </ImageContainer>
      <ClassWrapper>
        <ClassContainer>
          <ClassDesc>
            <Headline2 color="white">{name}</Headline2>
            <Body1 color="white">
              여행을 떠나자! PM이 추천하는 베스트 여행 관련 강의들
            </Body1>
          </ClassDesc>
        </ClassContainer>
        <ArrowContainer>
          <SlideNumber>2 | 12</SlideNumber>
          <ProgressBar value={40} barColor="red" />
        </ArrowContainer>
      </ClassWrapper>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.section`
  display: flex;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 55%;
  height: 400px;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ClassWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
`;

const ClassContainer = styled.div`
  width: 100%;
`;

const ClassDesc = styled.div`
  div {
    margin: 20px 0;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const SlideNumber = styled.div`
  margin-right: 10px;
  color: white;
`;
