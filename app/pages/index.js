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
        __type="building"
        setCurrentFloor={setCurrentFloor}
        currentFloor={currentFloor}
        adres="Overview locatie Koningsweg 10 - 300B"
      >
        <House currentFloor={currentFloor} />
      </Card>
    </AppLayout>
  );
};

export default Home;
