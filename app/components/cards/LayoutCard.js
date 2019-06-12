import styled from "styled-components";

const LayoutCard = ({ children, color }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default LayoutCard;

const Wrapper = styled.div`
  margin-bottom: 20px;
  background-color: ${({ theme, color }) => theme[color] || theme.mediumBlue};
`;
