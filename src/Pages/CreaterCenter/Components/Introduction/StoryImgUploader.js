import React from "react";
import styled from "styled-components";
import StoryCoverImg from "./StoryCoverImg";

export default function StoryImgUploader({ changeCover, coverImg, id }) {
  return (
    <StoryImgUpladerWrapper>
      <StoryCoverImg coverImg={coverImg} id={id} />
      <StoryImgUploaderLabel isDisplay={coverImg[id]?.introduction_image}>
        <img
          alt="파일 선택"
          src="https://class101.net/images/add-photo-portrait.png"
        />
        <h2>클래스 주제에 대한 사진, 영상</h2>
        <p>
          권장 비율 - 3:4(세로형)
          <br />
          권장 사이즈 - 1200*1600px
        </p>
        <ImgUploader onChange={changeCover} />
      </StoryImgUploaderLabel>
    </StoryImgUpladerWrapper>
  );
}

const StoryImgUpladerWrapper = styled.div`
  position: relative;
  height: 386px;
`;

const StoryImgUploaderLabel = styled.label`
  display: ${({ isDisplay }) => (isDisplay ? "none" : "")};
  ${({ isDisplay, theme }) =>
    isDisplay ? "" : theme.flex("center", "center", "column")};
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5em 0.75em;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(205, 209, 212);
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  color: #999;
  cursor: pointer;

  img {
    width: 72px;
    height: 72px;
  }

  h2 {
    margin: 8px 0;
    font-size: 14px;
    color: rgb(168, 174, 179);
  }

  p {
    text-align: center;
    line-height: 16px;
    font-size: 11px;
  }
`;

const ImgUploader = styled.input.attrs({
  type: "file",
})`
  width: 100%;
  padding-bottom: calc(133.3% - 2px);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
