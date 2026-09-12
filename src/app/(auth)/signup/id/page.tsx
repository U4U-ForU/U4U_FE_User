"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Requirement from "@/src/features/signup/ui/Requirement";
import Title from "@/src/features/signup/ui/Title";
import { validateId } from "@/src/features/signup/model/validate";
import { useSignupStore } from "@/src/features/signup/model/signupStore";
import { useRouter } from "next/navigation";

export default function IdPage() {
  const id = useSignupStore((state) => state.form.id);
  const setField = useSignupStore((state) => state.setField);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const errorMessage = isSubmitted ? validateId(id) : "";

  const handleSubmit = async () => {
    setIsSubmitted(true);

    if (isSubmitting) return;
    if (validateId(id) !== "") return;

    setIsSubmitting(true);

    //회원가입 api 성공 시
    router.push("/login");
  };

  return (
    <Wrapper>
      <Title text="로그인 시 사용될" />
      <Title text="아이디를 입력해주세요" />
      <Field>
        <Input
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(value) => setField("id", value)}
        />
        <Requirement informationText="영문, 숫자 조합 4~20자 이내" />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          text={isSubmitting ? "가입 중" : "가입하기"}
          fontColor="#FFF"
          backgroundColor="#FFD3D3"
          borderColor="#DFAFAF"
          boxShadow={false}
          fontBorderColor="#C57373"
          onClick={handleSubmit}
          disabled={isSubmitting}
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
