import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@class101/ui";

const InfoModal = ({ on }) => {
  const history = useHistory();

  return (
    <InfoModalWrapper on={on}>
      <span>
        <Icon.Person />
        마이페이지 {`>`}
      </span>
      <div
        onClick={() => {
          localStorage.removeItem("Kakao_token");
          history.push("/");
        }}
      >
        로그아웃
      </div>
    </InfoModalWrapper>
  );
};

export default InfoModal;

const InfoModalWrapper = styled.div`
  display: ${({ on }) => (on ? `block` : `none`)};
  position: absolute;
  top: 72px;
  right: 0;
  width: 200px;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgba(41, 42, 43, 0.2) 0px 0px 10px;
  font-size: 14px;
  z-index: 999;

  span {
    ${({ theme }) => theme.flex("", `center`)}
    margin: 30px 20px;
    color: rgb(253, 126, 20);

    svg {
      margin-right: 10px;
    }
  }

  div {
    ${({ theme }) => theme.flex("", `center`)}
    margin: 0 auto;
    padding: 30px 0px;
    width: 150px;
    height: 40px;
    border-top: 1px solid black;
    color: rgb(27, 28, 29);
    cursor: pointer;
  }
`;
