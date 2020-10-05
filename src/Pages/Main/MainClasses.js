import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../modules/MainClasses";
import { Section, GridList } from "@class101/ui";
import Card from "./Card";

const MainClasses = (props) => {
  const dispatch = useDispatch();
  const allClassData = useSelector((state) => state.allClasses);

  useEffect(() => {
    getAllClasses(dispatch);
  }, []);

  return (
    <Wrapper>
      <Section
        title="가장 완강률이 높은 클래스"
        description="알림신청 하신 분들에게는 할인 및 이벤트 소식과 제작 과정을 전해드려요."
        to="/"
        linkText="전체 클래스 보기"
      >
        <GridList
          items={allClassData.classes}
          smColumn={2}
          lgColumn={4}
          renderItem={(item) => {
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
            } = item;

            return (
              <Card
                id={id}
                thumbnail={thumbnail}
                category={category}
                name={name}
                heart_count={heart_count}
                like={like}
                retail_price={retail_price.toLocaleString()}
                discount_percent={discount_percent}
                monthly_pay={monthly_pay.toLocaleString()}
                monthly_payment={monthly_payment}
              />
            );
          }}
        />
      </Section>
    </Wrapper>
  );
};

export default MainClasses;

const Wrapper = styled.section`
  max-width: 1176px;
  margin: 80px auto;
  a {
    text-decoration: none;
  }
`;
