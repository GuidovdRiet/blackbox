import { useState } from "react";

// Components
import House from "../components/media/illustrations/House";
import AppLayout from "../components/global/AppLayout";
import CardWrapper from "../components/wrappers/CardWrapper";
import Card from "../components/cards/Card";

const Building = () => {
  const [currentFloor, setCurrentFloor] = useState(null);

  return (
    <AppLayout>
      <CardWrapper>
        <Card __type="layout" color="darkBlue">
          <p>Let op!</p>
        </Card>
        <Card __type="layout">
          <p>De rook verspreidt zich via de brandgang</p>
        </Card>
        <Card __type="layout">
          <p>Overview gebouw</p>
          <p>Bekijk alle sensoren</p>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card __type="house" setCurrentFloor={setCurrentFloor}>
          <House currentFloor={currentFloor} />
        </Card>
      </CardWrapper>
    </AppLayout>
  );
};

export default Building;
