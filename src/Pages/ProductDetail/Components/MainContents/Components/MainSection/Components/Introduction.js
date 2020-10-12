import React from "react";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Container id="introduction">
      <h4> 같이 미국여행을 떠나 볼까요!</h4>
      {IMAGESRC.map((image) => {
        return <img key={image.id} src={image.src} alt={image.alt} />;
      })}
      <p>
        미국에 여러 도시들을 같이 알아보고, 같이 미국 여행을 준비해 볼수있는
        클래스 입니다. 미서부 시애틀부터 미동부 뉴욕까지 미국 각 도시의
        랜드마크와 각종 엑티비티 및 맛집들을 알려드릴게요.
      </p>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  h4 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  img {
    margin-top: 10px;
    width: 720px;
    height: 550px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;

const IMAGESRC = [
  {
    id: 1,
    src:
      "https://images.velog.io/images/olie1014/post/5bf34de0-b875-4f7a-98a0-faaef8f6a4a1/KakaoTalk_Photo_2020-10-08-13-10-00.jpeg",
    alt: "New York",
  },
  {
    id: 2,
    src:
      "https://images.velog.io/images/olie1014/post/d6f2ced5-a4b9-4439-b853-fc7ae5b23eb8/KakaoTalk_Photo_2020-10-08-13-09-24.jpeg",
    alt: "New York",
  },
  {
    id: 3,
    src:
      "https://images.velog.io/images/olie1014/post/611c19d3-6124-4ff5-956f-b5e28cf8a08a/KakaoTalk_Photo_2020-10-08-13-09-33.jpeg",
    alt: "New York",
  },
  {
    id: 4,
    src:
      "https://images.velog.io/images/olie1014/post/dedcde70-f79b-4a9d-b150-849a6006d2f2/KakaoTalk_Photo_2020-10-08-13-08-54.jpeg",
    alt: "New York",
  },
];
