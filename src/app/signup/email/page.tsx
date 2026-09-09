"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Title from "@/src/features/signup/ui/Title";
import { validateEmail } from "@/src/features/signup/model/validate";
import { useSignupStore } from "@/src/features/signup/model/signupStore";

export default function EmailPage() {
  const router = useRouter();
  const email = useSignupStore((state) => state.form.email);
  const setField = useSignupStore((state) => state.setField);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateEmail(email) : "";

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateEmail(email) !== "") return;

    router.push("/signup/password");
  };

  return (
    <Wrapper>
      <Title text="이메일을" />
      <Title text="입력해주세요" />
      <Field>
        <Input
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(value) => setField("email", value)}
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
