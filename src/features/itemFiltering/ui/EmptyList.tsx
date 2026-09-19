import styled from "@emotion/styled";

interface EmptyListProps {
  text: string;
}

export default function EmptyList({ text }: EmptyListProps) {
  return <Text>{text}</Text>;
}

const Text = styled.p`
  position: fixed;
  inset: 0;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  color: var(--color-gray-600, #868e96);
  text-align: center;
  white-space: pre-line;

  font-family: Pretendard;
  font-size: var(--typo-body-medium, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
