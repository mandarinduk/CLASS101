import React from "react";
import { Icon } from "@class101/ui";
import styled, { css } from "styled-components";

const BasicInfo = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <BasicInfoContainer>
          <h3>간단하게 어떤 클래스인지 알려주세요</h3>
          <p>
            언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히
            크리에이터님이 알려 줄수있는 카테고리를 설정해봐요. 모든 수정 사항은
            즉시 저장되니 안심해 주세요.
          </p>
          <FormContainer>
            <form>
              <BrandContainer>
                <label>브랜드</label>
                <select>
                  <option>
                    머니(부업,창업,재테크 등 수익 활동에 대한 클래스를 만들고
                    싶어요
                  </option>
                  <option>
                    커리어(직무,창업,자기계발 등 커리어 향상을 위한 클래스를
                    만들고 싶어요)
                  </option>
                  <option>
                    크리에이티브(미술,음악,요리 등 취미 클래스를 만들고 싶어요)
                  </option>
                </select>
              </BrandContainer>
              <CategoryContainer>
                <label>카테고리</label>
                <input placeholder="예시) 부업,창업,재테크,미술,음악,자기계발 "></input>
              </CategoryContainer>
              <DetailedCategoryContainer>
                <label>세부 카테고리</label>
                <div>
                  예를 들어, 가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리
                  꾸미기, 가계부 작성, 색연필 인물화, 네이버 스토어 운영, 이런
                  식으로요. 더 자세한 내용을 보고 싶다면, 기본 정보 작성 가이드
                  를 확인해 주세요.
                </div>
                <input placeholder="예시) 가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리 꾸미기, 가계부 작성, 색연필 인물화, 네이버 스토어 운영"></input>
              </DetailedCategoryContainer>
              <LevelContainer>
                <label>난이도</label>
                <select>
                  <option>
                    머니(부업,창업,재테크 등 수익 활동에 대한 클래스를 만들고
                    싶어요
                  </option>
                  <option>
                    커리어(직무,창업,자기계발 등 커리어 향상을 위한 클래스를
                    만들고 싶어요)
                  </option>
                  <option>
                    크리에이티브(미술,음악,요리 등 취미 클래스를 만들고 싶어요)
                  </option>
                </select>
              </LevelContainer>
            </form>
          </FormContainer>
        </BasicInfoContainer>
      </ContentWrapper>
      <DisplayContainer></DisplayContainer>
    </ContentContainer>
  );
};

export default BasicInfo;
const ContentContainer = styled.div`
  ${({ theme }) => theme.flex("center", "center")}
  margin-top: 20px;
`;

const DisplayContainer = styled.div`
  width: 360px;
  height: 560px;
  margin-top: -172px;
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.flex("center", "")}
  width: 753px;
  height: 731px;
`;

const BasicInfoContainer = styled.div`
  padding: 32px 32px 60px;
  h3 {
    ${({ theme }) => theme.font("24px", "bold")}
    margin-bottom: 16px;
  }
  p {
    ${({ theme }) => theme.font("14px", "")}
    line-height: 20px;
    letter-spacing: -0.15px;
    color: gray;
    margin-bottom: 32px;
  }
`;

const FormContainer = styled.form``;

const Select = css`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  border: 1px solid rgb(221, 224, 226);
  border-radius: 1px;
  background-color: white;
  flex: 1 1 auto;
  width: 100%;
  padding: 12px 48px 12px 16px;
  height: 48px;
  appearance: none;
  direction: inherit;
  background-image: url("https://images.velog.io/images/olie1014/post/6d09ecc4-194a-457f-afe7-ec556ba6e73c/arrow-down-down-arrow-download-icon-with-png-and-vector-format-510783.png");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 18px;
  color: rgb(27, 28, 29);
`;

const Input = css`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  border: 1px solid rgb(221, 224, 226);
  background-color: white;
  height: 48px;
  flex: 1 1 auto;
  width: 100%;
  color: rgb(27, 28, 29);
  box-sizing: border-box;
  padding: 0px 16px;
  border-radius: 3px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    ${({ theme }) => theme.font("14px", "")}
    margin-bottom: 4px;
  }
  select {
    ${Select}
  }
`;

const CategoryContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  label {
    ${({ theme }) => theme.font("14px", "")}
    margin-bottom: 4px;
  }
  input {
    ${Input}
  }
`;

const DetailedCategoryContainer = styled.div`
  margin-top: 32px;
  label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  div {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    padding: 16px;
    border-radius: 3px;
    background-color: rgb(248, 248, 249);
    margin-bottom: 10px;
    margin-top: 10px;
  }
  input {
    ${Input}
  }
`;

const LevelContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    margin-bottom: 4px;
  }
  select {
    ${Select}
  }
`;
