import styled from "@emotion/styled";
import CombineMenuItem from "./eachButton/CombineMenuItem";
import RandomMenuItem from "./eachButton/RandomMenuItem";
import InventoryMenuItem from "./eachButton/InventoryMenuItem";
import SubmitMenuItem from "./eachButton/SubmitMenuItem";

export default function MainMenuItemList() {
  return (
    <Wrapper>
      <SubmitMenuItem />
      <CombineMenuItem />
      <InventoryMenuItem />
      <RandomMenuItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin-top: 16px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0;
`;
