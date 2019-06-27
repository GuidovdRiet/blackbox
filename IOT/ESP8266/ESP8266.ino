/**********************PINS**************************************/
#define         MQ_PIN                       (0)
#define         RL_VALUE                     (5)
#define         RO_CLEAN_AIR_FACTOR          (9.83)
#define RX 10
#define TX 11

/**********************Software Related Macros*******************/
#define         CALIBARAION_SAMPLE_TIMES     (25)
#define         CALIBRATION_SAMPLE_INTERVAL  (200)
#define         READ_SAMPLE_INTERVAL         (50)
#define         READ_SAMPLE_TIMES            (5)

/*********************Libraries*********************************/
#include <LiquidCrystal.h>
#include <Adafruit_NeoPixel.h>
#include <SoftwareSerial.h>
#include "secrets.h"

/*********************Application Related Macros****************/
#define         GAS_LPG                      (0)
#define         GAS_CO                       (1)
#define         GAS_SMOKE                    (2)

/*********************Neopixel rings****************************/
#define PIN      3
#define N_LEDS 12

Adafruit_NeoPixel strip = Adafruit_NeoPixel(N_LEDS, PIN, NEO_GRB + NEO_KHZ800);

/****************************Globals**********************************************/
float           LPGCurve[3]  =  {2.3, 0.21, -0.47};
float           COCurve[3]  =  {2.3, 0.72, -0.34};
float           SmokeCurve[3] = {2.3, 0.53, -0.44};
float           Ro           =  10;

String API = SECRET_WRITE_APIKEY;
String TEST_API = SECRET_WRITE_TEST_APIKEY;
String AP = SECRET_AP;
String PASS = SECRET_PASS;
String HOST = SECRET_HOST;
String PORT = SECRET_PORT;
String field_test = "field1";
String field_SMOKE = "field1";
String field_CO = "field2";
String field_LPG = "field3";

int countTrueCommand;
int countTimeCommand;
boolean found = false;
int valSensor = 1;
SoftwareSerial esp8266(RX, TX);

void setup() {
  strip.begin();
  // Let led strip show its working
  chase(strip.Color(255, 0, 0));
  chase(strip.Color(255, 69, 0));
  chase(strip.Color(255, 215, 0));

  Serial.begin(9600);
  Serial.print("Calibrating...\n");
  Ro = MQCalibration(MQ_PIN);
  Serial.print("Calibration is done...\n");

  // Let led strip show its done calibrating
  chase(strip.Color(0, 255, 0));

  Serial.print("Ro=");
  Serial.print(Ro);
  Serial.print("kohm");
  Serial.print("\n");
  esp8266.begin(115200);
  sendCommand("AT", 5, "OK");
  sendCommand("AT+CWMODE=1", 5, "OK");
  sendCommand("AT+CWJAP=\"" + AP + "\",\"" + PASS + "\"", 15, "OK");
  countTrueCommand = 0;
}

void loop() {
  int val_smoke = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_SMOKE);
  int val_CO = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_CO);
  int val_LPG = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_LPG);
  int valueFakeSensor = random(1000);

  String getData = "GET /update?api_key=" + API + "&" + field_SMOKE + "=" + String(val_smoke) + "&" + field_CO + "=" + String(val_CO) + "&" + field_LPG + "=" + String(val_LPG);
  String getTestData = "GET /update?api_key=" + TEST_API + "&" + field_test + "=" + String(valueFakeSensor);

  switch (countTrueCommand) {

    case 0: sendCommand("AT+CIPMUX=1", 5, "OK"); break;
    case 1: sendCommand("AT+CIPSTART=0,\"TCP\",\"" + HOST + "\"," + PORT, 15, "OK"); break;
    case 2: sendCommand("AT+CIPSEND=0," + String(getTestData.length() + 4), 3, ">"); break;
    case 3: esp8266.println(getTestData); delay(1500); countTrueCommand++; break;
    case 4: sendCommand("AT+CIPCLOSE=0", 5, "OK"); break;
    case 5:

      countTrueCommand = 1;
      break;
  }
}

static void chase(uint32_t c) {
  for (uint16_t i = 0; i < strip.numPixels() + 4; i++) {
    strip.setPixelColor(i  , c); // Draw new pixel
    strip.setPixelColor(i - 4, 0); // Erase pixel a few steps back
    strip.show();
    delay(35);
  }
}

void sendCommand(String command, int maxTime, char readReplay[]) {
  Serial.print(countTrueCommand);
  Serial.print(". at command => ");
  Serial.print(command);
  Serial.print(" ");
  while (countTimeCommand < (maxTime))
  {
    esp8266.println(command);
    if (esp8266.find(readReplay)) //ok
    {
      found = true;
      break;
    }

    countTimeCommand++;
  }

  if (found == true)
  {
    Serial.println("CHECK!");
    countTrueCommand++;
    countTimeCommand = 0;
  }

  if (found == false)
  {
    Serial.println("FAIL!");
    countTrueCommand = 0;
    countTimeCommand = 0;
  }

  found = false;
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
}

float MQResistanceCalculation(int raw_adc)
{
  return ( ((float)RL_VALUE * (1023 - raw_adc) / raw_adc));
}

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

  return val;
}

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

int  MQGetPercentage(float rs_ro_ratio, float * pcurve)
{
  return (pow(10, ( ((log(rs_ro_ratio) - pcurve[1]) / pcurve[2]) + pcurve[0])));
}
