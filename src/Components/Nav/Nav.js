import React from "react";
import styled from "styled-components";
import MainHeader from "./Components/MainHeader";
import MenuHeader from "./Components/MenuHeader";

const Nav = () => {
  return (
    <Header>
      <MainHeader />
      <MenuHeader />
    </Header>
  );
};

export default Nav;

const Header = styled.div`
  height: 118px;
`;
