"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Title from "@/src/features/signup/ui/Title";
import { validateEmail } from "@/src/shared/lib/validate";
import { useSignupContext } from "@/src/features/signup/model/SignupContext";

export default function EmailPage() {
  const router = useRouter();
  const { data, save } = useSignupContext();
  const [email, setEmail] = useState(data.email);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateEmail(email) : "";

  const handleChange = (value: string) => {
    setEmail(value);

    if (data.email !== "") save({ email: "" });
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validateEmail(email) !== "") return;

    save({ email });
    router.push("/signup/password");
  };

  return (
    <Wrapper onSubmit={handleNext}>
      <Title text="이메일을" />
      <Title text="입력해주세요" />
      <Field>
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요."
          autoComplete="email"
          value={email}
          onChange={handleChange}
        />
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
