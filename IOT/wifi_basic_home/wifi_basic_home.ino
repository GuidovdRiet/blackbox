// Some AT scripts I ran before it worked:
// AT+UART_DEF=9600,8,1,0,0 --Set Baud rate to 9600
// AT+CWMODE=1 --Some extra settings
// AT+CIPMODE=0
// AT+CIPMUX=1

#include "SoftwareSerial.h"

String ssid ="Stads-Lab";
String password="Initialkey4iot";

SoftwareSerial esp(6, 7);// RX, TX

String data;
//String server = "www.markvonk.com"; // www.example.com
//String uri = "/sleep/receiver.php";// our example is /esppost.php

//int DHpin = 8;//sensor pin
//byte dat [5];
//String temp ,hum;

String deviceUser; //temp int declaration
String sensorData;

void setup() {
  esp.begin(9600);
  Serial.begin(9600);
  reset();
  connectWifi();

}

//reset the esp8266 module

void reset() {

  esp.println("AT+RST");
  delay(1000);
  if(esp.find("OK") ) Serial.println("Module Reset");

}

//connect to your wifi network

void connectWifi() {
  String cmd = "AT+CWJAP=\"" +ssid+"\",\"" + password + "\"";
  

  Serial.println("Trying to connect...");

  esp.println(cmd);
  delay(4000);

  if(esp.find("OK")) {
    Serial.println("Connected!");
  }
  else {
    Serial.println("Failed to connect to wifi"); 
    connectWifi();
  }

}

void loop () {
//
//  // convert the bit data to string form
//  sensorData = random(60, 100); //temporary data to simulate bpm
//  deviceUser = 1;
//  Serial.println("Sensor Data: "+sensorData);
//  Serial.println("Device User: "+deviceUser);
//  delay(1000);
}
