import React from "react";
import { Icon } from "@class101/ui";
import InfoBtn from "./InfoBtn";
import styled from "styled-components";

const UserInfo = ({ isLogin }) => {
  return (
    <UserInfoWrapper isLogin={isLogin}>
      <Icon.Person />
      <InfoBtn />
    </UserInfoWrapper>
  );
};

export default UserInfo;

const UserInfoWrapper = styled.div`
  display: ${({ isLogin }) => (isLogin ? `flex` : `none`)};
  align-items: center;
`;
