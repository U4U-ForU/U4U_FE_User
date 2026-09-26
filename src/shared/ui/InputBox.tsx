"use client";

import styled from "@emotion/styled";
import { useState } from "react";

interface InputBoxProps {
  placeholder: string;
  height: number;
  maxLength: number;
}

export default function InputBox({
  placeholder,
  height,
  maxLength,
}: InputBoxProps) {
  const [length, setLength] = useState(0);

  return (
    <Wrapper>
      <Field
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => setLength(event.target.value.length)}
        $height={height}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Field = styled.textarea<{ $height: number }>`
  outline: none;
  border: none;
  width: 100%;
  height: ${({ $height }) => $height}px;
  padding: 12px var(--number-16, 16px);
  border-radius: var(--number-6, 6px);
  background: var(--color-gray-0, #fff);
  resize: none;
  overflow-y: auto;
  font-family: Pretendard;
  font-size: var(--typo-body-medium, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
