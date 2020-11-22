import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CountDown = ({ endDateTime }) => {
  const [countDays, setCountDays] = useState("00");
  const [countHours, setCountHours] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  let interval = useRef();
  const EndDate = new Date(endDateTime).getTime();

  const timer = () => {
    interval = setInterval(() => {
      const today = new Date().getTime();
      const difference = EndDate - today;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setCountDays(days);
        setCountHours(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    endDateTime && timer();
  }, [endDateTime]);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <div>
        {countDays}
        <span>일</span>
      </div>
      &nbsp;
      <div>
        {countHours < 10 ? `0${countHours}` : countHours}
        <span>:</span>
      </div>
      <div>
        {countMinutes < 10 ? `0${countMinutes}` : countMinutes}
        <span>:</span>
      </div>
      <div>{countSeconds < 10 ? `0${countSeconds}` : countSeconds}</div>
      &nbsp;
      <span>남음</span>
    </Container>
  );
};

export default CountDown;

const Container = styled.div`
  font-size: 11px;
  color: red;
  margin-left: 10px;
  margin-right: 100px;
  display: flex;
`;
