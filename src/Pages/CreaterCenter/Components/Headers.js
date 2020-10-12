import React from "react";
import { Link } from "react-router-dom";
import { Button, ProgressBar } from "@class101/ui";
import styled from "styled-components";

function Headers({ saved }) {
  return (
    <HeadersWrapper>
      <HeadersContent>
        <HeadersLeftContent>
          <Logo />
          <div>수요조사 시작하기</div>
          <Progress>{saved?.length * 25}% 완료</Progress>
        </HeadersLeftContent>
        <Link to="/">
          <Button>나가기</Button>
        </Link>
      </HeadersContent>
      <ProgressBar value={saved?.length * 25} />
    </HeadersWrapper>
  );
}

export default Headers;

const HeadersWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 76px;
  background-color: white;
  z-index: 99;
`;

const HeadersContent = styled.div`
  ${({ theme }) => theme.flex(`space-between`, `center`)};
  padding: 16px 24px;
  width: 100%;
  height: 100%;

  overflow: hidden;

  div {
    margin-right: 16px;
  }
  a {
    text-decoration: none;

    button {
      margin-right: 8px;
      text-decoration: none;
    }
  }
`;

const HeadersLeftContent = styled.div`
  ${({ theme }) => theme.flex(``, `center`)};
`;

const Logo = styled.img.attrs({
  alt: "logo",
  src: "/images/101.png",
})`
  margin-right: 10px;
  width: 40px;
`;

const Progress = styled.div`
  font-size: 14px;
  color: rgb(253, 126, 20);
`;
