import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CurriculumList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/ProductDetail/CurriculumList.json")
      .then((res) => res.json())
      .then((res) => {
        setList(res.List);
      });
  }, []);

  return (
    <div>
      {list?.map((lists) => {
        return (
          <ListContainer key={lists.id}>
            <ListLeft>
              <img src={lists.src} alt={lists.alt} />
            </ListLeft>
            <ListRight>
              <ListTitle>
                <h3>{lists.title}</h3>
              </ListTitle>
              <ListInfo>
                <span>{lists.first}</span>
                <span>{lists.second}</span>
                <span>{lists.third}</span>
              </ListInfo>
            </ListRight>
          </ListContainer>
        );
      })}
    </div>
  );
};

export default CurriculumList;

const ListContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

const ListLeft = styled.div`
  img {
    width: 220px;
    height: 123.75px;
  }
`;

const ListRight = styled.div`
  margin-left: 10px;
`;

const ListTitle = styled.div`
  margin-top: 10px;
`;

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 15px;
  }
`;
