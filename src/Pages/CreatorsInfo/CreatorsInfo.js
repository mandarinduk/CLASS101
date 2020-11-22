import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Headline3,
  Body2,
  Icon,
  Input,
  Textarea,
  Select,
  Caption1,
  Button,
  Callout,
  CalloutStatus,
} from "@class101/ui";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import S3FileUpload from "react-s3";
import { api } from "../../Config";

import Headers from "../CreaterCenter/Components/Headers";
import ContentList from "../CreaterCenter/Components/ContentList";
import CreaterCenterFooter from "../CreaterCenter/Components/CreaterCenterFooter";

const CreatorsInfo = () => {
  // 크리에이터 전체 데이터 받아오기
  const [creator, setCreator] = useState([]);
  // 크리에이터 데이터 불러온 후 배열에 선언하기
  useEffect(() => {
    fetch(`${api}/user/creator/intro`, {
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setCreator(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const {
      profile_image,
      nickname,
      phone_number,
      SNS,
      creator_introduction,
      hashtag,
    } = creator;

    if (creator) {
      setProfile(profile_image);
      setNickname(nickname);
      setContact(phone_number);
      setSNS(SNS);
      setInfo(creator_introduction);
      setTags(hashtag);
    }
  }, [creator]);

  // 크리에이터 프로필사진 관련
  // 아마존 s3 설정
  const config = {
    bucketName: "kyudeokbae",
    region: "ap-northeast-2",
    accessKeyId: "",
    secretAccessKey: "",
  };

  // 프로필 업로드 함수
  const [profile, setProfile] = useState();
  const handleProfile = (e) => {
    const file = e.target.files[0];
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setProfile(data.location);
      })
      .catch((err) => {
        alert("이미지 업로드에 실패하였습니다.");
      });
  };

  // 크리에이터 닉네임 관련
  const [nickname, setNickname] = useState("");
  const handleNickname = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);
    setNickname(message);
  };

  // 크리에이터 연락처 관련
  const [contact, setContact] = useState("");
  const handleContact = (e) => {
    const { value, maxLength } = e.target;
    const contactNo = value.slice(0, maxLength);
    setContact(contactNo);
  };

  // 크리에이터 채널 관련
  const [sns, setSNS] = useState([]);

  // SNS 내부 키값들

  const handleChannelName = (index) => (e) => {
    let newSNS = [...sns];
    newSNS[index].sns = e.target.value;
    setSNS(newSNS);
  };

  const handleChannelId = (index) => (e) => {
    let newSNS = [...sns];
    newSNS[index].account = e.target.value;
    setSNS(newSNS);
  };

  const handleChannelURL = (index) => (e) => {
    let newSNS = [...sns];
    newSNS[index].address = e.target.value;
    setSNS(newSNS);
  };

  const addChannel = (e) => {
    const snsid = new Date().getTime();
    setSNS(
      sns
        ? [...sns, { ...initialSnsObject, snsid }]
        : [{ ...initialSnsObject, snsid }]
    );
  };

  // 크리에이터 자기소개 관련
  const [info, setInfo] = useState("");
  const handleInfo = (e) => {
    const { value } = e.target;
    setInfo(value);
  };

  // 크리에이터 관련 Taginput
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);
  // 데이터 저장하기 함수
  const postCreator = () => {
    let newCreator = {
      photo: profile,
      nickname: nickname,
      phone_no: contact,
      sns: sns,
      personality: info,
      hashtag: tags,
    };

    fetch(`${api}/user/creator/intro`, {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
      body: JSON.stringify(newCreator),
    })
      .then((res) => res.json())
      .then((res) => res.data.message === "SUCCESS" && alert("🥳저장 성공❗️"))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <Headers saved={creator?.status} />
      <MiddleContainer>
        <ContentList saved={creator?.status} CONTENTOBJ={CONTENTOBJ} />
        <SmallContainer>
          <WrapperLeft>
            <Headline3>
              본인을 소개하고 {<br />} 활동중인 SNS 채널을 알려주세요
            </Headline3>
            <CreatorProfile>
              <Body2>프로필</Body2>
              <div className="upload">
                <label for="file-input">
                  <img
                    alt="profileUpload"
                    src={
                      profile
                        ? profile
                        : "https://i1.wp.com/www.stapaustral.catholic.edu.au/wp-content/uploads/sites/16/2019/05/Person-icon.jpg?ssl=1"
                    }
                  />
                  <Icon.Camera size={28} />
                </label>
                <input id="file-input" type="file" onChange={handleProfile} />
              </div>
            </CreatorProfile>
            <CreatorNickname>
              <Body2>크리에이터 닉네임</Body2>
              <Input
                type="text"
                placeholder="사용할 닉네임을 적어주세요."
                value={nickname || ""}
                onChange={handleNickname}
                maxLength="15"
              ></Input>
              <Caption1>{nickname?.length}자 / 최대 15자</Caption1>
            </CreatorNickname>
            <CreatorContact>
              <Body2>연락처</Body2>
              <Input
                type="text"
                placeholder="전화번호를 입력해주세요"
                value={contact || ""}
                onChange={handleContact}
                maxLength="11"
              ></Input>
            </CreatorContact>
            <CreatorChannel>
              {sns?.map((channel, index) => {
                return (
                  <div className="channelContainer">
                    <ChannelDesc>
                      <Body2>활동적인 SNS 채널 0{index + 1}</Body2>
                      <Body2
                        className="delete"
                        onClick={(e) => {
                          setSNS(
                            sns.filter((el) => {
                              return el.snsid !== channel.snsid;
                            })
                          );
                        }}
                      >
                        삭제하기
                      </Body2>
                    </ChannelDesc>
                    <div>
                      <Select
                        value={channel?.sns || ""}
                        placeholder="SNS 종류를 골라주세요"
                        options={["Instagram", "Youtube", "Facebook", "기타"]}
                        onChange={handleChannelName(index)}
                      />
                      <Input
                        value={channel?.account || ""}
                        size="md"
                        placeholder="채널 아이디를 입력해주세요. (@제외)"
                        onChange={handleChannelId(index)}
                      />
                      <Input
                        value={channel?.address}
                        size="md"
                        placeholder="URL 주소를 입력해주세요"
                        onChange={handleChannelURL(index)}
                      />
                    </div>
                  </div>
                );
              })}
              <ChannelAdd>
                <Button fill onClick={addChannel}>
                  + 채널 추가하기
                </Button>
              </ChannelAdd>
            </CreatorChannel>
            <CreatorInfo>
              <Body2>크리에이터 소개</Body2>
              <Textarea
                placeholder="크리에이터님이 어떤 분인지 소개해주세요."
                value={info || ""}
                onChange={handleInfo}
              />
            </CreatorInfo>
            <CreatorHashtag>
              <ReactTagInput
                placeholder="클래스와 어울리는 단어를 입력해주세요"
                tags={tags || []}
                onChange={(newTags) => setTags(newTags)}
              />
            </CreatorHashtag>
            <CreatorGuide>
              <Callout title="이용 방법" status={CalloutStatus.SUGGEST}>
                응원을 얻기 위한 크리에이터님의 매력을 소개해주세요. 마지막
                크리에이터님의 한마디가 클래스메이트님들의 마음을 움직일 수 있을
                거예요! 다른 크리에이터님들은 어떻게 작성했는지 궁금하다면,
                크리에이터 소개 가이드 를 참고해 주세요.
              </Callout>
            </CreatorGuide>
          </WrapperLeft>
        </SmallContainer>
        <CreaterCenterFooter
          handleUpload={postCreator}
          prevPage={PREVPAGE}
          nextPage={NEXTPAGE}
        />
      </MiddleContainer>
    </Wrapper>
  );
};

