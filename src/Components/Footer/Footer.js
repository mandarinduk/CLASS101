import React from "react";
import styled from "styled-components";
import FooterNav from "./Components/FooterNav";
import FooterInfo from "./Components/FooterInfo";
import FooterIcons from "./Components/FooterIcons";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav />
      <FooterInfo />
      <FooterIcons />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  padding: 32px 0;
  border-top: 1px solid rgb(237, 239, 240);
`;
