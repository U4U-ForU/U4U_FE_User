import { useState } from "react";
import FilterBoxList from "./FilterBoxList";
import EmptyList from "@/src/shared/ui/EmptyList";
import DealItemList from "../item/DealItemList";
import type { DealFilter, DealItem } from "../../model/list/types";

const EMPTY_MESSAGE: Record<DealFilter, string> = {
  전체: "거래 중인 아이템이 없습니다.",
  "내 글": "작성한 글이 없습니다.",
  "내 댓글": "작성한 댓글이 없습니다.",
};

interface ItemFilteringProps {
  items: DealItem[];
}

export default function ItemFiltering({ items }: ItemFilteringProps) {
  const [filter, setFilter] = useState<DealFilter>("전체");

  const filteredItems =
    filter === "전체" ? items : items.filter((item) => item.status === filter);

  return (
    <>
      <FilterBoxList value={filter} onChange={setFilter} />
      {filteredItems.length === 0 ? (
        <EmptyList text={EMPTY_MESSAGE[filter]} />
      ) : (
        <DealItemList items={filteredItems} />
      )}
    </>
  );
}
