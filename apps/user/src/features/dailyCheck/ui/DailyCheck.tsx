"use client";

import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import DailyCheckBlock from "./block/DailyCheckBlock";
import DailyCheckCover from "./cover/DailyCheckCover";
import DailyCheckCompleteModal from "./cover/DailyCheckCompleteModal";
import Rope from "./Rope";

const NOTICE_DURATION = 1300;

export default function DailyCheck() {
  const [isCovered, setIsCovered] = useState(true);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);

  const hideNotice = () => {
    setIsNoticeOpen(false);
    setIsCovered(false);
  };

  const showNotice = () => {
    setIsNoticeOpen(true);

    if (timerRef.current !== null) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(hideNotice, NOTICE_DURATION);
  };

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
      {isCovered && <DailyCheckCover onClick={showNotice} />}

      <DailyCheckCompleteModal
        isOpen={isNoticeOpen}
        reward={20}
        onClose={hideNotice}
      />
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
