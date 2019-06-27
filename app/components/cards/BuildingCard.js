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

const BuildingCard = ({
  children,
  setCurrentFloor,
  currentFloor,
  currentSensor,
  showSensorInfo,
  adres
}) => {
  return (
    <Wrapper>
      <TopWrapper>
        {adres && (
          <h1 className="location">
            {adres}
            <Icon __type="location" className="icon" />
          </h1>
        )}
        {showSensorInfo && (
          <SensorInfo>
            <h1>Sensor {currentSensor}</h1>
            <p>Rookcategorie 3 (zwaar)</p>
            <p>Explosieve stof: Ja</p>
          </SensorInfo>
        )}
      </TopWrapper>
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
  currentSensor: func,
  currentFloor: number,
  showSensorInfo: bool,
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
    display: flex;
    .icon {
      width: 23px;
      margin-left: 16px;
      margin-bottom: 13px;
      fill: ${({ theme }) => theme.darkBlue};
    }
  }
  svg {
    max-height: 470px;
  }
`;

const TopWrapper = styled.div``;

const SensorInfo = styled.div`
  background-color: #eeeeee;
  border-radius: 40px;
  padding: 30px;
  position: absolute;
  right: 172px;
  bottom: 691px;
  h1 {
    color: ${({ theme }) => theme.darkBlue};
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
