import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const HeaderPics = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://10.58.6.47:8002/products/detail_image")
      .then((res) => res.json())
      .then((res) => {
        setItem(res.data.detail_image);
      });
  }, []);

  return (
    <Container>
      <Left>
        <img src={item[1]} alt="Golden Gate Bridge" />
      </Left>
      <Right>
        <RightUpper>
          <img src={item[0]} alt="New York" />
        </RightUpper>
        <RightLower>
          <RightLowerLeft>
            <img src={item[2]} alt="Statue of Liberty" />
          </RightLowerLeft>
          <RightLowerRight>
            <img src={item[3]} alt="Space Needle" />
          </RightLowerRight>
        </RightLower>
      </Right>
    </Container>
  );
};

export default HeaderPics;

const Container = styled.div`
  height: 690px;
  display: flex;
`;

const Left = styled.div`
  width: 80%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  margin-left: 6px;
`;

const RightUpper = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const RightLower = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 6px;
  display: flex;
`;

const RightLowerLeft = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 3px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const RightLowerRight = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 3px;
  img {
    width: 100%;
    height: 100%;
  }
`;
