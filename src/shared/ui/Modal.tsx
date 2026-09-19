"use client";

import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Backdrop>
      <Content role="dialog" aria-modal="true">
        {children}
      </Content>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

const Content = styled.div`
  position: relative;

  &:focus {
    outline: none;
  }
`;
