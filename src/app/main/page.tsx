"use client";

import Header from "../../widgets/Header";
import Button from "../../shared/ui/Button";
import Image from "next/image";
import styled from "@emotion/styled";
import DailyCheck from "@/src/features/dailyCheck/ui/DailyCheck";
import MainMenuItemList from "@/src/widgets/main_menu";

export default function Main() {
  return (
    <Page>
      <BgBottom />
      <Foreground>
        <Header />
      </Foreground>
      <DailyCheck />
      <MainMenuItemList />
      <BottomContent>
        <MainImg
          src="/img/MainImg.svg"
          alt="메인 캐릭터"
          width={300}
          height={315}
        />
        <Button
          text="거래하기"
          fontColor="#CE8F8F"
          backgroundColor="#fff"
          borderColor="#DFAFAF"
        />
      </BottomContent>
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  overflow: hidden;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const MainImg = styled(Image)`
  aspect-ratio: 49/57;
`;

const BottomContent = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(24px + env(safe-area-inset-bottom));
  z-index: 1;
  display: flex;
  width: min(100vw, 393px);
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const BgBottom = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 0;
  width: min(100vw, 393px);
  height: 215px;
  transform: translateX(-50%);
  border-top: 2px solid var(--pink-p3, #dfafaf);
  background: var(--pink-p2, #ffd3d3);
  pointer-events: none;
`;
