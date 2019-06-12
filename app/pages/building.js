// Components
import House from "../components/media/illustrations/House";
import AppLayout from "../components/global/AppLayout";
import CardWrapper from "../components/wrappers/CardWrapper";
import Card from "../components/cards/Card";

const building = () => {
  return (
    <AppLayout>
      <CardWrapper>
        <Card __type="layout" />
        <Card __type="layout" />
        <Card __type="layout" />
        <Card __type="layout" />
      </CardWrapper>
      <CardWrapper>
        <Card __type="layout" />
      </CardWrapper>
      {/* <House /> */}
    </AppLayout>
  );
};

export default building;
