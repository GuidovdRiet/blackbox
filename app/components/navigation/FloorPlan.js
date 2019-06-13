import styled from "styled-components";
import { func, number } from "prop-types";
import Link from "next/link";

const FloorPlan = ({ setCurrentFloor, currentFloor }) => {
  const floors = [5, 4, 3, 2, 1, 0];

  return (
    <Wrapper>
      {floors &&
        floors.map(floor => (
          <>
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
            {currentFloor === floor && (
              <Link as={`/floor/${floor}`} href={`/floor?floor=${floor}`}>
                <div className="link-wrapper">
                  <p>Info →</p>
                </div>
              </Link>
            )}
          </>
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

  .link-wrapper {
    background-color: #2085d570;
    margin: 0 3px;
    height: 55px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      padding: 0 5px;
    }
  }
`;
