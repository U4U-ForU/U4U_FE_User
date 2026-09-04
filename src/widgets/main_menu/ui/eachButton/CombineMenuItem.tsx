import styled from "@emotion/styled";
import Image from "next/image";
import LeftBubble from "../bgBubble/LeftBubble";

export default function CombineMenuItem() {
  return (
    <Bubble>
      조합
      <SmallStar src="/img/littlestar2.svg" alt="" width={14} height={15} />
    </Bubble>
  );
}

const Bubble = styled(LeftBubble)`
  justify-self: start;
  margin-left: 24.5px;
`;

const SmallStar = styled(Image)`
  position: absolute;
  top: 39px;
  right: -3px;
`;
