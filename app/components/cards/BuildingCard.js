import styled from "styled-components";
import Link from "next/link";
import {
  oneOfType,
  arrayOf,
  node,
  string,
  func,
  number,
  bool
} from "prop-types";

// Components
import FloorPlan from "../navigation/FloorPlan";
import Button from "../buttons";
import Icon from "../media/icons";

const BuildingCard = ({ children, setCurrentFloor, currentFloor, adres }) => {
  return (
    <Wrapper>
      {adres && (
        <h1 className="location">
          {adres}
          <Icon __type="location" className="icon" />
        </h1>
      )}
      <Container>
        <HouseWrapper>{children}</HouseWrapper>
        <NavWrapper>
          <FloorPlan
            setCurrentFloor={setCurrentFloor && setCurrentFloor}
            currentFloor={currentFloor && currentFloor}
          />
          {currentFloor && (
            <Link
              as={`/floor/${currentFloor}`}
              href={`/floor?floor=${currentFloor}`}
            >
              <a>
                <Button __type="default" arrowRight>
                  {`Bekijk de ${currentFloor}e verdieping`}
                </Button>
              </a>
            </Link>
          )}
        </NavWrapper>
      </Container>
    </Wrapper>
  );
};

export default BuildingCard;

BuildingCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  setCurrentFloor: func,
  currentFloor: number,
  adres: string
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.lightGrey};
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  .location {
    color: ${({ theme }) => theme.darkBlue};
    font-weight: 500;
    margin: 20px 0 80px 27px;
    .icon {
      max-width: 23px;
      margin-left: 16px;
      fill: ${({ theme }) => theme.darkBlue};
    }
  }
  svg {
    max-height: 470px;
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
  min-width: 240px;
`;
