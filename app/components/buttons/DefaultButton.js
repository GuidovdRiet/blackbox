import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

const DefaultButton = ({ children, className }) => {
  return (
    <Button type="button" className={className}>
      {children}
    </Button>
  );
};

export default DefaultButton;

DefaultButton.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  className: string
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.lightPink};
  padding: 12px 20px;
  border-radius: 40px;
  border: 0;
  font-size: 1.23rem;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.darkBlue};
    background-color: ${({ theme }) => theme.lightPink};
  }
`;
