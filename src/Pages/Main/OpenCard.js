import React from "react";
import styled from "styled-components";
import {
  Body2,
  Icon,
  Caption1,
  Button,
  ButtonColor,
  ButtonSize,
  Divider,
} from "@class101/ui";

const Card = (props) => {
  const { thumbnail, category, name, isMD, modalCtrl, isClicked } = props;

  return (
    <Wrapper md={isMD} onClick={modalCtrl} isClicked={isClicked}>
      <ImgContainer md={isMD}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={thumbnail}
          alt={name}
        />
      </ImgContainer>
      <div className="classInfo">
        <CaptionContainer>
          <Caption1>{category}</Caption1>
          <Body2>{name}</Body2>
        </CaptionContainer>
        <Divider />
        <ClassEtcInfo>
          <Caption1>응원 마감까지 3일 남았습니다.</Caption1>
          <Button
            leftIcon={<Icon.Heart />}
            color={ButtonColor.ORANGE_LIGHT}
            size={ButtonSize.MEDIUM}
            fill
          >
            응원하기
          </Button>
        </ClassEtcInfo>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding-left: ${({ md }) => (md ? `12px` : `0`)};
  padding-right: ${({ md }) => (md ? `12px` : `0`)};
  .likeInfo {
    margin-bottom: 12px;
    div {
      padding-left: 0;
    }
  }
`;

const ImgContainer = styled.div`
  height: ${({ md }) => (md ? `400px` : `200px`)};
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;

  img:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease 0s;
  }
`;

const CaptionContainer = styled.div`
  margin-top: 5px;
`;

const ClassEtcInfo = styled.div`
  div {
    margin: 12px 0;
  }

  button {
    margin-right: 7px;
  }
`;
