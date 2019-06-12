import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import { Container } from "./PageLayout";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
  flex: 1;
`;
