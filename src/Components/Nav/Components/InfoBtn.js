import React, { useState } from "react";
import InfoModal from "./InfoModal";
import { Icon } from "@class101/ui";
import styled from "styled-components";

const InfoBtn = () => {
  const [click, setClick] = useState(false);

  return (
    <InfoBtnWrapper rotateOn={click} onClick={() => setClick(!click)}>
      <Icon.ChevronDown />
      <InfoModal on={click} />
    </InfoBtnWrapper>
  );
};

export default InfoBtn;

const InfoBtnWrapper = styled.div`
  position: relative;
  transform: ${({ rotateOn }) => (rotateOn ? `` : `rotate(180deg)`)};
`;
