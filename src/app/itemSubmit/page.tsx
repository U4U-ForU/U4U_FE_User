"use client";

import Header from "@/src/shared/ui/Header";
import InputBox from "@/src/shared/ui/InputBox";
import ImageUploadBox from "@/src/shared/ui/ImgUploadBox";
import Button from "@/src/shared/ui/Button";
import styled from "@emotion/styled";

export default function ItemSubmit() {
  return (
    <Wrapper>
      <Header title="아이템 제출" />
      <UploadArea>
        <ImageUploadBox />
      </UploadArea>
      <InputWrapper>
        <InputBox
          placeholder="아이템 이름을 입력해주세요"
          height={48}
          maxLength={15}
        />
        <InputBox
          placeholder="아이템 설명을 입력해주세요"
          height={160}
          maxLength={200}
        />
      </InputWrapper>
      <Button
        text="아이템 제출"
        fontColor="white"
        fontBorderColor="#A75959"
        backgroundColor="#FFD0D0"
        borderColor="#DFAFAF"
        boxShadow={false}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UploadArea = styled.div`
  margin-top: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 353px;
  flex-direction: column;
  gap: var(--space-16, 16px);
  margin-bottom: 39px;
`;
