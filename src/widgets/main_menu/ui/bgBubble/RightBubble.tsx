import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface RightBubbleProps {
  children: ReactNode;
  className?: string;
}

export default function RightBubble({ children, className }: RightBubbleProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 95px;
  height: 75px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  background-image: url("/img/BubbleBoxRight.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: var(--brown-b3, #6f5e4c);
  font-family: "Cafe24 Ssurround";
  font-size: 20px;
`;
