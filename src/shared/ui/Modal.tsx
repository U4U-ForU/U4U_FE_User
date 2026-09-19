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
      <Content>{children}</Content>
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
`;

const Content = styled.div`
  position: relative;
`;
