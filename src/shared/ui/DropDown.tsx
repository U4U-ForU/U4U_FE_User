"use client";

import styled from "@emotion/styled";
import { useState } from "react";

const OPTIONS = ["전체", "미승인", "승인거절", "조합아이템 승인", "승인완료"];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("전체");

  return (
    <Wrapper>
      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Option>{selected}</Option>
        <Icon>
          <img src="/img/dropdown/icon/UI_actions/Vector.svg" alt="" />
        </Icon>
      </Trigger>

      {isOpen && (
        <List role="listbox">
          {OPTIONS.map((option) => (
            <Item
              key={option}
              type="button"
              role="option"
              aria-selected={selected === option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  min-width: 131px;
`;

const Trigger = styled.button`
  display: flex;
  padding: 8px 12px 8px 20px;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--radius-md, 12px);
  border: 2px solid var(--color-gray-500, #adb5bd);
  background: #fff;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const Option = styled.div`
  color: var(--color-gray-700, #495057);
  text-align: center;
  white-space: nowrap;
  font-family: "Cafe24 Ssurround";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

const Icon = styled.div``;

const List = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  width: max-content;
  border-radius: var(--radius-md, 12px);
  border: 2px solid var(--color-gray-500, #adb5bd);
  background: #fff;
  overflow: hidden;
`;

const Item = styled.button`
  border: none;
  background: #fff;
  color: var(--color-gray-700, #495057);
  text-align: left;
  white-space: nowrap;
  font-family: "Cafe24 Ssurround";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  cursor: pointer;
  display: flex;
  padding: var(--space-8, 8px) var(--space-20, 20px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;
