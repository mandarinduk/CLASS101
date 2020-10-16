import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOpenClasses } from "../../modules/OpenClasses";
import { Section, GridList } from "@class101/ui";
import MainModal from "./MainModal";
import OpenCard from "./OpenCard";
import { api } from "../../Config";

const OpenClasses = (props) => {
  const dispatch = useDispatch();
  const allOpenClassData = useSelector((state) => state.allOpenClasses);

  useEffect(() => {
    fetch(`${api}/products/open`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getOpenClasses(res.data));
      });
  }, []);

  const items = allOpenClassData.openClasses;

  const [isClicked, setIsClicked] = useState(false);
  const modalCtrl = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper>
      <Section
        title="오픈 예정 클래스"
        description="기대하세요! 곧 오픈 예정인 클래스입니다."
      />
      <GridList
        items={items}
        smColumn={2}
        lgColumn={4}
        renderItem={(item, index) => {
          return (
            <>
              <OpenCard
                id={index}
                category={item.category}
                thumbnail={item.thumbnail}
                name={item.name}
                modalCtrl={modalCtrl}
              ></OpenCard>
              <MainModal
                modalCtrl={modalCtrl}
                isClicked={isClicked}
                item={{ ...item }}
              />
            </>
          );
        }}
      />
    </Wrapper>
  );
};

export default OpenClasses;

const Wrapper = styled.section`
  width: 1176px;
  margin: 0 auto 80px auto;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;
