import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

const CardWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardWrapper;

CardWrapper.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 18px;
  flex-direction: column;
`;
