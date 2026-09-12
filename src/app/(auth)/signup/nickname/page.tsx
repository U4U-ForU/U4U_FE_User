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
import { validateNickname } from "@/src/features/signup/model/validate";
import { useSignupStore } from "@/src/features/signup/model/signupStore";

export default function NicknamePage() {
  const router = useRouter();
  const nickname = useSignupStore((state) => state.form.nickname);
  const setField = useSignupStore((state) => state.setField);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = isSubmitted ? validateNickname(nickname) : "";

  const handleNext = () => {
    setIsSubmitted(true);

    if (validateNickname(nickname) !== "") return;

    router.push("/signup/id");
  };

  return (
    <Wrapper>
      <Title text="서비스에서 사용할" />
      <Title text="닉네임을 입력해주세요" />
      <Field>
        <Input
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={(value) => setField("nickname", value)}
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
