import Image from "next/image";
import styled from "@emotion/styled";

export default function DealItem() {
  return (
    <Wrapper type="button">
      <Image
        src="/tempImg/tempItemImg.png"
        width={50}
        height={50}
        alt="아이템 이미지"
      />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  padding: 0;
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
