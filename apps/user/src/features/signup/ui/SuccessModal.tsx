"use client";

import styled from "@emotion/styled";
import Button from "@/src/shared/ui/Button";

interface SuccessModalProps {
  onConfirm: () => void;
}

export default function SuccessModal({ onConfirm }: SuccessModalProps) {
  return (
    <Wrapper>
      <Text>회원가입에 성공했습니다</Text>
      <ConfirmButton
        text="확인"
        fontColor="#FFF"
        backgroundColor="#FFD3D3"
        borderColor="#DFAFAF"
        fontBorderColor="#C57373"
        boxShadow={false}
        onClick={onConfirm}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 287px;
  padding: 32px 24px 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 2px solid var(--pink-p1, #ffe7e7);
  background: #fff;
`;

const Text = styled.p`
  margin: 0;
  color: var(--brown-b3, #6f5e4c);
  text-align: center;
  font-family: "Cafe24 Ssurround";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const ConfirmButton = styled(Button)`
  && {
    width: 100%;
    height: 56px;
  }
`;
