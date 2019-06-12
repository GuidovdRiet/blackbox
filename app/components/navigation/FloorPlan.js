import styled from "styled-components";
import { func } from "prop-types";

const FloorPlan = ({ setCurrentFloor }) => {
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
  setCurrentFloor: func
};

const Wrapper = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 70px;
  border: 3px solid ${({ theme }) => theme.darkBlue};
  padding: 3px;
  .floor-button {
    height: 55px;
    margin: 3px;
    background-color: ${({ theme }) => theme.lightBlue};
    transition: background-color 0.13s ease-in-out;
    border: 0;
    &:focus {
      outline: 0;
      background-color: ${({ theme }) => theme.darkBlue};
    }
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.darkBlue};
    }
    span {
      font-size: 1.05rem;
    }
  }
`;
