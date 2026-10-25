import styled from "@emotion/styled";

export default function Infomation() {
  return (
    <Wrapper>
      <Text>
        {"다음을 누르거나 양쪽으로 스와이프하여\n아이템을 확인하세요!"}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 353px;
  padding: var(--space-16, 16px) var(--space-32, 32px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-md, 12px);
  border: 1px solid var(--color-gray-0, #fff);
  background: var(--color-opacity-white-55, rgba(255, 255, 255, 0.55));
  white-space: pre-line;
`;

const Text = styled.div`
  color: var(--gray-600, #8e8889);
  text-align: center;
  /* body/body-xsmall */
  font-family: Pretendard;
  font-size: var(--typo-body-xsmaill, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;
