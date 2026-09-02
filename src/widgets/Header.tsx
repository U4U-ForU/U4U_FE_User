import styled from "@emotion/styled";
import Coin from "../entities/user/ui/Coin";
import UserProfile from "../entities/user/ui/Profile";

export default function Header() {
  return (
    <Wrapper>
      <Coin coin={100} />
      <UserProfile />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
