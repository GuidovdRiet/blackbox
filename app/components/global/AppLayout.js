import styled from "styled-components";
import Link from "next/link";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import { Container } from "./PageLayout";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Nav>
        <Link>
          <a>Personeel</a>
        </Link>
        <Link>
          <a>Personeel</a>
        </Link>
        <Link>
          <a>Personeel</a>
        </Link>
        <Link>
          <a>Personeel</a>
        </Link>
        <Link>
          <a>Personeel</a>
        </Link>
      </Nav>
      <Wrapper>{children}</Wrapper>
    </Layout>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

const Layout = styled(Container)`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #f1c40f;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

const Nav = styled.div`
  width: 95px;
  height: 100vh;
  background-color: #e67e22;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  position: fixed;
`;
