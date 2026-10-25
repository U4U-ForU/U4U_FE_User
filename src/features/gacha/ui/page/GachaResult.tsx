"use client";

import styled from "@emotion/styled";
import { useRef, useState, type PointerEvent } from "react";
import ItemModal from "@/src/entities/item/ui/ItemModal";
import SkipButton from "../SkipButton";
import ArrowButton from "../ArrowButton";
import Infomation from "../modal/Infomation";
import type { GachaItem } from "../../model/types";

interface GachaResultProps {
  items: GachaItem[];
  onFinish: () => void;
}

const MAX_STACKED_CARD = 2;
const SWIPE_THRESHOLD = 50;

const PLACEHOLDER_ITEMS: GachaItem[] = Array.from(
  { length: 3 },
  (_, index) => ({
    id: index,
    name: "아이템 이름",
    imageUrl: "/tempImg/tempItemImg.png",
    description:
      "푹신한 핑크빛 젤리가 콕 박힌 귀여운 냥이 장갑! 착용하면 냥냥 펀치의 파워가 업! 심쿵 주의 귀여움으로 적의 마음을 스르륵 녹여 공격력을 살짝 낮춰버려요.",
  }),
);

export default function GachaResult({ items, onFinish }: GachaResultProps) {
  const resultItems = items.length > 0 ? items : PLACEHOLDER_ITEMS;
  const [index, setIndex] = useState(0);
  const startXRef = useRef<number | null>(null);

  const currentItem = resultItems[index];
  const isFirst = index === 0;
  const isLast = index === resultItems.length - 1;
  const stackedCount = Math.min(
    resultItems.length - 1 - index,
    MAX_STACKED_CARD,
  );

  const goPrev = () => {
    if (isFirst) return;

    setIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (isLast) {
      onFinish();

      return;
    }

    setIndex((prev) => prev + 1);
  };

  const handlePointerDown = (event: PointerEvent) => {
    startXRef.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent) => {
    const startX = startXRef.current;

    startXRef.current = null;

    if (startX === null) return;

    const distance = event.clientX - startX;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;

    if (distance < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <Wrapper>
      <SkipArea>
        <SkipButton onClick={onFinish} />
      </SkipArea>

      <InfomationArea>
        <Infomation />
      </InfomationArea>

      <Deck>
        <ArrowButton
          direction="prev"
          label="이전 아이템 보기"
          onClick={goPrev}
          disabled={isFirst}
        />

        <CardArea
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            startXRef.current = null;
          }}
        >
          {Array.from({ length: stackedCount }, (_, stackIndex) => (
            <StackedCard key={stackIndex} $depth={stackedCount - stackIndex} />
          ))}

          <FrontCard>
            <ItemModal
              img={currentItem.imageUrl}
              itemName={currentItem.name}
              itemDescription={currentItem.description}
              ButtonText="다음"
              onClose={onFinish}
              onButtonClick={goNext}
              showCloseButton={false}
            />
          </FrontCard>
        </CardArea>

        <ArrowButton
          direction="next"
          label="다음 아이템 보기"
          onClick={goNext}
          disabled={isLast}
        />
      </Deck>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const SkipArea = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  margin: calc(15px + env(safe-area-inset-top) - 6px) 20px 0;
`;

const InfomationArea = styled.div`
  margin-top: 24px;
`;

const Deck = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 4px;
`;

const CardArea = styled.div`
  position: relative;
  width: 287px;
  height: 500px;
  flex-shrink: 0;
  touch-action: pan-y;
`;

const StackedCard = styled.div<{ $depth: number }>`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 2px solid var(--pink-p1, #ffe7e7);
  background: #fff;
  opacity: ${({ $depth }) => 1 - $depth * 0.15};
`;

const FrontCard = styled.div`
  position: relative;
  z-index: 1;
  transform: rotate(3deg);
`;
