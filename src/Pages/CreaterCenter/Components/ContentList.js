import React, { useState } from "react";
import { Colors, Icon } from "@class101/ui";
import styled from "styled-components";

function ContentList({ saved, CONTENTOBJ }) {
  const [contentObj, setContentObj] = useState(CONTENTOBJ);

  const isClicked = (title) => {
    setContentObj({
      "기본 정보": false,
      "제목 및 커버": false,
      소개: false,
      "크리에이터 소개": false,
      [title]: true,
    });
  };

  return (
    <ContentListWrapper>
      {Object.keys(contentObj).map((content, i) => (
        <Button
          key={i}
          onClick={() => isClicked(content)}
          clicked={contentObj[content]}
        >
          <ContentNumber
            isSaved={saved?.includes(content)}
            clicked={contentObj[content]}
          >
            {i + 1}
          </ContentNumber>
          <Icon.CheckboxOn
            fillColor={saved?.includes(content) ? Colors.orange600 : ``}
          />
          <span>{content}</span>
        </Button>
      ))}
    </ContentListWrapper>
  );
}

export default ContentList;

const ContentListWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0px;
  width: 280px;
  padding-top: 24px;
  height: 100%;
  min-height: calc(100vh - 94px);
  border-right: 1px solid rgb(237, 239, 240);
  overflow: hidden;

  svg {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 32px;
    height: 32px;
    margin-right: 20px;
  }

  span {
    display: inline-block;
    position: absolute;
    left: 50px;
  }
`;

const Button = styled.div`
  ${({ theme }) => theme.flex(`start`, `center`)}
  position: relative;
  margin: 0 16px 16px 16px;
  padding: 12px;
  width: 248px;
  height: 48px;
  border-radius: 3px;
  color: ${({ clicked }) => (clicked ? `black` : `rgb(133, 138, 141)`)};
  background-color: ${({ clicked }) => (clicked ? `#f8f8f9` : `white`)};
  ${({ theme }) => theme.font(`16px`, `500`)}
  cursor: pointer;

  &:hover {
    background-color: #dddde1;
  }
`;

const ContentNumber = styled.div`
  ${({ theme }) => theme.flex(`center`, `center`)}
  display: ${({ isSaved }) => (isSaved ? `none` : ``)};
  margin-bottom: 4px;
  width: 24px;
  height: 24px;
  border: 1px solid
    ${({ clicked }) => (clicked ? `black` : `rgb(133, 138, 141)`)};
  border-radius: 6px;
  font-size: 11px;
`;
