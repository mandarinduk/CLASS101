import React from "react";
import styled from "styled-components";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

const MainHeader = () => (
  <MainHeaderWrapper>
    <SearchMenu />
    <UserMenu />
  </MainHeaderWrapper>
);

export default MainHeader;

const MainHeaderWrapper = styled.div`
  ${({ theme }) => theme.flex(`space-between`, `center`)}
  margin: 0 auto;
  padding: 14px 0px;
  width: 100%;
  max-width: 1176px;
  height: 68px;
`;
