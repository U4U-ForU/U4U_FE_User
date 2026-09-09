"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import Input from "@/src/features/signup/ui/Input";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import {
  validatePassword,
  validatePasswordConfirm,
} from "@/src/features/signup/model/validate";
import Question from "../Question";

interface PasswordProps {
  value: string;
  onChange: (value: string) => void;
  confirmValue: string;
  onConfirmChange: (value: string) => void;
  onNext: () => void;
}

export default function Password({
  value,
  onChange,
  confirmValue,
  onConfirmChange,
  onNext,
}: PasswordProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = (() => {
    const isMismatched = confirmValue !== "" && value !== confirmValue;

    // 두 값이 다르면 형식에도 어긋났는지와 무관하게 불일치를 먼저 알린다.
    // 재입력을 시작한 뒤에는 다음을 누르기 전에도 바로 표시된다.
    if (isMismatched) return validatePasswordConfirm(value, confirmValue);

    if (!isSubmitted) return "";

    return (
      validatePassword(value) || validatePasswordConfirm(value, confirmValue)
    );
  })();

  const handleNext = () => {
    setIsSubmitted(true);

    if (validatePassword(value) !== "") return;
    if (validatePasswordConfirm(value, confirmValue) !== "") return;

    onNext();
  };

  return (
    <Wrapper>
      <Title text="비밀번호를" />
      <Title text="입력해주세요" />
      <Field>
        <Inputs>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={value}
            onChange={onChange}
          />
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={confirmValue}
            onChange={onConfirmChange}
          />
        </Inputs>
        <Requirement informationText="영문, 숫자, 특수문자를 포함하여 8~20자 이내" />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          text="다음"
          fontColor="#FFF"
          backgroundColor="#FFD3D3"
          borderColor="#DFAFAF"
          boxShadow={false}
          fontBorderColor="#C57373"
          onClick={handleNext}
        />
        <Question text="회원가입" />
      </BottomArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  margin-top: 36px;
  flex-direction: column;
  gap: 8px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
