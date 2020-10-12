import React, { useState } from "react";
import styled from "styled-components";
import StoryUploader from "./Components/Introduction/StoryUploader";
import Headers from "./Components/Headers";
import ContentList from "./Components/ContentList";
import CreaterCenterFooter from "./Components/CreaterCenterFooter";
import axios from "axios";

export default function Introduction() {
  const [introductionData, setIntroductionData] = useState();
  const [coverImg, setCoverImg] = useState([]);
  const [files, setFiles] = useState([]);
  const [introductionDescObj, setIntroductionDescObj] = useState({});

  useState(() => {
    fetch("/Data/introductionMOCK.json", {
      // fetch("http://10.58.2.168:8002/products/introduce", {
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIntroductionData(res.data);
        setCoverImg([
          {
            id: 0,
            introduction_image: res.data.introduction_image[0],
            introduction_text: res.data.introduction_text[0],
          },
          {
            id: 1,
            introduction_image: res.data.introduction_image[1],
            introduction_text: res.data.introduction_text[1],
          },
          {
            id: 2,
            introduction_image: res.data.introduction_image[2],
            introduction_text: res.data.introduction_text[2],
          },
        ]);
      });
  }, []);

  const handleUpload = () => {
    const introductionDescs = Object.values(introductionDescObj).map(
      (text) => text
    );
    const filesSort = files.sort((a, b) => a.id - b.id);
    const uploadedFiles = filesSort.map((el) => el.file);

    const formData = new FormData();
    uploadedFiles.forEach((file, index) => {
      formData.append("introduction_image", file, `file${index}`);
    });

    introductionDescs.forEach((text) => {
      formData.append(`introduction_text`, text);
    });

    formData.append("status", 3);

    axios.post(`http://10.58.2.168:8002/products/introduce`, formData, {
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    });
  };

  return (
    <IntroductionWrapper>
      <Headers saved={introductionData?.status} />
      <ContentList saved={introductionData?.status} CONTENTOBJ={CONTENTOBJ} />
      <Content>
        <h3>어떤 걸 알려주실 수 있나요?</h3>
        <h4>
          클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.
        </h4>
        <Guide>
          어떻게 설명하면 좋을지 잘 모르겠나요? 클래스 소개 가이드를 보고 답을
          얻어보세요.
        </Guide>
        <StoryGrid>
          {Array(3)
            .fill()
            .map((el, i) => (
              <StoryUploader
                key={el}
                id={i}
                coverImg={coverImg}
                setCoverImg={setCoverImg}
                introductionDescObj={introductionDescObj}
                setIntroductionDescObj={setIntroductionDescObj}
                files={files}
                setFiles={setFiles}
              />
            ))}
        </StoryGrid>
      </Content>
      {/* <Story /> */}
      <CreaterCenterFooter
        handleUpload={handleUpload}
        prevPage={PREVPAGE}
        nextPage={NEXTPAGE}
      />
    </IntroductionWrapper>
  );
}

const CONTENTOBJ = {
  "기본 정보": false,
  "제목 및 커버": false,
  소개: true,
  "크리에이터 소개": false,
};

const PREVPAGE = "/creatorssubject";

const NEXTPAGE = "/creatorsinfo";

const IntroductionWrapper = styled.div`
  ${({ theme }) => theme.flex(`center`)}
`;

const Content = styled.div`
  position: absolute;
  top: 90px;
  left: 350px;
  padding: 32px 32px 60px 32px;
  max-width: 986px;
  width: 100%;

  h3 {
    margin-bottom: 16px;
    line-height: 34px;
    font-size: 24px;
    font-weight: 700;
  }

  h4 {
    margin-bottom: 32px;
    font-size: 14px;
    color: rgb(133, 138, 141);
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
`;

const Guide = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  border-radius: 3px;
  background-color: rgb(248, 248, 249);
  font-size: 14px;
`;

const Story = styled.div`
  margin-top: 108px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px, rgba(0, 0, 0, 0.03) 0px 3px 6px,
    rgba(0, 0, 0, 0.05) 0px 8px 12px, rgba(0, 0, 0, 0.06) 0px 12px 18px;
  position: sticky;
  width: 360px;
  height: 560px;
  border-radius: 12px;
  background-color: gray;
`;
