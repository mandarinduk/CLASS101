import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getClasses } from "../../modules/MainClasses";
import { Section, GridList } from "@class101/ui";
import Card from "./Card";
import { api } from "../../Config";

const MainClasses = (props) => {
  const dispatch = useDispatch();
  const allClassData = useSelector((state) => state.allClasses);

  useEffect(() => {
    fetch(`${api}/products`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getClasses(res.data));
      });
  }, []);

  return (
    <Wrapper>
      <Section
        title="가장 완강률이 높은 클래스"
        description="알림신청 하신 분들에게는 할인 및 이벤트 소식과 제작 과정을 전해드려요."
        to="/"
        linkText="전체 클래스 보기"
      >
        {allClassData && (
          <GridList
            items={allClassData.classes}
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
                  retail_price={item.retail_price?.toLocaleString()}
                  discount_percent={item.discount_percent}
                  monthly_pay={item.monthly_pay?.toLocaleString()}
                  monthly_payment={item.monthly_payment}
                />
              );
            }}
          />
        )}
      </Section>
    </Wrapper>
  );
};

export default MainClasses;

const Wrapper = styled.section`
  width: 1176px;
  margin: 80px auto;
  a {
    text-decoration: none;
  }
`;
