"use client";

import styled from "@emotion/styled";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return <Wrapper type="text" placeholder={placeholder} />;
}

const Wrapper = styled.input`
  display: flex;
  height: 48px;
  padding: 0 var(--number-16, 16px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--number-6, 6px);
  background: var(--color-gray-0, #fff);
  border: none;
  outline: none;
  box-shadow: none;
  appearance: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
