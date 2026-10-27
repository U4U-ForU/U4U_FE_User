import Image from "next/image";
import styled from "@emotion/styled";

interface GachaItemProps {
  itemName: string;
  imageUrl: string;
  onClick: () => void;
}

export default function GachaItem({
  itemName,
  imageUrl,
  onClick,
}: GachaItemProps) {
  return (
    <Wrapper type="button" onClick={onClick}>
      <Image src={imageUrl} width={50} height={50} alt="아이템 이미지" />
      <ItemName>{itemName}</ItemName>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const ItemName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 59px;
  margin-top: 7px;
  overflow: hidden;
  color: var(--brown-b3, #6f5e4c);
  text-align: center;
  font-family: "Cafe24 Ssurround";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  word-break: break-all;
`;
