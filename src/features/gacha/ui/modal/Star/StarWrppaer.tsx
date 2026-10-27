import styled from "@emotion/styled";
import Image from "next/image";
import Star from "./Star";
import { useUserStarStore } from "@/src/entities/user/model/useUserStarStore";
import {
  GACHA_DRAW_COST,
  type GachaDrawCount,
} from "@/src/features/gacha/model/types";

interface StarWrppaerProps {
  drawCount: GachaDrawCount;
}

export default function StarWrppaer({ drawCount }: StarWrppaerProps) {
  const starCount = useUserStarStore((state) => state.starCount);
  const drawCost = GACHA_DRAW_COST[drawCount];

  return (
    <StarWrapper>
      <Star
        state="before"
        count={starCount}
        fontColor="#8E8889"
        backgroundColor="#E0DDDD"
        boxShadow={false}
        borderColor="#D0CCCC"
      />
      <Image src={"/img/Gacha/arrow.svg"} width={12} height={10} alt="화살표" />
      <Star
        state="after"
        count={Math.max(starCount - drawCost, 0)}
        fontColor="#A75959"
        backgroundColor="#FFE7E7"
        boxShadow={false}
        borderColor="#DFAFAF"
      />
    </StarWrapper>
  );
}

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
