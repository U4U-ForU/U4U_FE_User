"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import {
  validatePassword,
  validatePasswordConfirm,
} from "@/src/features/signup/model/validate";
import { useSignupStore } from "@/src/features/signup/model/signupStore";

export default function PasswordPage() {
  const router = useRouter();
  const password = useSignupStore((state) => state.form.password);
  const passwordConfirm = useSignupStore((state) => state.form.passwordConfirm);
  const setField = useSignupStore((state) => state.setField);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = (() => {
    const isMismatched = passwordConfirm !== "" && password !== passwordConfirm;

    if (isMismatched) return validatePasswordConfirm(password, passwordConfirm);

    if (!isSubmitted) return "";

    return (
      validatePassword(password) ||
      validatePasswordConfirm(password, passwordConfirm)
    );
  })();

  const handleNext = () => {
    setIsSubmitted(true);

    if (validatePassword(password) !== "") return;
    if (validatePasswordConfirm(password, passwordConfirm) !== "") return;

    router.push("/signup/nickname");
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
            value={password}
            onChange={(value) => setField("password", value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={passwordConfirm}
            onChange={(value) => setField("passwordConfirm", value)}
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
