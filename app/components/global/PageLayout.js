import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Style
import GlobalStyle from "../../common/globalStyle";

const PageLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default PageLayout;

PageLayout.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
`;
