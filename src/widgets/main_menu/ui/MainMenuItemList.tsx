import styled from "@emotion/styled";
import MainMenuItem from "./MainMenuItem";

export default function MainMenuItemList() {
  return (
    <Wrapper>
      <MainMenuItem text="제출" />
      <MainMenuItem text="조합" />
      <MainMenuItem text="인벤" />
      <MainMenuItem text="뽑기" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin-top: 16px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0;

  & > * {
    justify-self: center;
  }

  & > :nth-of-type(1) {
    justify-self: end;
    margin-right: 24.5px;
  }

  & > :nth-of-type(2) {
    justify-self: start;
    margin-left: 24.5px;
  }

  & > :nth-of-type(n + 3) {
    transform: translateY(-6px);
  }

  & > :nth-of-type(3) {
    justify-self: start;
    margin-left: 5px;
  }

  & > :nth-of-type(4) {
    justify-self: end;
    margin-right: 5px;
  }
`;
