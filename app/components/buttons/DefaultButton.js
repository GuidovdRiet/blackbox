import styled from "styled-components";
import { oneOfType, arrayOf, node, string, bool } from "prop-types";

// Components
import Icon from "../media/icons";

const DefaultButton = ({ children, className, arrowRight, arrowLeft }) => {
  return (
    <Button type="button" className={className}>
      {arrowLeft && <Icon __type="nextArrow" className="icon icon-left" />}
      <p>{children}</p>
      {arrowRight && <Icon __type="nextArrow" className="icon" />}
    </Button>
  );
};

export default DefaultButton;

DefaultButton.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  className: string,
  arrowLeft: bool,
  arrowRight: bool
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.lightPink};
  padding: 0 27px;
  align-items: center;
  border-radius: 40px;
  border: 0;
  font-size: 1.23rem;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out, border 0.1s ease-in-out,
    color 0.1s ease-in-out;
  border: 2px solid ${({ theme }) => theme.darkBlue};
  font-size: 1.3rem;
  display: flex;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.darkBlue};
    background-color: ${({ theme }) => theme.lightPink};
    border: 2px solid #d6b7b7;
    a {
      color: ${({ theme }) => theme.darkBlue};
    }
  }
  a {
    color: ${({ theme }) => theme.lightPink};
  }
  .icon-left {
    transform: scale(-1);
  }
  .icon {
    width: 20px;
    max-height: 15px;
    padding-left: 10px;
  }
`;
