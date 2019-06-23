import styled from "styled-components";

// Components
import AppLayout from "../components/global/AppLayout";
import Card from "../components/cards/Card";
import Button from "../components/buttons";
import Icon from "../components/media/icons";

const FireInfo = () => (
  <AppLayout>
    <Card __type="layout" color="darkBlue">
      <Title>Brandevaluatie</Title>
      <InfoCard>
        <div className="left-wrapper">
          <ul className="info-category">
            <li>Melding:</li>
            <li>Categorie:</li>
            <li>Datum:</li>
            <li>Tijd:</li>
          </ul>
          <ul className="info">
            <li>1400999</li>
            <li>Grip 1</li>
            <li>19-06-2019</li>
            <li>18:06 uur</li>
          </ul>
        </div>
        <div className="right-wrapper">
          <div className="location-wrapper">
            <p>Coolsingel 12-35, Rotterdam</p>
            <Icon __type="location" className="location" />
          </div>
          <Button __type="default">Bekijk rapport</Button>
        </div>
      </InfoCard>
    </Card>
  </AppLayout>
);

export default FireInfo;

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
`;

const InfoCard = styled.div`
  display: flex;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mediumBlue};
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  .left-wrapper {
    display: flex;
  }

  .right-wrapper {
    .location-wrapper {
      display: flex;
    }
    .location {
      width: 20px;
    }
  }
`;
