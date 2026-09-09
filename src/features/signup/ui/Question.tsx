"use client";

import styled from "@emotion/styled";

interface QuestionProps {
  text: "회원가입" | "로그인";
}

export default function Question({ text }: QuestionProps) {
  return (
    <>
      <Wrapper>
        {text === "회원가입" ? (
          <Q>계정이 있으신가요?</Q>
        ) : (
          <Q>계정이 없으신가요?</Q>
        )}

        {/* 로그인/회원가입 페이지 이동 라우터 연결 */}
        <Button type="button">
          {text === "회원가입" ? "로그인" : "회원가입"}
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Q = styled.div`
  color: var(--color-gray-600, #868e96);
  text-align: center;
  font-family: Pretendard;
  font-size: var(--typo-body-small, 14px);
  font-weight: 400;
  line-height: 150%;
`;

const Button = styled.button`
  color: var(--color-gray-600, #868e96);
  font-family: Pretendard;
  font-size: var(--typo-body-small, 14px);
  font-weight: 600;
  line-height: 150%;

  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
