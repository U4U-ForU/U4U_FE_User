"use client";

import styled from "@emotion/styled";
import { useState, type FormEvent } from "react";
import Button from "@/src/shared/ui/Button";
import BottomArea from "@/src/features/signup/ui/BottomArea";
import ErrorMessage from "@/src/features/signup/ui/ErrorMessage";
import Input from "@/src/features/signup/ui/Input";
import Question from "@/src/features/signup/ui/Question";
import Title from "@/src/features/signup/ui/Title";
import { validateId, validatePassword } from "@/src/shared/lib/validate";
import { useLoginSubmit } from "@/src/features/login/model/useLoginSubmit";

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submit, isSubmitting, error, resetError } = useLoginSubmit();

  const errorMessage =
    (isSubmitted ? validateId(loginId) || validatePassword(password) : "") ||
    error;

  const handleChange = (setValue: (value: string) => void) => {
    return (value: string) => {
      setValue(value);

      if (error !== "") resetError();
    };
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validateId(loginId) !== "") return;
    if (validatePassword(password) !== "") return;

    submit({ loginId, password });
  };

  return (
    <Wrapper onSubmit={handleLogin}>
      <TitleWrapper>
        <Title text="로그인" />
      </TitleWrapper>
      <Field>
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요."
          autoComplete="username"
          value={loginId}
          onChange={handleChange(setLoginId)}
        />
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange(setPassword)}
        />
        <ErrorMessage text={errorMessage} />
      </Field>
      <BottomArea>
        <Button
          type="submit"
          text={isSubmitting ? "로그인 중" : "로그인"}
          fontColor="#FFF"
          backgroundColor="#FFD3D3"
          borderColor="#DFAFAF"
          boxShadow={false}
          fontBorderColor="#C57373"
          disabled={isSubmitting}
        />
        <Question text="로그인" />
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
