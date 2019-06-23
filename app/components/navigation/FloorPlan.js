import styled from "styled-components";
import { func, number, object } from "prop-types";
import { withRouter } from "next/router";

const FloorPlan = ({ setCurrentFloor, currentFloor, router: { query } }) => {
  const floors = [5, 4, 3, 2, 1, 0];

  return (
    <Wrapper>
      {floors &&
        floors.map((floor, i) => (
          <Button
            type="button"
            highlight={floor === Number(query.title)}
            onClick={() => setCurrentFloor && setCurrentFloor(floor)}
            key={i.toString()}
          >
            <p>
              {floor === 0 ? "BG" : `${floor}`}
              {floor !== 0 && <span>e</span>}
            </p>
          </Button>
        ))}
    </Wrapper>
  );
};

export default withRouter(FloorPlan);

FloorPlan.propTypes = {
  setCurrentFloor: func,
  currentFloor: number,
  router: object.isRequired
};

const Wrapper = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  min-width: 70px;
  margin: 0 15px 60px 0;
`;
const Button = styled.button`
  height: 70px;
  width: 70px;
  transition: background-color 0.13s ease-in-out;
  border: 2px solid ${({ theme }) => theme.darkBlue};
  background-color: ${({ theme, highlight }) =>
    highlight ? "#93989e" : theme.lightPink};
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
`;
