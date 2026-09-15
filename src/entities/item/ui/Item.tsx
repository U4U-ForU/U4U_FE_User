import Image from "next/image";
import styled from "@emotion/styled";

interface ItemProps {
  itemName: string;
  itemCount: number;
}

export default function Item({ itemName, itemCount }: ItemProps) {
  return (
    <Wrapper>
      <TopWrapper>
        <ItemCount>{itemCount}</ItemCount>
        <Image
          src={"/tempImg/tempItemImg.png"}
          width={58}
          height={58}
          alt="아이템 이미지"
        />
      </TopWrapper>
      <ItemName>{itemName}</ItemName>
    </Wrapper>
  );
}

const TopWrapper = styled.div`
  position: relative;
`;

const ItemCount = styled.div`
  display: flex;
  padding: 2px var(--space-12, 12px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-full, 999999px);
  border: 1px solid var(--pink-p3, #dfafaf);
  background: var(--pink-p2, #ffd0d0);
  color: var(--brown-b3, #6f5e4c);
  position: absolute;
  top: -12px;
  left: 0;
  transform: translateX(-50%);

  font-family: Pretendard;
  font-size: var(--typo-body-xsmaill, 12px);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.div`
  overflow: hidden;
  color: var(--brown-b3, #6f5e4c);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Cafe24 Ssurround";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  margin-top: 7px;
  width: 59px;
  overflow: hidden;
  text-align: center;
`;
