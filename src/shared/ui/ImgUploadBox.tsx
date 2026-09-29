"use client";

import styled from "@emotion/styled";
import { useRef, useState, type ChangeEvent } from "react";

export default function ImageUploadBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      <Box type="button" onClick={() => inputRef.current?.click()}>
        {previewUrl ? (
          <Preview src={previewUrl} alt="선택한 이미지" />
        ) : (
          <>
            <PlusIcon
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 6V26M6 16H26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </PlusIcon>
            <Label>클릭하여 이미지 추가</Label>
          </>
        )}
      </Box>
      <Notice>투명배경 + 1:1 비율의 PNG파일만 접수 가능합니다.</Notice>
      <HiddenInput
        ref={inputRef}
        type="file"
        accept="image/png"
        onChange={handleSelect}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Notice = styled.div`
  color: var(--color-gray-600, #868e96);
  text-align: center;
  margin-bottom: 16px;

  /* body/body-xsmall */
  font-family: Pretendard;
  font-size: var(--typo-body-xsmaill, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

const Box = styled.button`
  display: flex;
  width: 240px;
  height: 240px;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  border: 2px dashed var(--color-gray-500, #adb5bd);
  border-radius: var(--radius-md, 12px);
  background: var(--color-gray-0, #fff);
  color: var(--color-gray-600, #868e96);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const PlusIcon = styled.svg`
  flex-shrink: 0;
  width: 24px;
`;

const Label = styled.span`
  color: var(--color-gray-600, #868e96);
  text-align: center;
  font-family: "Cafe24 Ssurround";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;

const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HiddenInput = styled.input`
  display: none;
`;
