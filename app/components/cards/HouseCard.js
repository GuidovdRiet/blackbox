import styled from "styled-components";
import Link from "next/link";
import { oneOfType, arrayOf, node, string, func, number } from "prop-types";

// Components
import FloorPlan from "../navigation/FloorPlan";
import Button from "../buttons";

const HouseCard = ({ children, setCurrentFloor, currentFloor }) => {
  return (
    <Wrapper>
      <FloorPlan
        setCurrentFloor={setCurrentFloor}
        currentFloor={currentFloor}
      />
      {children}
      {currentFloor && (
        <Link
          as={`/floor/${currentFloor}`}
          href={`/floor?floor=${currentFloor}`}
        >
          <Button __type="default" className="button">
            Bekijk deze verdieping
          </Button>
        </Link>
      )}
    </Wrapper>
  );
};

export default HouseCard;

HouseCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  setCurrentFloor: func,
  currentFloor: number
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.lightGrey};
  width: 100%;
  svg {
    max-height: 600px;
  }
  .button {
    position: absolute;
    bottom: 70px;
    right: 43px;
  }
`;
