import React, { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const MainModal = (props) => {
  const {
    modalCtrl,
    isClicked,

    item,
  } = props;

  // console.log(level);
  // console.log(profile_image);
  // console.log(item.introduction_image1[0]);
  // console.log(item);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const splitHashTag = (string) => {
    const regex = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    return string.split(",").map((tag) => {
      return tag.replace(regex, "");
    });
  };

  return (
    <Wrapper isClicked={isClicked}>
      <Modal>
        <Slider {...settings}>
          <ModalWrapper>
            <ModalImage alt="1st" src={item.cover_image} />
            <ModalContents>
              <Badge>{item.category}</Badge>
              <Badge>{item.detail_category}</Badge>
              <Badge>{item.level}</Badge>
              {item.hashtag &&
                splitHashTag(item.hashtag[0]).map((e) => {
                  return <Badge>{e}</Badge>;
                })}
              <ClassTitle>{item.name}</ClassTitle>
            </ModalContents>
          </ModalWrapper>
          <ModalWrapper>
            <ModalImage alt="1st" src={item.introduction_image[0]} />
            <ModalContents intro>
              <WhatToLearn>이런걸 배워볼거에요</WhatToLearn>
              <ClassDesc>{item.introduction_text[0]}</ClassDesc>
            </ModalContents>
          </ModalWrapper>
          <ModalWrapper>
            <ModalImage alt="1st" src={item.introduction_image[1]} />
            <ModalContents intro>
              <WhatToLearn>이런걸 배워볼거에요</WhatToLearn>
              <ClassDesc>{item.introduction_text[1]}</ClassDesc>
            </ModalContents>
          </ModalWrapper>
          <ModalWrapper>
            <ModalImage alt="1st" src={item.introduction_image[2]} />
            <ModalContents intro>
              <WhatToLearn>이런걸 배워볼거에요</WhatToLearn>
              <ClassDesc>{item.introduction_text[2]}</ClassDesc>
            </ModalContents>
          </ModalWrapper>
          <ModalWrapper profile>
            <ProfileContainer>
              <ProfilePhoto alt="profile" src={item.profile_image} />
              <ProfileIntro>
                안녕하세요 <br /> {item.nickname}입니다.
              </ProfileIntro>
            </ProfileContainer>
            <BadgeContainer>
              <Badge social>
                <BadgeImage alt="yotube" src="/images/youtube.png" />
                <BadgeText>{item.sns[0].account}</BadgeText>
              </Badge>
            </BadgeContainer>
            <ProfileDesc>{item.creator_information}</ProfileDesc>
          </ModalWrapper>
        </Slider>
        <CloseBtn onClick={() => modalCtrl()}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
              fill="white"
            ></path>
          </svg>
        </CloseBtn>
      </Modal>
    </Wrapper>
  );
};

export default MainModal;

const Wrapper = styled.div`
  display: ${({ isClicked }) => (isClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: relative;
  background: white;
  border-radius: 4px;
  width: 405px;
  height: 648px;

  .slick-dots {
    position: absolute;
    top: 600px;

    li button:before {
      color: white;
    }
  }
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 405px;
  height: 648px;
  background: ${({ profile }) => (profile ? "#000000" : "none")};
  border-radius: 4px;
`;

const ModalImage = styled.img`
  position: absolute;
  border-radius: 4px;
  width: 405px;
  height: 648px;
  object-fit: cover;
  z-index: -1;
`;

const ModalContents = styled.div`
  position: absolute;
  bottom: ${({ intro }) => (intro ? "80px" : "100px")};
  left: 30px;
`;

const BadgeContainer = styled.div`
  margin-left: 20px;
`;

const Badge = styled.div`
  display: ${({ social }) => (social ? "inline-flex" : "inline-block;")};
  font-size: 12px;
  color: #ffffff;
  background: ${({ social }) => (social ? "#1b1c1d" : "rgba(0, 0, 0, 0.7)")};
  opacity: 0.8;
  padding: 7px;
  border-radius: ${({ social }) => (social ? "14px" : "3px")};
  margin-right: 4px;
  margin-left: ${({ social }) => (social ? "4px" : "none")};
  padding-bottom: 5px;
  cursor: pointer;
`;

const BadgeImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const BadgeText = styled.span`
  font-size: 12px;
  color: #ffffff;
  line-height: 18px;
`;

const ClassTitle = styled.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
  margin-top: 14px;
`;

const WhatToLearn = styled.h2`
  font-size: 14px;
  color: #cdd1d4;
  opacity: 0.9;
`;

const ClassDesc = styled.h3`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  padding-right: 30px;
  margin-top: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 20px;
  margin-bottom: 40px;
`;

const ProfilePhoto = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 100%;
  object-fit: cover;
`;

const ProfileIntro = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
  margin: 12px 0 0 16px;
`;

const ProfileDesc = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #cdd1d4;
  padding: 20px;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;
