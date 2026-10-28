"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import DealItemList from "../item/DealItemList";
import Modal from "@/src/shared/ui/modal/Modal";

interface CommentProps {
  nickname: string;
  itemCount: number;
  isMine: boolean;
  onDelete: () => void;
}

export default function Comment({
  nickname,
  itemCount,
  isMine,
  onDelete,
}: CommentProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <Wrapper>
      <Top>
        <Username>{nickname}</Username>
        {isMine && (
          <Delete type="button" onClick={() => setIsDeleteOpen(true)}>
            삭제
          </Delete>
        )}
      </Top>
      <DealItemList itemCount={itemCount} showAll itemSize={44} />

      <Modal
        title="댓글 삭제"
        text="정말 댓글을 삭제하시겠습니까?"
        text2="삭제한 댓글은 복구할 수 없습니다."
        type="warn"
        isOpen={isDeleteOpen}
        onCancel={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          setIsDeleteOpen(false);
          onDelete();
        }}
      />
    </Wrapper>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Delete = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  color: var(--color-sys-error, #e54d4d);

  /* body/body-medium */
  font-family: Pretendard;
  font-size: var(--typo-body-medium, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Username = styled.div`
  color: var(--color-gray-1000, #000);

  /* body/body-medium */
  font-family: Pretendard;
  font-size: var(--typo-body-medium, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Wrapper = styled.div`
  display: flex;
  padding: var(--space-12, 12px);
  flex-direction: column;
  align-items: flex-start;
  width: 316px;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--radius-sm, 6px);
  border: 1px solid var(--gray-400, #d0cccc);
  background: #fff;
`;
