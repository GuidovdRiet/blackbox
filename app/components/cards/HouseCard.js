import styled from "styled-components";
import { oneOfType, arrayOf, node, string, func } from "prop-types";

// Components
import FloorPlan from "../navigation/FloorPlan";

const HouseCard = ({ children, setCurrentFloor }) => {
  return (
    <Wrapper>
      <FloorPlan setCurrentFloor={setCurrentFloor} />
      {children}
    </Wrapper>
  );
};

export default HouseCard;

HouseCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  setCurrentFloor: func
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.mediumBlue};
  svg {
    max-height: 600px;
  }
`;
