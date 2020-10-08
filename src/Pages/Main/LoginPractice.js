import React, { useEffect } from "react";
import styled from "styled-components";

const LoginPractice = () => {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.init("6e5b86fb4fcd53b122a514b173e88479");
  }, []);

  const KakaoLoginTest = () => {
    console.log("성공");
    Kakao.Auth.login({
      success: (auth) => {
        console.log(auth);
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div>
      <button onClick={KakaoLoginTest}>로그인 버튼</button>
    </div>
  );
};

export default LoginPractice;
