import React, { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import ContentList from "./Components/ContentList";
import CreaterCenterFooter from "./Components/CreaterCenterFooter";
import CreatorsSubjectData from "./Data/CreatorsSubjectData";
import axios from "axios";
import { api } from "../../Config";
import styled, { css } from "styled-components";

function CreatorsSubject() {
  const [backData, setBackData] = useState("");
  const [coverImgURL, setCoverImgURL] = useState("");
  const [thumbnailImgURL, setThumbnailImgURL] = useState("");
  const [coverImgBase64, setCoverImgBase64] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [thumbnailImgBase64, setThumbnailImgBase64] = useState("");
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [subject, setSubject] = useState("");

  // mockData 테스트용 코드
  // useEffect(() => {
  //   axios
  //     .get(`/Data/CreatorsSubject/mockData.json`)
  //     .then((res) => setBackData(res.data.data));
  // }, []);

  useEffect(() => {
    axios
      .get(`${api}/products/title`, {
        headers: {
          Authorization: localStorage.getItem("Kakao_token"),
        },
      })
      .then((res) => {
        console.log(res);
        setBackData(res.data.data);
      });
  }, []);

  useEffect(() => {
    const { cover_image, thumbnail, name } = backData;
    setCoverImgURL(cover_image);
    setThumbnailImgURL(thumbnail);
    setSubject(name);
  }, [backData]);

  const uploadCoverImg = (e) => {
    uploadImg(e, setCoverImgBase64, setCoverImg);
  };

  const removeCoverImg = (e) => {
    removeImg(e, setCoverImgBase64, setCoverImg);
    setCoverImgURL("");
  };

  const uploadThumbnailImg = (e) => {
    uploadImg(e, setThumbnailImgBase64, setThumbnailImg);
  };

  const removeThumbnailImg = (e) => {
    removeImg(e, setThumbnailImgBase64, setThumbnailImg);
    setThumbnailImgURL("");
  };

  const uploadImg = (e, setImgBase64, setImg) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      base64 ? setImgBase64(base64.toString()) : setImgBase64("");
    };

    const [imgFile] = e.target.files;
    if (imgFile) {
      reader.readAsDataURL(imgFile);
      setImg(imgFile);
    }
  };

  const removeImg = (e, setImgBase64, setImg) => {
    e.preventDefault();
    setImgBase64("");
    setImg(null);
  };

  const handleSubject = (e) => {
    const { value } = e.target;
    setSubject(value);
  };

  const sendData = async () => {
    const formData = new FormData();
    formData.append("cover", coverImg);
    formData.append("thumbnail", thumbnailImg);
    formData.append("title", subject);

    await axios
      .post(`${api}/products/title`, formData, {
        headers: {
          Authorization: localStorage.getItem("Kakao_token"),
        },
      })
      .then((res) => res.data.message === "SUCCESS" && alert("🥳저장 성공❗️"));
  };

  return (
    <>
      <Headers saved={backData?.status} />
      <ContentList saved={backData?.status} CONTENTOBJ={CONTENTOBJ} />
      <Wrapper>
        <MainSection>
          <Title>
            클래스의 컨셉이 잘 드러난
            <br />
            제목과 이미지를 보여주세요
          </Title>
          <Description>
            감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.
          </Description>
          <CoverContainer>
            <CoverMain>
              <ContentSubject>커버 이미지</ContentSubject>
              <ImgContainer coverImg={coverImg} coverImgURL={coverImgURL}>
                <InputImg
                  type="file"
                  onChange={uploadCoverImg}
                  disabled={coverImg || coverImgURL}
                />
                <UploadedImgWrap coverImg={coverImg} coverImgURL={coverImgURL}>
                  <UploadedImg
                    alt="coverImg"
                    src={coverImgURL ? coverImgURL : coverImgBase64}
                  />
                  <DelBtn onClick={removeCoverImg}>
                    {CreatorsSubjectData.DelBtn}
                  </DelBtn>
                </UploadedImgWrap>
                <DefaultContentsWrap
                  coverImg={coverImg}
                  coverImgURL={coverImgURL}
                >
                  <ImgDefaultIcon
                    alt="imgDefault"
                    src="https://class101.net/images/add-photo-portrait.png"
                  />
                  <ImgDescTitle>이미지를 첨부해주세요</ImgDescTitle>
                  <ImgDescSub>9:16의 세로형 이미지를 추천합니다.</ImgDescSub>
                </DefaultContentsWrap>
              </ImgContainer>
            </CoverMain>
            <CoverSub>
              <ContentSubject>클래스 제목</ContentSubject>
              <Input
                placeholder="컨셉이 잘 드러나는 클래스의 제목을 지어주세요."
                onChange={handleSubject}
                name="subject"
                value={subject || ""}
              />
              <ContentDescBox>
                <DescTitle>어떤 사진과 제목이 좋을지 고민이신가요?</DescTitle>
                <br />
                <DescSub>
                  감성적이면서도 직관적인 제목이 좋아요! 두 가지 모두 표현하는
                  것이 어렵다면 <Span>제목 가이드</Span>를 참고해 주세요. <br />
                  <br /> 커버 이미지가 첫 인상을 결정해요. 어떤 이미지가
                  좋을지&nbsp;
                  <Span>커버 이미지 가이드</Span>를 확인해 보세요!
                </DescSub>
                <br />
                {CreatorsSubjectData.coverDescImgs.map((img, index) => {
                  return (
                    <DescImgWrap key={index}>
                      <DescImg alt={img.name} src={img.src} />
                      <HeartIcon>{CreatorsSubjectData.heartIcon}</HeartIcon>
                    </DescImgWrap>
                  );
                })}
              </ContentDescBox>
            </CoverSub>
          </CoverContainer>
          <ThumbnailContainer>
            <ThumbnailMain>
              <ContentSubject>썸네일 이미지</ContentSubject>
              <ImgContainer
                thumbnail
                thumbnailImg={thumbnailImg}
                thumbnailImgURL={thumbnailImgURL}
              >
                <InputImg
                  type="file"
                  onChange={uploadThumbnailImg}
                  disabled={thumbnailImg || thumbnailImgURL}
                />
                <UploadedImgWrap
                  thumbnail
                  thumbnailImg={thumbnailImg}
                  thumbnailImgURL={thumbnailImgURL}
                >
                  <UploadedImg
                    alt="thumbnailImg"
                    src={thumbnailImgURL ? thumbnailImgURL : thumbnailImgBase64}
                    thumbnail
                    thumbnailImg={thumbnailImg}
                  />
                  <DelBtn onClick={removeThumbnailImg}>
                    {CreatorsSubjectData.DelBtn}
                  </DelBtn>
                </UploadedImgWrap>
                <DefaultContentsWrap
                  thumbnailImg={thumbnailImg}
                  thumbnailImgURL={thumbnailImgURL}
                >
                  <ImgDefaultIcon
                    alt="imgDefault"
                    src="https://class101.net/images/add-photo-portrait.png"
                  />
                  <ImgDescTitle>이미지를 첨부해주세요</ImgDescTitle>
                  <ImgDescSub>4:3의 세로형 이미지를 추천합니다.</ImgDescSub>
                </DefaultContentsWrap>
              </ImgContainer>
            </ThumbnailMain>
            <ThumbnailSub>
              <ContentDescBox thumbnail>
                <DescTitle>썸네일 이미지가 어디에 사용되나요?</DescTitle>
                <br />
                <DescSub thumbnail>
                  썸네일 이미지는 아래와 같이 홈페이지의 메인, 수요 조사 메인
                  페이지에서 보이는 이미지예요. 커버 이미지와 다르게 세로형이
                  아닌 가로형 이미지에 최적화돼있습니다.
                </DescSub>
                <br />
                {CreatorsSubjectData.thumbnailDescImgs.map((img, index) => {
                  return (
                    <DescImgWrap key={index}>
                      <DescImg alt={img.name} src={img.src} thumbnail />
                      <HeartIcon>{CreatorsSubjectData.heartIcon}</HeartIcon>
                    </DescImgWrap>
                  );
                })}
              </ContentDescBox>
            </ThumbnailSub>
          </ThumbnailContainer>
        </MainSection>
      </Wrapper>
      <CreaterCenterFooter
        handleUpload={sendData}
        nextPage={NEXTPAGE}
        prevPage={PREVPAGE}
      />
    </>
  );
}

