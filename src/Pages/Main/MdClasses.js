import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllMdClasses } from "../../modules/MdClasses";
import { Section, GridList } from "@class101/ui";
import Card from "./Card";

const MdClasses = (props) => {
  const dispatch = useDispatch();
  const allMdClassData = useSelector((state) => state.allMdClasses);

  useEffect(() => {
    getAllMdClasses(dispatch);
  }, []);

  return (
    <Wrapper>
      <Section
        title="PM 추천 클래스"
        description="여행을 떠나자! PM이 추천하는 베스트 여행 관련 강의들"
      >
        <GridList
          items={allMdClassData.mdClasses}
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

export default MdClasses;

const Wrapper = styled.section`
  max-width: 1176px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
`;
