
//typedef int Data;

void setup() {
  pinMode(13, OUTPUT); //Set the LED pin as an output
  pinMode(0,INPUT); //RX pin arduino input
  pinMode(1,OUTPUT); //TX pin arduino output
  Serial.begin(9600); //Start the UART Serial comm.
  delay(2000);
}
void loop() {
  while(Serial.available()&gt;0) // if anything is in the Serial Buffer, run this code
  {
  Data = Serial.read(); // Read whats in the Serial buffer and store to DATA
  }
  if(Data == 0) // If the Data  is 0, turn off the LED
  {
    digitalWrite(13,LOW);
  }
  else if(Data == 1) // If the Data is 1 turn on the LED
  {
    digitalWrite(13,HIGH);
  }
}
