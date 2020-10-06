import React from "react";
import { Link, useHistory } from "react-router-dom";
import { kakaoLogin_API } from "../../Config";
import styled from "styled-components";

function Login() {
  const history = useHistory();
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${kakaoLogin_API}`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("Kakao_token", res.access_token);
            res.access_token ? history.push("/") : alert("로그인 실패!");
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <Wrapper>
      <LoginSection>
        <LoginForm>
          <Header>
            <LogoImg src="images/101.png" />
            <LanguageBtn>한국어</LanguageBtn>
          </Header>
          <Title>로그인</Title>
          <InputGroup>
            <InputTitle>아이디</InputTitle>
            <Input placeholder="example@naver.com" />
            {/* <InputErrMsg>이메일을 입력해주세요</InputErrMsg> */}
          </InputGroup>
          <InputGroup>
            <InputTitle>비밀번호</InputTitle>
            <Input placeholder="******" />
            {/* <InputErrMsg>비밀번호를 입력해주세요</InputErrMsg> */}
          </InputGroup>
          <LinkBox>
            <LinkContent>비밀번호를 잊으셨나요?</LinkContent>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <LinkContent>회원 가입하기</LinkContent>
            </Link>
          </LinkBox>
          <Button orange>로그인</Button>
          <Button onClick={kakaoLogin}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#1b1c1d"
                fillRule="evenodd"
                d="M12 4c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.186 9-7.115C21 7.185 16.97 4 12 4"
              ></path>
            </svg>
            카카오로 5초 만에 시작하기
          </Button>
        </LoginForm>
      </LoginSection>
      <ImageSection>
        <LoginImage src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
      </ImageSection>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  width: 46%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 376px;
  height: 44px;
  margin-top: 20px;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  padding-bottom: 4px;
  cursor: pointer;
`;

const LanguageBtn = styled.button`
  width: 90px;
  height: 40px;
  background: none;
  border: none;
  outline: none;
  color: #a8aeb3;
  cursor: pointer;
`;

const LoginForm = styled.div`
  width: 376px;
`;

const Title = styled.h1`
  position: relative;
  left: 0;
  font-size: 30px;
  font-weight: 600;
  margin: 40px 0;
`;

const InputGroup = styled.div`
  width: 468px;
  margin-bottom: 20px;
`;

const InputTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 376px;
  height: 48px;
  padding: 0 16px;
  margin-bottom: 4px;
  border: 1px solid #dde0e2;
  border-radius: 3px;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 0.5px #000000;
  }
`;

const InputErrMsg = styled.label`
  display: block;
  font-size: 12px;
  color: #ff5252;
  margin: 3px 0 0 4px;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 376px;
  height: 16px;
  margin: 20px 0;
`;

const LinkContent = styled.div`
  color: #a8aeb3;
  font-size: 11px;
  cursor: pointer;
`;

const Button = styled.button`
  display: block;
  width: 376px;
  height: 48px;
  margin: 8px 0;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: 1px solid ${(props) => (props.orange ? "#ff922b" : "#ffe812")};
  border-radius: 3px;
  color: ${(props) => (props.orange ? "#ffffff" : "#000000")};
  background: ${(props) => (props.orange ? "#ff922b" : "#ffe812")};
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const ImageSection = styled.section`
  width: 54%;
`;

const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
