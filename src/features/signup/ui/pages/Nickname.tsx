"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import Input from "@/src/features/signup/ui/Input";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import { validateNickname } from "@/src/features/signup/model/validate";
import Question from "../Question";

interface NicknameProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function Nickname({ value, onChange, onNext }: NicknameProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateNickname(value) : "";

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateNickname(value) !== "") return;

    onNext();
  };

  return (
    <Wrapper>
      <Title text="서비스에서 사용할" />
      <Title text="닉네임을 입력해주세요" />
      <Field>
        <Input
          placeholder="닉네임을 입력해주세요"
          value={value}
          onChange={onChange}
        />
        <Requirement informationText="영문·한글·숫자 2~20자 이내" />
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
