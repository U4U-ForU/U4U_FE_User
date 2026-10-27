"use client";

import styled from "@emotion/styled";

export default function AdminHome() {
  return (
    <Wrapper>
      <Title>U4U Admin</Title>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;
