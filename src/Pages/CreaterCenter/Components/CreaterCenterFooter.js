import React from "react";
import styled from "styled-components";

function CreaterCenterFooter() {
  return (
    <CreaterCenterFooterWrapper>
      <Button>이전</Button>
      <div>
        <Button disabled>저장하기</Button>
        <Button orange>다음</Button>
      </div>
    </CreaterCenterFooterWrapper>
  );
}

export default CreaterCenterFooter;

const CreaterCenterFooterWrapper = styled.div`
  ${({ theme }) => theme.flex(`space-between`, `center`)};
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 18px 32px;
  width: calc(100% - 280px);
  height: 76px;
  border-top: 1px solid rgb(237, 239, 240);

  div {
    ${({ theme }) => theme.flex(`center`, `center`)}
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.flex(``, `center`)};
  margin-right: 12px;
  padding: 0px 16px;
  width: auto;
  height: 40px;
  border: 0;
  border-radius: 3px;
  outline: 0;
  background-color: ${({ orange }) =>
    orange ? "rgb(255, 146, 43)" : "#f8f8f9"};
  ${({ theme }) => theme.font(`14px`, `500`)};
  color: ${({ orange }) => (orange ? "white" : "rgb(27, 28, 29)")};
  cursor: pointer;

  &:hover {
    background-color: ${({ orange }) =>
      orange ? "rgb(247, 120, 0)" : "#dddde1"};
  }

  &:disabled {
    background-color: rgb(248, 248, 249);
    color: rgb(221, 224, 226);
    cursor: not-allowed;
  }
`;
