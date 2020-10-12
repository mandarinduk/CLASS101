import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, ButtonColor, Badge, Icon } from "@class101/ui";
import CountDown from "./CountDown";

const SideBar = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("http://10.58.6.47:8002/products/detail")
      .then((res) => res.json())
      .then((res) => {
        setItem(res.data);
      });
  }, []);
  return (
    <Container>
      <Category>
        <div>{item.category} · DavidKim</div>
      </Category>
      <Title>
        <h2>{item.name}</h2>
      </Title>
      <Label>
        <Badge color="red" backgroundColor="#F8F8F9">
          선물하기
        </Badge>
        <Badge className="applyNow" color="gray" backgroundColor="#F8F8F9">
          바로 수강 가능
        </Badge>
      </Label>
      <ProductInfoBoard>
        <AppliedCoupon>
          <div>쿠폰 적용 시</div>
        </AppliedCoupon>
        <PriceContainer>
          <PriceLeft>
            <div>{item.monthly_payment}개월 할부</div>
          </PriceLeft>
          <PriceRight>
            <div className="discountRate">{item.discount_percent}%</div>
            <h4>월 &nbsp;{item.monthly_pay?.toLocaleString()}원</h4>
          </PriceRight>
        </PriceContainer>
        <DiscountInfo>
          <TotalDiscount>
            <div>총 할인액</div>
          </TotalDiscount>
          <CountDown endDateTime={item.end_datetime} />
          <DiscountPrice>
            <h4>-150,770원</h4>
          </DiscountPrice>
        </DiscountInfo>
        <GetCoupon>
          <Button
            fill
            size="md"
            color={ButtonColor.RED}
            rightIcon={<Icon.Download />}
          >
            할인쿠폰 받기
          </Button>
        </GetCoupon>
        <BriefInfoContainer>
          <FirstLineInfo>
            <div>
              <Icon.VideoOutline size={16} />
              &nbsp; 콘텐츠 이용권
            </div>
            <div className="beginner">
              <Icon.PersonOutline size={16} />
              &nbsp; 입문자 대상
            </div>
          </FirstLineInfo>
          <SecondLineInfo>
            <div>
              <Icon.GiftOutline size={16} />
              &nbsp; 준비물 키트
            </div>
            <div className="satisfaction">
              <Icon.LikeOutline size={16} />
              &nbsp; 강의 만족도 99%
            </div>
          </SecondLineInfo>
        </BriefInfoContainer>
        <ButtonContainer>
          <Button color={ButtonColor.GRAY} leftIcon={<Icon.HeartOutline />}>
            {item.heart_count}
          </Button>
          <Button color={ButtonColor.GRAY} leftIcon={<Icon.Download />}>
            공유하기
          </Button>
          <Button
            color={ButtonColor.ORANGE_LIGHT}
            leftIcon={<Icon.GiftOutline />}
          >
            선물하기
          </Button>
        </ButtonContainer>
      </ProductInfoBoard>
      <ApplyButton>
        <Button fill size="lg" color={ButtonColor.ORANGE}>
          클래스 신청하기
        </Button>
      </ApplyButton>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 100%;
  margin: 24px;
`;

const Category = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 0px 8px;
`;

const Label = styled.div`
  margin: 0px 4px 4px 0px;
  display: flex;
  .applyNow {
    margin-left: 5px;
  }
`;

const ProductInfoBoard = styled.div`
  margin-top: 10px;
`;

const AppliedCoupon = styled.div`
  font-size: 11px;
  color: gray;
  margin-right: 5px;
  text-align: right;
`;

const PriceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #edeff0;
`;

const PriceLeft = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  margin-right: 50px;
`;

const PriceRight = styled.div`
  margin-left: 115px;
  display: flex;
  font-size: 16px;
  .discountRate {
    font-weight: 700;
    color: red;
    margin-right: 5px;
  }
  h4 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const DiscountInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const TotalDiscount = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-left: 2px;
`;

const DiscountPrice = styled.div`
  color: red;
  font-size: 18px;
  font-weight: 700;
  margin-left: 120px;
`;

const GetCoupon = styled.button`
  margin-top: 15px;
  width: 100%;
  border: none;
  background: none;
  padding-bottom: 20px;
  border-bottom: 1px solid #edeff0;
`;

const BriefInfoContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edeff0;
  display: flex;
  justify-content: space-around;
`;

const FirstLineInfo = styled.div`
  .beginner {
    margin-top: 20px;
  }
`;

const SecondLineInfo = styled.div`
  .satisfaction {
    margin-top: 20px;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const ApplyButton = styled.button`
  margin-top: 20px;
  width: 100%;
  border: none;
  background: none;
`;
