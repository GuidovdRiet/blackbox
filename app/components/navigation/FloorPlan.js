import styled from "styled-components";
import { func, number } from "prop-types";

const FloorPlan = ({ setCurrentFloor, currentFloor }) => {
  const floors = [5, 4, 3, 2, 1, 0];

  return (
    <Wrapper>
      {floors &&
        floors.map(floor => (
          <button
            className="floor-button"
            type="button"
            onClick={() => setCurrentFloor(floor)}
          >
            <p>
              {floor === 0 ? "BG" : `${floor}`}
              {floor !== 0 && <span>e</span>}
            </p>
          </button>
        ))}
    </Wrapper>
  );
};

export default FloorPlan;

FloorPlan.propTypes = {
  setCurrentFloor: func,
  currentFloor: number
};

const Wrapper = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  min-width: 70px;
  margin: 0 15px 60px 0;

  .floor-button {
    height: 70px;
    width: 70px;
    background-color: ${({ theme }) => theme.lightPink};
    transition: background-color 0.13s ease-in-out;
    border: 2px solid ${({ theme }) => theme.darkBlue};
    margin-bottom: -2px;
    &:focus {
      outline: 0;
      background-color: ${({ theme }) => theme.lightGrey};
    }
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.lightGrey};
    }
    p {
      font-weight: 500;
      ${({ theme }) => theme.fontSmoothing};
      color: ${({ theme }) => theme.darkBlue};
    }
  }
`;
