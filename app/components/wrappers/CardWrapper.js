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
  background-color: orange;
`;
