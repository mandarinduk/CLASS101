import React, { useEffect } from "react";
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
        <BackSlider />
        <FrontSlider>
          <Slider {...settings}>
            {items.map((item) => {
              return (
                <MainSlider
                  key={item.id}
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

const BackSlider = styled.div`
  height: 400px;
  background-color: blue;
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
