import React from "react";
import styled from "styled-components";

export default function StoryCoverImg({ coverImg, id }) {
  return (
    <StoryCoverImgWrapper isDisplay={coverImg[id]?.introduction_image}>
      <img alt="커버사진" src={coverImg[id]?.introduction_image} />
    </StoryCoverImgWrapper>
  );
}

const StoryCoverImgWrapper = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
