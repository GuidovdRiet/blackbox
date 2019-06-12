import styled from "styled-components";

const LayoutCard = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutCard;

const Wrapper = styled.div`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.mediumBlue};
`;
