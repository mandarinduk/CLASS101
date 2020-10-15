import React from "react";
import styled from "styled-components";
import {
  Body1,
  Body2,
  Badge,
  Icon,
  Colors,
  Caption1,
  Button,
  ButtonColor,
  ButtonSize,
  Divider,
} from "@class101/ui";

const Card = (props) => {
  const {
    id,
    thumbnail,
    category,
    name,
    heart_count,
    like,
    retail_price,
    discount_percent,
    monthly_pay,
    monthly_payment,
    isMD,
  } = props;

  return (
    <Wrapper md={isMD}>
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
        <div className="likeInfo">
          <Badge
            icon={<Icon.Heart fillColor={Colors.gray400} />}
            backgroundColor="transparent"
            color={Colors.gray400}
            size="sm"
          >
            {heart_count}
          </Badge>
          <Badge
            icon={<Icon.Like fillColor={Colors.gray400} />}
            backgroundColor="transparent"
            color={Colors.gray400}
            size="sm"
          >
            {like}
          </Badge>
        </div>
        <Divider />
        <Price>
          <div className="originalPriceInfo">
            <Caption1>{retail_price} 원</Caption1>
            <Caption1 fontWeight="Bold" color="red">
              {discount_percent}%
            </Caption1>
          </div>
          <DiscountPriceInfo>
            <Body1>월 {monthly_pay}</Body1>
            <Caption1 fontWeight="Bold" color="orange">
              {monthly_payment}개월
            </Caption1>
          </DiscountPriceInfo>
        </Price>
        <ClassEtcInfo>
          <Button color={ButtonColor.RED_LIGHT} size={ButtonSize.XSMALL}>
            선물하기
          </Button>
          <Button size={ButtonSize.XSMALL}>바로 수강 가능</Button>
        </ClassEtcInfo>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: ${({ md }) => (md ? "0 12px" : "0")};
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

const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  .originalPriceInfo {
    display: flex;
    * {
      margin-right: 10px;
    }`;

const DiscountPriceInfo = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 10px;
  }
`;

const ClassEtcInfo = styled.div`
  button {
    margin-right: 7px;
  }
`;
