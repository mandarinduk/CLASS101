import React from "react";
import styled from "styled-components";

function FooterInfo() {
  return (
    <FooterInfoWrapper>
      <FooterLeftContainer>
        <Text as="div" size bold>
          1Nass101 Inc.
        </Text>
        <Text size>이용약관</Text>
        <Text size bold>
          개인정보 처리방침
        </Text>
        <Text size>사업자 정보 확인</Text>
        <Text size>제휴/협력 문의</Text>
        <Text size>단체/기업 교육 문의</Text>
        <Text size>정기구독서비스 이용약관 </Text>
      </FooterLeftContainer>
      <FooterRightContainer>
        <Text as="span" size color>
          (주)일나쓰101 | PM 이수현 | 서울특별시 강남구 삼성동 테헤란로 427 8층
          | 사업자등록번호 : 111-111-11111 | 통신판매업신고 :
          2020-서울강남구-1111 | 주식회사 일나쓰101은 전자상거래 등에서의
          소비자보호에 관한 법률에 따른 통신판매업과 통신판매중개업을 영위하고
          있습니다. 주식회사 일나쓰101은 통신판매중개자로서 중개하는 통신판매에
          관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도 부담하지
          아니합니다.
        </Text>
      </FooterRightContainer>
    </FooterInfoWrapper>
  );
}

export default FooterInfo;

const FooterInfoWrapper = styled.div`
  ${({ theme }) => theme.flex(`space-between`)};
  margin: 32px auto 0;
  width: 100%;
  max-width: 1176px;
`;

const Text = styled.span`
  margin: 8px 0;
  padding-right: 10px;
  font-size: ${({ size }) => (size ? `11px` : `14px`)};
  font-weight: ${({ bold }) => (bold ? "bold" : ``)};
  color: ${({ color }) => (color ? `gray` : `black`)};
`;

const FooterLeftContainer = styled.div`
  width: 300px;
`;

const FooterRightContainer = styled.div`
  margin-top: 10px;
  width: 820px;
`;
