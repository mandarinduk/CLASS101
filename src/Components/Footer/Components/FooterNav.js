import React from "react";
import styled from "styled-components";
import { Icon } from "@class101/ui";

function FooterNav() {
  return (
    <FooterNavWrapper>
      <div>
        <Text as="span" bold>
          일나쓰101
        </Text>
        <Text color>홈</Text>
        <Text color>채용</Text>
      </div>
      <div>
        <Text as="span" bold>
          크리에이터
        </Text>
        <Text color>지원하기</Text>
        <Text color>영상 제작 파트너 지원하기</Text>
      </div>
      <div>
        <Text as="span" bold>
          고객센터
        </Text>
        <Text as="span" color>
          : 오전 10시 ~ 오후 6시 (주말, 공휴일 제외)
        </Text>
        <section>
          <Icon.Message size={18} />
          문의하기
        </section>
      </div>
    </FooterNavWrapper>
  );
}

export default FooterNav;

const FooterNavWrapper = styled.div`
  ${({ theme }) => theme.flex(`space-between`)};
  margin: 0 auto;
  width: 100%;
  max-width: 1176px;

  section {
    ${({ theme }) => theme.flex(`center`, `center`)}
    margin-top: 8px;
    width: 376px;
    height: 40px;
    border: 1px solid rgb(205, 209, 212);
    font-size: 14px;
    color: rgb(27, 28, 29);

    svg {
      margin-right: 5px;
    }
  }
`;

const Text = styled.div`
  margin-top: 8px;
  font-size: ${({ size }) => (size ? `11px` : `14px`)};
  font-weight: ${({ bold }) => (bold ? "bold" : ``)};
  color: ${({ color }) => (color ? `gray` : `black`)};
`;
