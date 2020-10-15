import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const UserMenu = () => {
  const navMenuArr =
    MENU[localStorage.getItem("Kakao_token") ? "login" : "logout"];
  const isToken = localStorage.getItem("Kakao_token") ? true : false;

  return (
    <UserMenuWrapper>
      {navMenuArr.map((menu, i) => (
        <span key={i}>{menu}</span>
      ))}
      <UserInfo isLogin={isToken} />
    </UserMenuWrapper>
  );
};

export default UserMenu;

const MENU = {
  logout: ["크리에이터 지원", "로그인"],
  login: ["크리에이터 센터", "주문 및 배송", "내 쿠폰", "내 클래스"],
};

const UserMenuWrapper = styled.div`
  ${({ theme }) => theme.flex(``, `center`)}

  span {
    margin-right: 24px;
    font-size: 14px;
    cursor: pointer;
  }
`;
