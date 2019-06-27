#define         MQ_PIN                       (0)     //define which analog input channel you are going to use
#define         RL_VALUE                     (5)     //define the load resistance on the board, in kilo ohms
#define         RO_CLEAN_AIR_FACTOR          (9.83)  //RO_CLEAR_AIR_FACTOR=(Sensor resistance in clean air)/RO,

/**********************Software Related Macros*******************/
#define         CALIBARAION_SAMPLE_TIMES     (25)    //define how many samples you are going to take in the calibration phase
#define         CALIBRATION_SAMPLE_INTERVAL  (200)   //define the time interal(in milisecond) between each samples in the
//cablibration phase
#define         READ_SAMPLE_INTERVAL         (50)    //define how many samples you are going to take in normal operation
#define         READ_SAMPLE_TIMES            (5)     //define the time interal(in milisecond) between each samples in 

/*********************Libraries*********************************/
#include <LiquidCrystal.h>
#include <Adafruit_NeoPixel.h>

/*********************Application Related Macros****************/
#define         GAS_LPG                      (0)
#define         GAS_CO                       (1)
#define         GAS_SMOKE                    (2)

/*********************Neopixel rings****************************/
#define PIN      3
#define N_LEDS 12

Adafruit_NeoPixel strip = Adafruit_NeoPixel(N_LEDS, PIN, NEO_GRB + NEO_KHZ800);

/****************************Globals**********************************************/
float           LPGCurve[3]  =  {2.3, 0.21, -0.47}; //two points are taken from the curve.
//with these two points, a line is formed which is "approximately equivalent"
//to the original curve.
//data format:{ x, y, slope}; point1: (lg200, 0.21), point2: (lg10000, -0.59)
float           COCurve[3]  =  {2.3, 0.72, -0.34};  //two points are taken from the curve.
//with these two points, a line is formed which is "approximately equivalent"
//to the original curve.
//data format:{ x, y, slope}; point1: (lg200, 0.72), point2: (lg10000,  0.15)
float           SmokeCurve[3] = {2.3, 0.53, -0.44}; //two points are taken from the curve.
//with these two points, a line is formed which is "approximately equivalent"
//to the original curve.
//data format:{ x, y, slope}; point1: (lg200, 0.53), point2: (lg10000,  -0.22)
float           Ro           =  10;                 //Ro is initialized to 10 kilo ohms

void setup()
{
  strip.begin();
  // Let led strip show its working
  chase(strip.Color(255, 0, 0));
  chase(strip.Color(255, 69, 0));
  chase(strip.Color(255, 215, 0));
  Serial.begin(9600);                               //UART setup, baudrate = 9600bps
  Serial.print("Calibrating...\n");
  Ro = MQCalibration(MQ_PIN);                       //Calibrating the sensor. Please make sure the sensor is in clean air
  Serial.print("Calibration is done...\n");
  // Let led strip show its done calibrating
  chase(strip.Color(0, 255, 0));
  Serial.print("Ro=");
  Serial.print(Ro);
  Serial.print("kohm");
  Serial.print("\n");
}

void loop()
{
  Serial.print("LPG:");
  Serial.print(MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_LPG) );
  Serial.print( "ppm" );
  Serial.print("    ");
  Serial.print("CO:");
  Serial.print(MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_CO) );
  Serial.print( "ppm" );
  Serial.print("    ");
  Serial.print("SMOKE:");
  Serial.print(MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_SMOKE) );
  Serial.print( " ppm" );
  Serial.print("\n");
  fillNeopixelBasedOnSmoke(MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_SMOKE));
}

static void chase(uint32_t c) {
  for (uint16_t i = 0; i < strip.numPixels() + 4; i++) {
    strip.setPixelColor(i  , c); // Draw new pixel
    strip.setPixelColor(i - 4, 0); // Erase pixel a few steps back
    strip.show();
    delay(35);
  }
}


