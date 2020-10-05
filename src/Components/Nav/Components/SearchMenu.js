import React from "react";
import styled from "styled-components";
import { Icon } from "@class101/ui";

const SearchMenu = () => (
  <SearchMenuWrapper>
    <span>1NASS101</span>
    <SearchBar>
      <input placeholder="배우고 싶은 것이 있나요?" />
      <Icon.Search size={21} />
    </SearchBar>
  </SearchMenuWrapper>
);

export default SearchMenu;

const SearchMenuWrapper = styled.div`
  ${({ theme }) => theme.flex(`space-between`, `center`)}

  span {
    margin-right: 30px;
    ${({ theme }) => theme.font(`25px`, `900`)}
  }
`;

const SearchBar = styled.div`
  ${({ theme }) => theme.flex(`space-between`, `center`)}
  padding-right: 20px;
  width: 380px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
  border-radius: 3px;

  input {
    padding: 1px 44px 1px 16px;
    border: 0px;
    width: 320px;
    height: 40px;
    font-size: 14px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(27, 28, 29);
    }
  }
`;
