import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMdClasses } from "../../modules/MdClasses";
import { Section, GridList } from "@class101/ui";
import Card from "./Card";

const MdClasses = (props) => {
  const dispatch = useDispatch();
  const allMdClassData = useSelector((state) => state.allMdClasses);

  useEffect(() => {
    fetch(`http://localhost:3000/Data/mdClassesMOCK.json`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getMdClasses(res.data));
      });
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
            return (
              <Card
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
