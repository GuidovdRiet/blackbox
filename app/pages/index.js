import { useState } from "react";

// Components
import House from "../components/media/illustrations/House";
import AppLayout from "../components/global/AppLayout";
import Card from "../components/cards/Card";

const Home = () => {
  const [currentFloor, setCurrentFloor] = useState(null);

  return (
    <AppLayout>
      <Card
        __type="house"
        setCurrentFloor={setCurrentFloor}
        currentFloor={currentFloor}
      >
        <House currentFloor={currentFloor} />
      </Card>
    </AppLayout>
  );
};

export default Home;
