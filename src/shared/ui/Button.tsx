"use client";

import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderColor?: string;
  fontBorderColor?: string;
  boxShadow?: boolean;
}

export default function Button({
  text,
  fontColor,
  backgroundColor,
  borderColor,
  fontBorderColor,
  boxShadow = true,
}: ButtonProps) {
  return (
    <Wrapper
      type="button"
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $boxShadow={boxShadow}
    >
      <Text $fontColor={fontColor} $fontBorderColor={fontBorderColor}>
        {text}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  $backgroundColor: string;
  $borderColor?: string;
  $boxShadow?: boolean;
}>`
  display: flex;
  width: min(353px, calc(100% - 32px));
  height: 64px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow
      ? "0 4px 6px 0 var(--color-opacity-black-15, rgba(0, 0, 0, 0.15))"
      : "none"};
`;

const Text = styled.span<{
  $fontColor: string;
  $fontBorderColor?: string;
}>`
  font-family: "Cafe24 Ssurround", sans-serif;
  color: ${({ $fontColor }) => $fontColor};
  -webkit-text-stroke: ${({ $fontBorderColor }) =>
    $fontBorderColor ? `4px ${$fontBorderColor}` : "0"};
  paint-order: stroke fill;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;
