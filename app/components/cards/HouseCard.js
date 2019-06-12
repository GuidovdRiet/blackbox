import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import FloorPlan from "../navigation/FloorPlan";

const HouseCard = ({ children }) => {
  return (
    <Wrapper>
      <FloorPlan />
      {children}
    </Wrapper>
  );
};

export default HouseCard;

HouseCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string])
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.mediumBlue};
  svg {
    max-height: 600px;
  }
`;
