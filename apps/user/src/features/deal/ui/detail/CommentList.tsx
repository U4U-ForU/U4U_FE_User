import styled from "@emotion/styled";
import Comment from "./Comment";
import type { DealComment } from "../../model/detail/types";

interface CommentListProps {
  comments: DealComment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) return null;

  return (
    <Wrapper>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          nickname={comment.nickname}
          itemCount={comment.itemCount}
          isMine={comment.isMine}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 12px;
  margin-top: 20px;
`;
