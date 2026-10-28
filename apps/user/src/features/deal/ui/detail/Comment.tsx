import styled from "@emotion/styled";
import DealItemList from "../item/DealItemList";

interface CommentProps {
  nickname: string;
  itemCount: number;
  isMine: boolean;
}

export default function Comment({ nickname, itemCount, isMine }: CommentProps) {
  return (
    <Wrapper>
      <Top>
        <Username>{nickname}</Username>
        {isMine && <Delete type="button">삭제</Delete>}
      </Top>
      <DealItemList itemCount={itemCount} showAll itemSize={44} />
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
