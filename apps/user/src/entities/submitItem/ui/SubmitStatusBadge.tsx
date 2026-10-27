"use client";

import styled from "@emotion/styled";
import { STATUS_BACKGROUNDS, STATUS_ICONS } from "../model/status";
import type { SubmitStatus } from "../model/types";

interface SubmitStatusBadgeProps {
  status: SubmitStatus;
  className?: string;
}

export default function SubmitStatusBadge({
  status,
  className,
}: SubmitStatusBadgeProps) {
  const icon = STATUS_ICONS[status];

  return (
    <Wrapper className={className} $background={STATUS_BACKGROUNDS[status]}>
      {icon && <Icon src={icon} alt="" />}
      {status}
    </Wrapper>
  );
}

const Icon = styled.img`
  flex-shrink: 0;
  max-width: none;
`;

const Wrapper = styled.div<{ $background?: string }>`
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
`;
