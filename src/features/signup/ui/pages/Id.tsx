"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import Input from "@/src/features/signup/ui/Input";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import { validateId } from "@/src/features/signup/model/validate";
import Question from "../Question";

interface IdProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function Id({ value, onChange, onNext }: IdProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateId(value) : "";

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateId(value) !== "") return;

    onNext();
  };

  return (
    <Wrapper>
      <Title text="로그인 시 사용될" />
      <Title text="아이디를 입력해주세요" />
      <Field>
        <Input
          placeholder="아이디를 입력해주세요"
          value={value}
          onChange={onChange}
        />
        <Requirement informationText="영문, 숫자 조합 4~20자 이내" />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          text="가입하기"
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
