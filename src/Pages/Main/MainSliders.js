import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import MainSlider from "./MainSlider";

import { useDispatch, useSelector } from "react-redux";
import { getAllMdClasses } from "../../modules/MdClasses";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSliders = (props) => {
  const dispatch = useDispatch();
  const allMdClassData = useSelector((state) => state.allMdClasses);
  const [bgColor, setbgColor] = useState(8);

  useEffect(() => {
    getAllMdClasses(dispatch);
  }, []);

  const items = allMdClassData.mdClasses;

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <SliderWrapper>
        <BackSlider bgColor={bgColor} />
        <FrontSlider>
          <Slider
            {...settings}
            beforeChange={(currentSlide) => {
              setbgColor(currentSlide);
            }}
          >
            {items.map((item, index) => {
              return (
                <MainSlider
                  length={items.length}
                  id={index + 1}
                  thumbnail={item.thumbnail}
                  name={item.name}
                />
              );
            })}
          </Slider>
        </FrontSlider>
      </SliderWrapper>
    </Container>
  );
};

export default MainSliders;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderWrapper = styled.section`
  position: relative;
`;

const bgColors = {
  0: "#5CDB95",
  1: "#41B3A3",
  2: "#2F2FA2",
  3: "#FC4445",
  4: "#1A1A1D",
  5: "#FF652F",
  6: "#5680E9",
  7: "#F4CC70",
  8: "#EC96A4",
};

const BackSlider = styled.div`
  height: 400px;
  background-color: ${(props) => bgColors[props.bgColor]};
`;

const FrontSlider = styled.div`
  position: absolute;
  max-width: 1176px;
  min-width: 600px;
  height: 400px;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
`;
