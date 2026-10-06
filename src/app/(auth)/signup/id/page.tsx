"use client";

import styled from "@emotion/styled";
import { useState, type FormEvent } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import { validateId } from "@/src/shared/lib/validate";
import { useSignupSubmit } from "@/src/features/signup/model/useSignupSubmit";

export default function IdPage() {
  const [id, setId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submit, isSubmitting, error, resetError } = useSignupSubmit();

  const errorMessage = (isSubmitted ? validateId(id) : "") || error;

  const handleChange = (value: string) => {
    setId(value);

    if (error !== "") resetError();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validateId(id) !== "") return;

    submit(id);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title text="로그인 시 사용될" />
      <Title text="아이디를 입력해주세요" />
      <Field>
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요"
          autoComplete="username"
          value={id}
          onChange={handleChange}
        />
        <Requirement informationText="영문, 숫자 조합 4~20자 이내" />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          type="submit"
          text={isSubmitting ? "가입 중" : "가입하기"}
          fontColor="#FFF"
          backgroundColor="#FFD3D3"
          borderColor="#DFAFAF"
          boxShadow={false}
          fontBorderColor="#C57373"
          disabled={isSubmitting}
        />
        <Question text="회원가입" />
      </BottomArea>
    </Wrapper>
  );
}

const Wrapper = styled.form`
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
