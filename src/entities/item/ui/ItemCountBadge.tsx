"use client";

import styled from "@emotion/styled";

interface ItemCountBadgeProps {
  count: number;
  className?: string;
}

function formatCount(count: number) {
  if (count < 1000) return String(count);

  if (count >= 10000) return `${Math.floor(count / 1000)}k`;

  return `${Math.floor(count / 100) / 10}k`;
}

export default function ItemCountBadge({
  count,
  className,
}: ItemCountBadgeProps) {
  return <Badge className={className}>{formatCount(count)}</Badge>;
}

const Badge = styled.div`
  display: flex;
  padding: 2px var(--space-12, 12px);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-full, 999999px);
  border: 1px solid var(--pink-p3, #dfafaf);
  background: var(--pink-p2, #ffd0d0);
  color: var(--brown-b3, #6f5e4c);
  min-width: 40px;
  font-variant-numeric: tabular-nums;
  font-family: Pretendard;
  font-size: var(--typo-body-xsmaill, 12px);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
