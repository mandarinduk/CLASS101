import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainHeader from "../../Components/Nav/Components/MainHeader";
import Footer from "../../Components/Footer/Footer";
import api from "../../Config";
import InputAttrData from "./InputAttrData";
import styled from "styled-components";

function SignUp() {
  const [inputs, setInputs] = useState({
    nameValue: "",
    emailValue: "",
    phoneValue: "",
    pwValue: "",
    pwCheckValue: "",
  });
  const [errMsg, setErrMsg] = useState({
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    pwErr: "",
    pwCheckErr: "",
  });

  const { nameValue, emailValue, phoneValue, pwValue, pwCheckValue } = inputs;

  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [`${name}Value`]: value,
    });

    const validatorMapper = {
      name: value ? "" : "이름을 입력해주세요",
      email:
        value.includes("@") && value.includes(".")
          ? ""
          : "올바른 이메일이 아닙니다.",
      phone:
        value.includes("-") || value.length > 11 || value.length < 11
          ? "올바른 휴대폰 번호가 아닙니다."
          : "",
      pw: value.length < 8 ? "최소 8자 입니다." : "",
      pwCheck: value !== pwValue ? "비밀번호가 일치하지 않습니다" : "",
    };

    setErrMsg({
      ...errMsg,
      [`${name}Err`]: validatorMapper[name],
    });
  };

  const handleClick = () => {
    fetch(`${api}/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        phone_number: phoneValue,
        password: pwValue,
        passwordCheck: pwCheckValue,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
          alert("회원가입을 축하드립니다!");
          history.push("/login");
        } else {
          alert("입력된 정보를 다시 확인해주세요.");
        }
      });
  };

  return (
    <>
      <MainHeader />
      <Wrapper>
        <SignUpForm>
          <Title>회원가입</Title>
          {InputAttrData.map((data, index) => {
            return (
              <InputGroup key={index}>
                <InputTitle>{data.label}</InputTitle>
                <Input
                  autoComplete="off"
                  placeholder={data.placeholder}
                  name={data.name}
                  value={Object.values(inputs)[index]}
                  onChange={handleInput}
                  type={data.type}
                />
                <InputErrMsg>{Object.values(errMsg)[index]}</InputErrMsg>
              </InputGroup>
            );
          })}
          <CheckBoxGroup>
            <CheckBox type="checkBox" />
            <CheckContent>
              <Span>이용약관</Span> 및 <Span>개인정보 처리방침</Span> 동의
            </CheckContent>
          </CheckBoxGroup>
          <CheckBoxGroup>
            <CheckBox type="checkBox" />
            <CheckContent>이벤트 및 할인 소식 알림 동의 (선택)</CheckContent>
          </CheckBoxGroup>
          <Label>
            ┗ 알림 동의 시 <Span red>3만원 쿠폰</Span> 즉시 발급!
          </Label>
          <Button onClick={handleClick} orange>
            회원가입 하기
          </Button>
          <Button>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#1b1c1d"
                fillRule="evenodd"
                d="M12 4c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.186 9-7.115C21 7.185 16.97 4 12 4"
              ></path>
            </svg>
            카카오로 5초 만에 시작하기
          </Button>
        </SignUpForm>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const SignUpForm = styled.div`
  max-width: 984px;
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
  width: 468px;
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
  font-size: 12px;
  color: #ff5252;
  margin-left: 4px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const CheckBox = styled.input`
  display: block;
  width: 18px;
  height: 18px;
`;

const CheckContent = styled.span`
  font-size: 14px;
  margin: 6px 0 0 6px;
`;

const Span = styled.span`
  color: ${(props) => (props.red ? "#fc3d46" : "#46a0c0")};
  font-weight: bold;
  text-decoration: ${(props) => (props.red ? "none" : "underline")};
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  font-size: 11px;
  padding-left: 30px;
  margin: 4px 0 25px 0;
`;

const Button = styled.button`
  display: block;
  width: 468px;
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
