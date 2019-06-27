import styled from "styled-components";

const Report = () => {
  return (
    <IFrame
      title="graph"
      src="https://thingspeak.com/channels/807905/charts/1?bgcolor=%23ffffff&color=%23d62020&days=1&dynamic=true&results=1000&type=line&xaxis=Time&yaxis=ppm"
      width="440px"
      height="300px"
    />
  );
};

const IFrame = styled.iframe``;

export default Report;
