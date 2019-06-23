import Link from "next/link";

// Components
import AppLayout from "../components/global/AppLayout";
import Card from "../components/cards/Card";

// Illustarions
import Floor from "../components/media/illustrations/Floor";
import Floorplan from "../components/navigation/FloorPlan";

const floor = () => {
  return (
    <AppLayout>
      <Card __type="layout">
        <h1 className="location">Koningsweg 3e verdieping</h1>
        <Floor />
        <Floorplan />
      </Card>
    </AppLayout>
  );
};

export default floor;
