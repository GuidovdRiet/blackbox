import styled from "styled-components";
import Link from "next/link";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import { Container } from "./PageLayout";
import Icon from "../media/icons";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Nav>
        <div className="link-wrapper">
          <Link href="/">
            <a className="icon-link">
              <Icon __type="fire" />
            </a>
          </Link>
          <Link href="/fireInfo">
            <a className="icon-link">
              <Icon __type="fireInfo" />
            </a>
          </Link>
          <Link href="/team">
            <a className="icon-link">
              <Icon __type="user" />
            </a>
          </Link>
          <Link href="/settings">
            <a className="icon-link">
              <Icon __type="settings" />
            </a>
          </Link>
        </div>
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
  margin-left: 95px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

const Nav = styled.div`
  width: 95px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkBlue};
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  .link-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .icon-link {
    width: 47px;
    max-height: 65px;
    margin: 20px 0;
  }
`;
