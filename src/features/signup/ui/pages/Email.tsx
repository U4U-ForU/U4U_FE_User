"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Title from "@/src/features/signup/ui/Title";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import { validateEmail } from "@/src/features/signup/model/validate";

interface EmailProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function Email({ value, onChange, onNext }: EmailProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateEmail(value) : "";

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateEmail(value) !== "") return;

    onNext();
  };

  return (
    <Wrapper>
      <Title text="이메일을" />
      <Title text="입력해주세요" />
      <Field>
        <Input
          placeholder="이메일을 입력해주세요."
          value={value}
          onChange={onChange}
        />
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
