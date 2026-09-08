"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "password";
}

export default function Input({ placeholder, type = "text" }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setIsVisible((previous) => !previous);
  };

  return (
    <Wrapper>
      <Field
        type={isPassword && !isVisible ? "password" : "text"}
        placeholder={placeholder}
        autoComplete={isPassword ? "current-password" : undefined}
      />
      {isPassword && (
        <VisibilityButton
          type="button"
          aria-label={isVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
          aria-pressed={isVisible}
          onClick={togglePasswordVisibility}
        >
          <Image
            src={
              isVisible
                ? "/img/icon/action/eye_visibility.png"
                : "/img/icon/action/Vector.png"
            }
            alt=""
            width={isVisible ? 20 : 18}
            height={isVisible ? 20 : 16}
            aria-hidden="true"
          />
        </VisibilityButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  padding: 0 var(--number-16, 16px);
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: var(--number-6, 6px);
  background: var(--color-gray-0, #fff);
`;

const Field = styled.input`
  min-width: 0;
  height: 100%;
  flex: 1;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  box-shadow: none;
  appearance: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

const VisibilityButton = styled.button`
  display: grid;
  width: 32px;
  height: 32px;
  padding: 0;
  flex: 0 0 32px;
  place-items: center end;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
