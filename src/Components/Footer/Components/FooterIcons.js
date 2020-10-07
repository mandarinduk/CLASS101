import React from "react";
import styled from "styled-components";

function FooterIcons() {
  return (
    <FooterIconsWrapper>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
        crossorigin="anonymous"
      ></link>
      <i class="fab fa-youtube fa-2x"></i>
      <i class="fab fa-instagram fa-2x"></i>
      <i class="fab fa-facebook-square fa-2x"></i>
      <i class="fab fa-google-play fa-2x"></i>
      <i class="fab fa-apple fa-2x"></i>
    </FooterIconsWrapper>
  );
}

export default FooterIcons;

const FooterIconsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1176px;
  text-align: right;

  i {
    padding: 0 10px;
  }
`;
