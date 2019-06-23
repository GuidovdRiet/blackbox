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
          <Button __type="default" className="button">
            Bekijk rapport
          </Button>
        </div>
      </InfoCard>
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
          <Button __type="default" className="button">
            Bekijk rapport
          </Button>
        </div>
      </InfoCard>
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
          <Button __type="default" className="button">
            Bekijk rapport
          </Button>
        </div>
      </InfoCard>
    </Card>
  </AppLayout>
);

export default FireInfo;

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 2.95rem;
  margin: 20px 0 35px 3px;
`;

const InfoCard = styled.div`
  display: flex;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mediumBlue};
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  justify-content: space-between;
  padding: 10px 35px;
  margin-bottom: 21px;
  .left-wrapper {
    display: flex;
    .info-category,
    .info {
      list-style-type: none;
      font-weight: 500;
      ${({ theme }) => theme.fontSmoothing};
      padding: 0;
      li {
        font-size: 1.43rem;
      }
    }
    .info {
      margin-left: 40px;
    }
  }

  .right-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .location-wrapper {
      display: flex;
      margin-right: 3px;
      p {
        font-weight: 500;
        ${({ theme }) => theme.fontSmoothing};
      }
    }
    .location {
      width: 14px;
      fill: white;
      margin-left: 15px;
    }
    .button {
      max-width: 171px;
      margin-top: 14px;
    }
  }
`;
