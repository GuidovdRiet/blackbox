import styled from "styled-components";
import Link from "next/link";
import { oneOfType, arrayOf, node, string, func, number } from "prop-types";

// Components
import FloorPlan from "../navigation/FloorPlan";
import Button from "../buttons";

const HouseCard = ({ children, setCurrentFloor, currentFloor }) => {
  return (
    <Wrapper>
      <h1 className="location">Overview locatie Koningsweg 10 - 300B</h1>
      <Container>
        <HouseWrapper>{children}</HouseWrapper>
        <NavWrapper>
          <FloorPlan
            setCurrentFloor={setCurrentFloor}
            currentFloor={currentFloor}
          />
          {currentFloor && (
            <Button __type="default" className="button">
              <Link
                as={`/floor/${currentFloor}`}
                href={`/floor?floor=${currentFloor}`}
              >
                Bekijk deze verdieping
              </Link>
            </Button>
          )}
        </NavWrapper>
      </Container>
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
  display: flex;
  flex-direction: column;
  .location {
    color: ${({ theme }) => theme.darkBlue};
    font-weight: 500;
    margin: 20px 0 80px 12px;
  }
  svg {
    max-height: 470px;
  }
  .button {
    /* width: 213px; */
  }
`;

const Container = styled.div`
  display: flex;
`;

const HouseWrapper = styled.div`
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  min-width: 210px;
`;