export default CreatorsSubject;

const PREVPAGE = "/basicinfo";

const NEXTPAGE = "/creatorsintroduction";

const Wrapper = styled.div`
  max-width: 1400px;
  height: 1100px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const MainSection = styled.section`
  max-width: 986px;
  width: 100%;
  height: 1100px;
  margin: 120px 0 0 320px;
`;

const Title = styled.h1`
  max-width: 922px;
  width: 100%;
  height: 68px;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  margin-bottom: 18px;
`;

const Description = styled.h2`
  max-width: 922px;
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #989c9e;
  margin-bottom: 20px;
`;

const ContainerDisplay = css`
  display: flex;
  justify-content: space-between;
`;

const CoverContainer = styled.div`
  ${ContainerDisplay};
  max-width: 922px;
  width: 100%;
  height: 517px;
`;

const CoverMain = styled.div`
  max-width: 300px;
  width: 100%;
  height: 501px;
`;

const ContentSubject = styled.h3`
  font-size: 14px;
  margin-bottom: 8px;
`;

const ImgContainer = styled.label`
  display: flex;
  align-items: center;
  max-width: 300px;
  width: 100%;
  height: ${({ thumbnail }) => (thumbnail ? "231px" : "400px")};
  border: 1px solid #cdd1d4;
  border-radius: 3px;
  cursor: ${({ coverImg, coverImgURL, thumbnailImg, thumbnailImgURL }) =>
    coverImg || coverImgURL || thumbnailImg || thumbnailImgURL
      ? `default`
      : `pointer`};
