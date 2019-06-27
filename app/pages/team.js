import styled from "styled-components";
import AppLayout from "../components/global/AppLayout";

const team = () => {
  return (
    <AppLayout>
      <People>
        <p>Bevelvoerder</p>
        <p>Officier</p>
        <p>Brandonderzoeker</p>
      </People>
    </AppLayout>
  );
};

export default team;

const People = styled.div`
  background-color: #2a4770;
  color: ${({ theme }) => theme.lightPink};
  p {
    border-bottom: 1px solid ${({ theme }) => theme.lightPink};
    padding: 20px;
  }
`;
