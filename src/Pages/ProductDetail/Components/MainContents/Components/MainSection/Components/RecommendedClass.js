import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors, Badge, Icon } from "@class101/ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { api } from "../../../../../../../Config";

const RecommendedClass = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`${api}/products/detail_recommend`)
      .then((res) => res.json())
      .then((res) => {
        setItem(res.data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <Container>
      <Slider {...settings}>
        {item?.map((items) => {
          return (
            <ContentContainer key={items.id}>
              <ImageContainer>
                <img src={items.thumbnail} alt="sample" />
              </ImageContainer>
              <InfoContainer>
                <Category>
                  <div>{items.category}</div>
                </Category>
                <Title>
                  <div>{items.name}</div>
                </Title>
                <LikeIcon>
                  <Icon.Heart fillColor={Colors.gray200} size={11} />
                  &nbsp;
                  <span>{items.heart_count}</span>
                  &nbsp; &nbsp;
                  <Icon.Like fillColor={Colors.gray200} size={11} />
                  &nbsp;
                  <span>{items.like}</span>
                </LikeIcon>
              </InfoContainer>
              <PriceContainer>
                <Discount>
                  <DiscountSpan>
                    {items.retail_price.toLocaleString()}
                  </DiscountSpan>
                  &nbsp;
                  <DiscountSpan primary>{items.discount_percent}%</DiscountSpan>
                </Discount>
                <Price>
                  <PriceSpan>
                    월 {items.monthly_pay.toLocaleString()}원
                  </PriceSpan>
                  &nbsp;
                  <PriceSpan primary>{items.monthly_payment}개월</PriceSpan>
                </Price>
                <GiftIcon>
                  <Badge color="red" backgroundColor="#F8F8F9">
                    선물하기
                  </Badge>
                  &nbsp;
                  <Badge
                    className="applyNow"
                    color="gray"
                    backgroundColor="#F8F8F9"
                  >
                    바로 수강 가능
                  </Badge>
                </GiftIcon>
              </PriceContainer>
            </ContentContainer>
          );
        })}
      </Slider>
    </Container>
  );
};

export default RecommendedClass;

const Container = styled.div`
  .slick-prev:before {
    position: absolute;
    margin-top: -185px;
    margin-left: 750px;
    content: "<";
    color: black;
    background: white;
  }
  .slick-next:before {
    position: absolute;
    margin-top: -185px;
    margin-left: -55px;
    content: ">";
    color: black;
    background: white;
  }
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 170px;
  height: 127px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

const InfoContainer = styled.div`
  width: 170px;
`;

const Category = styled.div`
  margin-top: 10px;
  font-size: 11px;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const LikeIcon = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  font-size: 11px;
  color: gray;
  box-shadow: rgb(237, 239, 240) 0px -1px 0px 0px inset;
`;

const PriceContainer = styled.div`
  width: 170px;
`;

const Discount = styled.div`
  margin-top: 10px;
`;

const DiscountSpan = styled.span`
  font-size: 11px;
  font-weight: ${(props) => (props.primary ? "600" : "")};
  color: ${(props) => (props.primary ? "red" : "gray")};
  text-decoration: ${(props) => (props.primary ? "" : "line-through")};
`;

const Price = styled.div`
  margin-top: 10px;
`;

const PriceSpan = styled.span`
  font-size: ${(props) => (props.primary ? "11px" : "14px")};
  font-weight: ${(props) => (props.primary ? "" : "bold")};
`;

const GiftIcon = styled.div`
  margin-top: 10px;
`;
