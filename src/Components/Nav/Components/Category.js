import React, { useState } from "react";
import styled, { css } from "styled-components";

const Category = () => {
  const [pick, setPick] = useState(0);

  return (
    <CategoryWrapper pick={pick}>
      {CATEGORY.map((menu, i) => (
        <span key={i} onClick={() => setPick(i + 1)}>
          {menu}
        </span>
      ))}
    </CategoryWrapper>
  );
};

export default Category;

const CATEGORY = [
  `전체`,
  `크리에이티브`,
  `머니`,
  `커리어`,
  `키즈`,
  `시그니처`,
  `리브레`,
  `스토어`,
];

const Select = css`
  border-bottom: 4px solid black;
  font-weight: 600;
`;

const CategoryWrapper = styled.div`
  span {
    margin: 0 28px;
    padding-bottom: 12px;
    cursor: pointer;
    &:nth-child(${({ pick }) => pick}) {
      ${Select}
    }
  }
`;
