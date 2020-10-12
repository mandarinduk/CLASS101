import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import Introduction from "./Components/Introduction";
import Curriculum from "./Components/Curriculum";
import Creator from "./Components/Creator";
import Recommendation from "./Components/Recommendation";

const MainSection = () => {
  const [category, setCategory] = useState(0);
  return (
    <Wrapper>
      <MiniContainer>
        <MiniNav category={category}>
          {CATEGORY.map((list, idx) => {
            return (
              <Link
                activeClass={list.destination}
                to={list.destination}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <div
                  category={category}
                  key={idx}
                  onClick={() => setCategory(idx + 1)}
                >
                  {list.title}
                </div>
              </Link>
            );
          })}
        </MiniNav>
      </MiniContainer>
      <MainContainer>
        <Introduction />
        <Curriculum />
        <Creator />
        <Recommendation />
      </MainContainer>
    </Wrapper>
  );
};

export default MainSection;

const Wrapper = styled.div``;

const MiniContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Select = css`
  border-bottom: 3px solid black;
  font-weight: 600;
`;

const MiniNav = styled.div`
  background: white;
  display: flex;
  box-shadow: rgb(237, 239, 240) 0px -1px 0px 0px inset;
  div {
    font-size: 14px;
    padding: 14px 0px 13px;
    margin-right: 24px;
    cursor: pointer;
    /* &:nth-child(${({ category }) => category}) {
      ${Select}
    }  추후 작업 예정*/
  }
`;

const MainContainer = styled.div``;

const CATEGORY = [
  {
    id: 1,
    destination: "introduction",
    title: "클래스 소개",
  },
  {
    id: 2,
    destination: "curriculum",
    title: "커리큘럼",
  },
  {
    id: 3,
    destination: "creator",
    title: "크리에이터",
  },
  {
    id: 4,
    destination: "recommend",
    title: "추천",
  },
];
