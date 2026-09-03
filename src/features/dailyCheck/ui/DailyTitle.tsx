import styled from "@emotion/styled";

export default function DailyTitle() {
  return <Text>데일리 출석체크</Text>;
}

const Text = styled.div`
  color: var(--brown-b3, #6f5e4c);
  text-align: center;
  font-family: "Cafe24 Ssurround";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: -2px;
  margin-top: 3px;
`;
