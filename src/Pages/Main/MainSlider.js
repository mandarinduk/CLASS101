import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Headline2, Body1 } from "@class101/ui";

const Slider = ({ length, id, thumbnail, name, currentSlide }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(currentSlide);
    setValue(0);
  }, [currentSlide]);

  useEffect(() => {
    setValue(100);
  }, [value]);

  return (
    <Wrapper>
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
          <SlideNumber>
            {id} | {length}
          </SlideNumber>
          <Bar value={value} />
        </ArrowContainer>
      </ClassWrapper>
    </Wrapper>
  );
};

export default Slider;

const Bar = styled.div`
  width: 400px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;

  &::after {
    position: absolute;
    background: white;
    width: ${({ value }) => value + "%"};
    height: 100%;
    content: "";
    display: block;
    transform-origin: left;
    transition: ${({ value }) => (value === 100 ? "all 5s linear" : "none")};
  }
`;

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
  border-radius: 5px;
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
