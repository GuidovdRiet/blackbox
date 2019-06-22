import Link from "next/link";

// Components
import AppLayout from "../components/global/AppLayout";
import Card from "../components/cards/Card";

// Illustarions
import Sensors from "../components/media/illustrations/Sensors";
import Floor from "../components/media/illustrations/Floor";

const floor = () => {
  return (
    <AppLayout>
      <Link href="/building">← Building</Link>
      <Card __type="layout" color="transparent">
        <Sensors />
      </Card>
      <Card __type="layout" color="transparent">
        <Floor />
      </Card>
    </AppLayout>
  );
};

export default floor;