float fillNeopixelBasedOnSmoke(int ppm) {

  int percentage = ppm / 100;
  int numberOfLeds;
  uint32_t colour = strip.Color(0, 255, 0);


  if (percentage == 0) {
    for (int i = 0; i <= 12; i++) {
      strip.setPixelColor(i  , 0);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage > 2 && percentage < 10) {
    numberOfLeds = 1;
    strip.setPixelColor(1, colour);
    strip.show();
    strip.clear();
  }
  else if (percentage >= 10 && percentage < 20) {
    numberOfLeds = 2;
    for (int i = 0; i <= numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 20 && percentage < 30) {
    numberOfLeds = 3;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 30 && percentage < 40) {
    numberOfLeds = 4;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 40 && percentage < 50) {
    numberOfLeds = 5;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 50 && percentage < 60) {
    numberOfLeds = 6;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 60 && percentage < 70) {
    numberOfLeds = 7;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 70 && percentage < 80) {
    numberOfLeds = 8;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 80 && percentage < 90) {
    numberOfLeds = 10;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }
  else if (percentage >= 90) {
    numberOfLeds = 12;
    for (int i = 0; i < numberOfLeds; i++) {
      strip.setPixelColor(i  , colour);
      strip.show();
    }
    strip.clear();
  }

//  Serial.print("percentage: ");
//  Serial.print(percentage);
//  Serial.print("\n");
}

/**************** MQResistanceCalculation **************************************
  Input:   raw_adc - raw value read from adc, which represents the voltage
  Output:  the calculated sensor resistance
  Remarks: The sensor and the load resistor forms a voltage divider. Given the voltage
         across the load resistor and its resistance, the resistance of the sensor
         could be derived.
**********************************************************************************/
float MQResistanceCalculation(int raw_adc)
{
  return ( ((float)RL_VALUE * (1023 - raw_adc) / raw_adc));
}

/*************************** MQCalibration **************************************
  Input:   mq_pin - analog channel
  Output:  Ro of the sensor
  Remarks: This function assumes that the sensor is in clean air. It use
         MQResistanceCalculation to calculates the sensor resistance in clean air
         and then divides it with RO_CLEAN_AIR_FACTOR. RO_CLEAN_AIR_FACTOR is about
         10, which differs slightly between different sensors.
**********************************************************************************/
float MQCalibration(int mq_pin)
{
  int i;
  float val = 0;

  for (i = 0; i < CALIBARAION_SAMPLE_TIMES; i++) {      //take multiple samples
    val += MQResistanceCalculation(analogRead(mq_pin));
    delay(CALIBRATION_SAMPLE_INTERVAL);
  }
  val = val / CALIBARAION_SAMPLE_TIMES;                 //calculate the average value

  val = val / RO_CLEAN_AIR_FACTOR;                      //divided by RO_CLEAN_AIR_FACTOR yields the Ro
  //according to the chart in the datasheet

  return val;
}
/***************************  MQRead *******************************************
  Input:   mq_pin - analog channel
  Output:  Rs of the sensor
  Remarks: This function use MQResistanceCalculation to caculate the sensor resistenc (Rs).
         The Rs changes as the sensor is in the different consentration of the target
         gas. The sample times and the time interval between samples could be configured
         by changing the definition of the macros.
**********************************************************************************/
float MQRead(int mq_pin)
{
  int i;
  float rs = 0;

  for (i = 0; i < READ_SAMPLE_TIMES; i++) {
    rs += MQResistanceCalculation(analogRead(mq_pin));
    delay(READ_SAMPLE_INTERVAL);
  }

  rs = rs / READ_SAMPLE_TIMES;

  return rs;
}

/***************************  MQGetGasPercentage ********************************
  Input:   rs_ro_ratio - Rs divided by Ro
         gas_id      - target gas type
  Output:  ppm of the target gas
  Remarks: This function passes different curves to the MQGetPercentage function which
         calculates the ppm (parts per million) of the target gas.
**********************************************************************************/
int MQGetGasPercentage(float rs_ro_ratio, int gas_id)
{
  if ( gas_id == GAS_LPG ) {
    return MQGetPercentage(rs_ro_ratio, LPGCurve);
  } else if ( gas_id == GAS_CO ) {
    return MQGetPercentage(rs_ro_ratio, COCurve);
  } else if ( gas_id == GAS_SMOKE ) {
    return MQGetPercentage(rs_ro_ratio, SmokeCurve);
  }

  return 0;
}

/***************************  MQGetPercentage ********************************
  Input:   rs_ro_ratio - Rs divided by Ro
         pcurve      - pointer to the curve of the target gas
  Output:  ppm of the target gas
  Remarks: By using the slope and a point of the line. The x(logarithmic value of ppm)
         of the line could be derived if y(rs_ro_ratio) is provided. As it is a
         logarithmic coordinate, power of 10 is used to convert the result to non-logarithmic
         value.
**********************************************************************************/
int  MQGetPercentage(float rs_ro_ratio, float *pcurve)
{
  return (pow(10, ( ((log(rs_ro_ratio) - pcurve[1]) / pcurve[2]) + pcurve[0])));
}
