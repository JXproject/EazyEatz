
//
//void setup()
//{
//    // Configure the serial communication line at 9600 baud (bits per second.)
//    Serial.begin(9600);
//}
//
//void loop()
//{
//    // Get the (raw) value of the temperature sensor.
//    int val = analogRead(pinTemp);
//
//    // Determine the current resistance of the thermistor based on the sensor value.
//    float resistance = (float)(1023-val)*10000/val;
//
//    // Calculate the temperature based on the resistance value.
//    float temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15;
//
//    // Print the temperature to the serial console.
//    Serial.println(temperature);
//
//    // Wait one second between measurements.
//    delay(1000);
//}

int  val = 0; 
char code[10]; 
int bytesread = 0; 

void setup() { 

Serial.begin(2400); //Serial RX pin at 2400bps 
pinMode(2,OUTPUT);   
digitalWrite(2, LOW);                 
}  


 void loop() { 

  int Vval = analogRead(A0);
  Serial.println(Vval);
  Serial.println("/n");

  if(Serial.available() > 0) {          
    if((val = Serial.read()) == 10) {  
      bytesread = 0; 
      while(bytesread<10) {           
        if( Serial.available() > 0) { 
          val = Serial.read(); 
          if((val == 10)||(val == 13)) { 
            break;                       
          } 
          code[bytesread] = val;                   
          bytesread++;                 
        } 
      } 
      if(bytesread == 10) {           
        Serial.print("TAG code is: ");  
        Serial.println(code);         
      } 
      bytesread = 0; 
      digitalWrite(2, HIGH);                  
           delay(1500);                       
           digitalWrite(2, LOW);                 
    } 
  } 
} 

// extra stuff
// digitalWrite(2, HIGH);             


