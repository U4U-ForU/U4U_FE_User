import styled from "@emotion/styled";

interface MainMenuProps {
  text: "제출" | "조합" | "인벤" | "뽑기";
}

export default function MainMenu({ text }: MainMenuProps) {
  const backgroundImage =
    text === "제출" || text === "인벤"
      ? "/img/BubbleBoxRight.svg"
      : "/img/BubbleBoxLeft.svg";

  return (
    <Wrapper style={{ backgroundImage: `url("${backgroundImage}")` }}>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: rgba(255, 255, 255, 0.8);
  stroke: var(--brown-b3, #6f5e4c);
  width: 95px;
  height: 75px;
  padding-bottom: 20px;
`;

const Text = styled.div`
  color: var(--brown-b3, #6f5e4c);
  font-family: "Cafe24 Ssurround";
  font-size: 20px;
  font-style: normal;
  line-height: 1.3;
  white-space: nowrap;
`;
