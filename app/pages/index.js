import styled from "styled-components";
import Link from "next/link";

const index = () => {
  return (
    <Wrapper>
      <Link href="/building">Building →</Link>
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  background-color: #8ac9f9;
`;
