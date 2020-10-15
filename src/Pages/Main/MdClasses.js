import React, { useEffect } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getMdClasses } from "../../modules/MdClasses";
import { Section } from "@class101/ui";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MdClasses = (props) => {
  const dispatch = useDispatch();
  const allMdClassData = useSelector((state) => state.allMdClasses);

  useEffect(() => {
    fetch(`http://10.58.2.168:8002/products/recommend`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getMdClasses(res.data));
      });
  }, []);

  const items = allMdClassData.mdClasses;
  const settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Section
        title="PM 추천 클래스"
        description="여행을 떠나자! PM이 추천하는 베스트 여행 관련 강의들"
      >
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <Card
                isMD={`md`}
                id={item.id}
                thumbnail={item.thumbnail}
                category={item.category}
                name={item.name}
                heart_count={item.heart_count}
                like={item.like}
                retail_price={item.retail_price.toLocaleString()}
                discount_percent={item.discount_percent}
                monthly_pay={item.monthly_pay.toLocaleString()}
                monthly_payment={item.monthly_payment}
              />
            );
          })}
        </Slider>
      </Section>
    </Wrapper>
  );
};

export default MdClasses;

const Wrapper = styled.section`
  width: 1176px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }

  .slick-prev:before {
    background: url("https://cdn0.iconfinder.com/data/icons/typicons-2/24/arrow-left-thick-256.png")
      center center / 18px no-repeat;
  }
  .slick-next:before {
    background: url("https://cdn0.iconfinder.com/data/icons/typicons-2/24/arrow-right-thick-256.png")
      center center / 18px no-repeat;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    width: 25px;
    height: 25px;
    display: block;
    transform: translateY(-3px);
  }
`;