`;

const InputImg = styled.input`
  display: none;
`;

const UploadedImgWrap = styled.div`
  display: ${({ coverImg, coverImgURL, thumbnailImg, thumbnailImgURL }) =>
    coverImg || coverImgURL || thumbnailImg || thumbnailImgURL
      ? `block`
      : `none`};
  position: relative;
  max-width: 300px;
  width: 100%;
  height: ${({ thumbnail }) => (thumbnail ? "229px" : "398px")};
`;

const UploadedImg = styled.img`
  max-width: 300px;
  width: 100%;
  height: ${({ thumbnail }) => (thumbnail ? "229px" : "398px")};
  object-fit: cover;
  border-radius: 3px;
`;

const DelBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const DefaultContentsWrap = styled.div`
  display: ${({ coverImg, coverImgURL, thumbnailImg, thumbnailImgURL }) =>
    coverImg || coverImgURL || thumbnailImg || thumbnailImgURL
      ? `none`
      : `flex`};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  width: 100%;
`;

const ImgDefaultIcon = styled.img`
  width: 72px;
  height: 72px;
`;

const ImgDescTitle = styled.div`
  font-size: 14px;
  color: #bbbfc4;
  margin-top: 10px;
`;

const ImgDescSub = styled.div`
  font-size: 11px;
  color: #bbbfc4;
  margin-top: 14px;
`;

const Input = styled.input`
  max-width: 598px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  margin-bottom: 4px;
  border: 1px solid #dde0e2;
  border-radius: 3px;
  margin-bottom: 8px;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 0.5px #000000;
  }
  ::placeholder {
    color: #aaaeb4;
  }
`;

const ContentDescBox = styled.div`
  max-width: 598px;
  width: 100%;
  height: ${({ thumbnail }) => (thumbnail ? "254px" : "394px")};
  background: #f8f8f9;
  padding: 16px;
  margin-top: ${({ thumbnail }) => (thumbnail ? "22px" : "none")};
  border-radius: 4px;
`;

const DescTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
`;

const DescSub = styled.h5`
  font-size: 14px;
  line-height: ${({ thumbnail }) => (thumbnail ? "20px" : "18px")};
`;

const Span = styled.span`
  color: #6bb3cc;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

const DescImgWrap = styled.div`
  display: inline-block;
  position: relative;
  max-width: 190px;
  width: 33.3%;
  height: ${({ thumbnail }) => (thumbnail ? "133px" : "245px")};
  padding-right: 10px;
`;

const DescImg = styled.img`
  max-width: 178px;
  width: 100%;
  height: ${({ thumbnail }) => (thumbnail ? "133px" : "245px")};
  border-radius: 3px;
  object-fit: cover;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
`;

const CoverSub = styled.div`
  max-width: 598px;
  width: 100%;
  height: 501px;
`;

const ThumbnailContainer = styled.div`
  ${ContainerDisplay};
  max-width: 922px;
  width: 100%;
  height: 315px;
`;

const ThumbnailMain = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;
`;

const ThumbnailSub = styled.div`
  max-width: 598px;
  width: 100%;
  height: 300px;
`;

const CONTENTOBJ = {
  "기본 정보": false,
  "제목 및 커버": true,
  소개: false,
  "크리에이터 소개": false,
};
