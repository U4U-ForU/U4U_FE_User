import styled from "@emotion/styled";

const STATUS_ICONS: Record<string, string> = {
  승인거절: "/submitStatus/reject.png",
  "조합아이템 승인": "/submitStatus/comSuccess.png",
  승인완료: "/submitStatus/success.png",
};

const STATUS_BACKGROUNDS: Record<string, string> = {
  승인거절: "#E54D4D",
  "조합아이템 승인": "#50B4DC",
  승인완료: "#20AF61",
};

interface SubmitItemProps {
  status: string;
  itemName: string;
}

export default function SubmitItem({ status, itemName }: SubmitItemProps) {
  const icon = STATUS_ICONS[status];

  return (
    <Wrapper>
      <Status $background={STATUS_BACKGROUNDS[status]}>
        {icon && <StatusIcon src={icon} alt="" />}
        {status}
      </Status>
      <Img src="/tempImg/tempItemImg.png"></Img>
      <ItemName>{itemName}</ItemName>
    </Wrapper>
  );
}

const StatusIcon = styled.img`
  flex-shrink: 0;
  max-width: none;
`;

const Status = styled.div<{ $background?: string }>`
  display: flex;
  padding: 4px var(--space-8, 8px);
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--color-gray-0, #fff);
  font-family: Pretendard;
  font-size: var(--typo-body-xsmaill, 12px);
  font-style: normal;
  width: fit-content;
  font-weight: 600;
  line-height: 150%; /* 18px */
  border-radius: var(--radius-full, 999999px);
  border: 1px solid var(--color-gray-0, #fff);
  background: ${({ $background }) =>
    $background ?? "var(--color-gray-600, #868e96)"};
  margin-bottom: -16px;
  margin-left: -12px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 197px;
  margin: 0px 12px;
`;

const Img = styled.img`
  display: flex;
  height: 136px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  aspect-ratio: 1/1;
`;

const ItemName = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  height: 28.8px; /* 2줄 고정: 14.4px * 2 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--brown-b3, #6f5e4c);
  text-align: center;
  text-overflow: ellipsis;
  word-break: keep-all;
  overflow-wrap: anywhere;
  font-family: "Cafe24 Ssurround";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 14.4px */
  width: 136px;
  margin-top: 7px;
`;
