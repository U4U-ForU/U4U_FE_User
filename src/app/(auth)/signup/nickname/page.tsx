"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import { validateNickname } from "@/src/shared/lib/validate";
import { useSignupContext } from "@/src/features/signup/model/SignupContext";

export default function NicknamePage() {
  const router = useRouter();
  const { data, save } = useSignupContext();
  const [nickname, setNickname] = useState(data.nickname);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateNickname(nickname) : "";

  const handleChange = (value: string) => {
    setNickname(value);

    if (data.nickname !== "") save({ nickname: "" });
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validateNickname(nickname) !== "") return;

    save({ nickname });
    router.push("/signup/id");
  };

  return (
    <Wrapper onSubmit={handleNext}>
      <Title text="서비스에서 사용할" />
      <Title text="닉네임을 입력해주세요" />
      <Field>
        <Input
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          autoComplete="nickname"
          value={nickname}
          onChange={handleChange}
        />
        <Requirement informationText="2자 이상 20자 이하" />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          type="submit"
          text="다음"
          fontColor="#FFF"
          backgroundColor="#FFD3D3"
          borderColor="#DFAFAF"
          boxShadow={false}
          fontBorderColor="#C57373"
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
