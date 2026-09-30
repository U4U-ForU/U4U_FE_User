import SubmitItem from "./SubmitItem";
import styled from "@emotion/styled";

export default function SubmitItemList() {
  return (
    <Wrapper>
      <SubmitItem status="미승인" itemName="앙녕핫세요" />
      <SubmitItem
        status="승인거절"
        itemName="앙녕핫세요앙녕핫세 요앙녕핫세요"
      />
      <SubmitItem status="조합아이템 승인" itemName="앙녕핫세요 앙녕핫세요" />
      <SubmitItem
        status="승인완료"
        itemName="앙녕핫세요앙녕핫세요앙녕핫세요앙녕핫세요앙녕핫세요"
      />
      <SubmitItem status="미승인" itemName="앙녕핫세요" />
      <SubmitItem
        status="승인거절"
        itemName="앙녕핫세요앙녕핫세 요앙녕핫세요"
      />
      <SubmitItem status="조합아이템 승인" itemName="앙녕핫세요 앙녕핫세요" />
      <SubmitItem
        status="승인완료"
        itemName="앙녕핫세요앙녕핫세요앙녕핫세요앙녕핫세요앙녕핫세요"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 160px);
  justify-items: center;
  column-gap: 4px;
  row-gap: 20.8px;
  padding: var(--space-12, 12px) 6px calc(100px + env(safe-area-inset-bottom));
  margin: 0 var(--space-20, 20px);
  justify-content: center;
  align-items: flex-start;
  border-radius: var(--radius-md, 12px) var(--radius-md, 12px) 0 0;
  background: rgba(255, 255, 255, 0.55);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;
