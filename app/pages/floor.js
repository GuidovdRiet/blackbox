import Link from "next/link";

// Components
import AppLayout from "../components/global/AppLayout";
import CardWrapper from "../components/wrappers/CardWrapper";
import Card from "../components/cards/Card";

// Illustarions
import Sensors from "../components/media/illustrations/Sensors";
import Floor from "../components/media/illustrations/Floor";

const floor = () => {
  return (
    <AppLayout>
      <Link href="/building">← Building</Link>
      <CardWrapper>
        <Card __type="layout" color="transparent">
          <Sensors />
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card __type="layout" color="transparent">
          <Floor />
        </Card>
      </CardWrapper>
    </AppLayout>
  );
};

export default floor;
