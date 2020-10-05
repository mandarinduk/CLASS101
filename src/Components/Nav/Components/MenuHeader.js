import React from "react";
import { Icon } from "@class101/ui";
import Category from "./Category";
import styled from "styled-components";

const MenuHeader = () => {
  return (
    <MenuHeaderWrapper>
      <Icon.Menu />
      <Category />
    </MenuHeaderWrapper>
  );
};

export default MenuHeader;

const MenuHeaderWrapper = styled.div`
  ${({ theme }) => theme.flex(``, `center`)}
  margin: 0 auto;
  width: 100%;
  max-width: 1176px;
  height: 50px;

  svg {
    margin-right: 16px;
  }
`;
