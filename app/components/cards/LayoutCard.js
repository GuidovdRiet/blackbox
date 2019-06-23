import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

const LayoutCard = ({ children, color }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default LayoutCard;

LayoutCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string])
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  background-color: ${({ theme, color }) => theme[color] || theme.lightGrey};
`;
