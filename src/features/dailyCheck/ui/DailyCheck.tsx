import styled from "@emotion/styled";
import Image from "next/image";
import DailyCheckBlock from "./DailyCheckBlock";
import Rope from "./Rope";

export default function DailyCheck() {
  return (
    <DailyCheckSection>
      <Rope />
      <Ropee
        src="/img/dailyCheckLine.svg"
        width={12}
        height={198}
        alt=""
        aria-hidden="true"
      />
      <DailyCheckBlock totalCount={5} />
    </DailyCheckSection>
  );
}

const DailyCheckSection = styled.section`
  position: relative;
  width: min(353px, 100%);
  margin: 22px auto 0;
`;

const Ropee = styled(Image)`
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
