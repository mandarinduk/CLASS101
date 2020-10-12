import React, { useState } from "react";
import { Avatar } from "@class101/ui";
import styled from "styled-components";

const Creator = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container id="creator">
      <ProfileSection>
        <ProfileIntro>
          <Intro>
            <p>
              크리에이터 <br />
              <strong>김우석</strong>입니다
            </p>
          </Intro>
          <Insta>
            <img
              src="https://images.velog.io/images/olie1014/post/75ba07db-1ec4-46ea-92a2-2c6197e66d66/ic-instagram.png"
              alt="isnta"
            />
            <span>ws_david_kim</span>
          </Insta>
        </ProfileIntro>
        <ProfilePic>
          <Avatar
            size={64}
            src={
              "https://images.velog.io/images/olie1014/post/36471217-edc7-4eef-83bf-f0fee3f14ccd/KakaoTalk_Photo_2020-10-08-13-09-02.jpeg"
            }
          />
        </ProfilePic>
      </ProfileSection>
      <CreatorIntroSection isToggle={toggle}>
        <div>
          <img
            src="https://images.velog.io/images/olie1014/post/a912858d-1e2f-461b-bc45-118893468a49/KakaoTalk_Photo_2020-10-08-13-09-02.jpeg"
            alt="profile"
          />
        </div>
        <p>
          여러분 안녕하세요. 김우석입니다. <br />잘 부탁 드립니다.
        </p>
      </CreatorIntroSection>
      <ToggleSection isToggle={toggle}>
        <div onClick={handleToggle}>{toggle ? "- 접기" : "+ 더보기"}</div>
      </ToggleSection>
    </Container>
  );
};

export default Creator;

const Container = styled.div`
  margin-top: 40px;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(237, 239, 240) 0px -1px 0px 0px inset;
`;

const ProfileIntro = styled.div``;

const Intro = styled.div`
  font-size: 24px;
`;

const Insta = styled.a`
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
  span {
    font-size: 14px;
    font-weight: bold;
    color: gray;
    margin-left: 5px;
  }
`;

const ProfilePic = styled.div`
  margin-top: -10px;
`;

const CreatorIntroSection = styled.div`
  overflow: ${({ isToggle }) => (isToggle ? "" : "hidden")};
  height: 280px;
  position: ${({ isToggle }) => (isToggle ? "" : "relative")};
  &:after {
    content: "";
    position: ${({ isToggle }) => (isToggle ? "" : "absolute")};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.01) 7.3%,
      rgba(255, 255, 255, 0.043) 14.3%,
      rgba(255, 255, 255, 0.09) 21.1%,
      rgba(255, 255, 255, 0.153) 27.7%,
      rgba(255, 255, 255, 0.227) 34.1%,
      rgba(255, 255, 255, 0.314) 40.5%,
      rgba(255, 255, 255, 0.4) 46.8%,
      rgba(255, 255, 255, 0.494) 53.2%,
      rgba(255, 255, 255, 0.59) 59.5%,
      rgba(255, 255, 255, 0.68) 65.9%,
      rgba(255, 255, 255, 0.765) 72.3%,
      rgba(255, 255, 255, 0.843) 78.9%,
      rgba(255, 255, 255, 0.91) 85.7%,
      rgba(255, 255, 255, 0.965) 92.7%,
      rgb(255, 255, 255) 100%
    );
  }
  img {
    margin-top: 10px;
    width: 700px;
    height: 370px;
  }
  p {
    margin-top: 10px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;

const ToggleSection = styled.div`
  color: orange;
  margin-top: ${({ isToggle }) => (isToggle ? "180px" : "20px")};
  padding-bottom: 30px;
  display: flex;
  cursor: pointer;
  box-shadow: rgb(237, 239, 240) 0px -1px 0px 0px inset;
`;
