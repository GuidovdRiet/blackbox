import styled from "styled-components";
import Link from "next/link";

// Components

const Header = () => {
  return (
    <Wrapper>
      {/* <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/name">
        <a>Name</a>
      </Link>
      <Link href="/budget">
        <a>Budget</a>
      </Link>
      <Link href="/squarefeet">
        <a>Square feet</a>
      </Link> */}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