export default CreatorsInfo;

const PREVPAGE = "/creatorsintroduction";

const NEXTPAGE = "/";

const Wrapper = styled.section``;

const MiddleContainer = styled.section`
  display: flex;
`;

const SmallContainer = styled.section`
  display: flex;
`;

const WrapperLeft = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 290px;
  width: 916px;
  padding: 24px 24px;
  overflow: auto;
  margin-bottom: 70px;

  h3 {
    margin-bottom: 12px;
  }
`;

const CreatorProfile = styled.div`
  margin-bottom: 32px;

  .upload {
    width: 90px;
    height: 90px;

    label {
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
      }

      svg {
        position: absolute;
        top: -15px;
        right: -3px;
        border-radius: 50px;
      }
    }

    input {
      display: none;
    }
  }
`;

const CreatorNickname = styled.div`
  margin-bottom: 32px;
`;

const CreatorContact = styled.div`
  margin-bottom: 32px;
`;

const CreatorChannel = styled.div`
  margin-bottom: 32px;

  .channelContainer {
    margin-bottom: 12px;
  }
`;

const ChannelDesc = styled.div`
  display: flex;
  justify-content: space-between;

  .delete {
    color: red;
    font-weight: 700;
    cursor: pointer;
  }
`;

const ChannelAdd = styled.div`
  margin-top: 12px;
`;

const CreatorInfo = styled.div`
  margin-bottom: 32px;

  textarea {
    resize: vertical;
  }
`;

const CreatorHashtag = styled.div`
  margin-bottom: 32px;

  input {
    font-size: 12px;
  }
`;

const CreatorGuide = styled.div`
  margin-bottom: 32px;
`;

const initialSnsObject = { sns: "", account: "", address: "" };

const CONTENTOBJ = {
  "기본 정보": false,
  "제목 및 커버": false,
  소개: false,
  "크리에이터 소개": true,
};
