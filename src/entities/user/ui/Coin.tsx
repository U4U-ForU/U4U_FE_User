import styled from "@emotion/styled";
import Image from "next/image";

interface CoinProps {
  coin: number;
}

export default function Coin({ coin }: CoinProps) {
  return (
    <Wrapper>
      <Star src="/img/star.svg" alt="" width={36} height={36} />
      <CoinWrapper>
        <TotalCoin>{formatCoin(coin)}</TotalCoin>
      </CoinWrapper>
    </Wrapper>
  );
}

function formatCoin(coin: number) {
  if (coin < 1000) return coin.toString();

  const thousands = Number((coin / 1_000).toFixed(1));
  return `${thousands}k`;
}

const Star = styled(Image)`
  flex-shrink: 0;
  aspect-ratio: 1;
  transform: rotate(-7deg);
  position: absolute;
  left: 0;
  top: 3px;
`;

const CoinWrapper = styled.div`
  display: flex;
  padding: 4px 16px 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 9999px;
  border: 2px solid var(--brown-b1, #c9b4a9);
  background: #fff;
  width: 85px;
  height: 36px;
`;

const TotalCoin = styled.div`
  color: var(--brown-b3, #6f5e4c);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 14px;
`;
