import React from "react";
import styled from "styled-components";
import StoryImgUploader from "./StoryImgUploader";
import { Icon } from "@class101/ui";
import IntroductionData from "../../Data/IntroductionData";

export default function StoryUploader({
  id,
  coverImg,
  setCoverImg,
  files,
  setFiles,
  introductionDescObj,
  setIntroductionDescObj,
}) {
  const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = (e) => {
      // 2. 읽기가 완료되면 아래코드가 실행
      const img64 = reader.result; //reader.result는 이미지를 인코딩(base64 ->이미지를 text인코딩)한 결과값이 나온다.
      if (img64) {
        const newCoverImg = coverImg;
        const addedImages = newCoverImg.map((el) =>
          el.id === id ? { ...el, introduction_image: img64.toString() } : el
        );
        setCoverImg(addedImages);
      }
    };

    const [newFile] = event.target.files;
    if (newFile) {
      reader.readAsDataURL(newFile); // 1. 파일을 읽어 버퍼에 저장합니다. 저장후 onloadend 트리거
      setFiles(
        [...files, { id, file: newFile }] // 파일 상태 업데이트 업로드 하는것은 파일이기 때문에 관리 필요
      );
    }
  };

  const handleRemove = () => {
    setCoverImg(
      coverImg.map((el) =>
        el.id === id ? { ...el, introduction_image: "" } : el
      )
    );
    setFiles(files.filter((el) => el.id !== id));
  };

  return (
    <StoryUploaderForm>
      <div>
        <StoryImgUploader
          id={id}
          changeCover={handleChangeFile}
          coverImg={coverImg}
        />
        <Icons>
          <Icon.Groove />
          <DelBtn
            isDisplay={coverImg[id]?.introduction_image}
            onClick={handleRemove}
          >
            {IntroductionData.delBtn}
          </DelBtn>
        </Icons>
        <StroyDescUploader
          value={coverImg[id]?.introduction_text}
          onChange={(e) => {
            setIntroductionDescObj({
              ...introductionDescObj,
              [id]: e.target.value,
            });
            setCoverImg(
              coverImg.map((el) =>
                el.id === id ? { ...el, introduction_text: e.target.value } : el
              )
            );
          }}
        />
      </div>
    </StoryUploaderForm>
  );
}

const StoryUploaderForm = styled.div.attrs({
  id: "introductionForm",
  name: "introductionForm",
})`
  ${({ theme }) => theme.flex(``, ``, `column`)}
  position: relative;
`;

const Icons = styled.div`
  ${({ theme }) => theme.flex(`space-between`)}
  position: absolute;
  top: 8px;
  left: 8px;
  width: 275px;
  cursor: pointer;
`;

const DelBtn = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
`;

const StroyDescUploader = styled.textarea.attrs({
  id: "introductionDesc",
  name: "introductionDesc",
  placeholder: "사진, 영상에 대한 설명을 적어주세요.",
})`
  overflow: auto;
  resize: vertical;
  margin-top: 8px;
  padding: 12px 16px;
  width: 100%;
  height: 104px;
  border: 1px solid rgb(205, 209, 212);
  border-radius: 3px;

  &::placeholder {
    font-size: 14px;
    color: rgb(168, 174, 179);
    line-height: 20px;
    letter-spacing: -1px;
    white-space: pre-wrap;
  }

  &:hover {
    border: 1px solid rgb(189, 194, 198);
  }

  &:focus {
    outline: none;
    border: 1px solid rgb(27, 28, 29);
    color: rgb(27, 28, 29);
  }
`;
