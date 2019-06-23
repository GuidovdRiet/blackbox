import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from "react";
import { object } from "prop-types";

// Components
import AppLayout from "../components/global/AppLayout";
import Card from "../components/cards/Card";
import Button from "../components/buttons";

// Illustarions
import Floor from "../components/media/illustrations/Floor";
import Floorplan from "../components/navigation/FloorPlan";

const FloorPage = ({ router: { query } }) => {
  const [currentFloor, setCurrentFloor] = useState(null);

  return (
    <AppLayout>
      <Card
        __type="building"
        setCurrentFloor={setCurrentFloor}
        currentFloor={currentFloor}
        adres={`Koningsweg ${query.floor || query.title}e verdieping`}
      >
        <Floor />
        <Link href="/">
          <a>
            <Button __type="default" arrowLeft>Terug naar overzicht gebouw</Button>
          </a>
        </Link>
      </Card>
    </AppLayout>
  );
};

FloorPage.propTypes = {
  router: object.isRequired
};

export default withRouter(FloorPage);
