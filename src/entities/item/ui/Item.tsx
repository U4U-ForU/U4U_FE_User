import Image from "next/image";
import styled from "@emotion/styled";
import ItemCountBadge from "./ItemCountBadge";

interface ItemProps {
  itemName: string;
  itemCount?: number;
  onClick: () => void;
}

export default function Item({ itemName, itemCount, onClick }: ItemProps) {
  return (
    <Wrapper type="button" onClick={onClick}>
      <TopWrapper>
        {itemCount ? <OverlapBadge count={itemCount} /> : ""}
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

const OverlapBadge = styled(ItemCountBadge)`
  position: absolute;
  top: -12px;
  left: 0;
  transform: translateX(-50%);
`;

const Wrapper = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  flex-direction: column;
  margin: 12px 12px 24px 12px;
  align-self: flex-start;
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
