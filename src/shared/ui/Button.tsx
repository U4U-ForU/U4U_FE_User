import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderColor?: string;
}

export default function Button({
  text,
  fontColor,
  backgroundColor,
  borderColor,
}: ButtonProps) {
  return (
    <Wrapper
      type="button"
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
    >
      <Text $fontColor={fontColor}>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  $backgroundColor: string;
  $borderColor?: string;
}>`
  position: fixed;
  left: 50%;
  bottom: calc(24px + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  width: min(353px, calc(100% - 32px));
  height: 64px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${({ $borderColor }) => $borderColor ?? "transparent"};
  background: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;
`;

const Text = styled.span<{ $fontColor: string }>`
  font-family: "Cafe24 Ssurround", sans-serif;
  color: ${({ $fontColor }) => $fontColor};
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;
