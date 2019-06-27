import styled from 'styled-components';

const Report = () => {
  return (
    <Wrapper>
      <IFrame
        id="frame"
        title="graph"
        src="https://thingspeak.com/channels/811366/charts/1?bgcolor=%23ffffff&color=%2310284F&days=1&dynamic=true&results=10000&title=Sensor+data&type=line"
        height="100%"
        width="100%"
      />
    </Wrapper>
  );
};

const IFrame = styled.iframe`
  border: none;
  -ms-zoom: 2.8;
  -moz-transform: scale(2.8);
  -moz-transform-origin: 0 0;
  -o-transform: scale(2.8);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(2.8);
  -webkit-transform-origin: 0 0;
  #chart-container {
    margin: 0 auto !important;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  position: absolute;
`;

export default Report;
