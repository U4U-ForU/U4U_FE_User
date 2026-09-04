import styled from "@emotion/styled";
import Image from "next/image";

export default function Rope() {
  return (
    <Wrapper>
      <Each
        src="/img/dailyCheckLine.svg"
        width={12}
        height={198}
        alt=""
        aria-hidden="true"
      />
      <Each
        src="/img/dailyCheckLine.svg"
        width={12}
        height={198}
        alt=""
        aria-hidden="true"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Each = styled(Image)`
  position: absolute;
  bottom: calc(100% - 2px);
  z-index: 0;
  width: 12px;
  height: 73px;
  object-fit: fill;

  &:first-of-type {
    left: 20%;
  }

  &:nth-of-type(2) {
    right: 20%;
  }
`;
