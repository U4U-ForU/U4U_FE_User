import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(24px + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  width: min(353px, calc(100% - 32px));
  height: 64px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid var(--pink-p3, #dfafaf);
  background: #fff;
`;

const Text = styled.div`
  font-family: "Cafe24 Ssurround", sans-serif;
  color: #ce8f8f;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;
