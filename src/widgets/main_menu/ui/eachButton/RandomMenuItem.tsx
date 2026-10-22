"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GachaModal from "@/src/features/gacha/ui/modal/Modal";
import Modal from "@/src/shared/ui/Modal";
import LeftBubble from "../bgBubble/LeftBubble";

export default function RandomMenuItem() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Trigger type="button" onClick={() => setIsOpen(true)}>
        <Bubble>
          뽑기
          <Random src="/img/random.svg" alt="" width={37} height={37} />
          <SmallStar src="/img/littlestar.svg" alt="" width={14} height={15} />
        </Bubble>
      </Trigger>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GachaModal
          drawCount={10}
          onCancel={() => setIsOpen(false)}
          onConfirm={() => {
            setIsOpen(false);
            router.push("/gacha");
          }}
        />
      </Modal>
    </>
  );
}

const Trigger = styled.button`
  position: relative;
  justify-self: end;
  width: 95px;
  height: 75px;
  margin-right: 5px;
  padding: 0;
  transform: translateY(-6px);
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Bubble = styled(LeftBubble)`
  width: 100%;
  height: 100%;
`;

const Random = styled(Image)`
  position: absolute;
  top: -10px;
  right: -10px;
`;

const SmallStar = styled(Image)`
  position: absolute;
  top: 22px;
  right: -5px;
`;
