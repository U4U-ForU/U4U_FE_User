import styled from "@emotion/styled";
import Image from "next/image";

interface ProfileHeaderProps {
  title: string;
  onBackPress?: () => void;
}

export default function ProfileHeader({
  title,
  onBackPress,
}: ProfileHeaderProps) {
  return (
    <Top>
      <Image
        src={"/backicon/arrow.png"}
        width={24}
        height={24}
        alt="뒤로가기"
      />
      <Title>{title}</Title>
    </Top>
  );
}

const Top = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin: calc(15px + env(safe-area-inset-top)) 20px 0;
`;

const Title = styled.p`
  position: absolute;
  left: 0;
  right: 0;

  color: var(--brown-b3, #6f5e4c);
  text-align: center;
  font-family: "Cafe24 Ssurround";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
