unsigned long echo = 0;
int ultraSoundSignal = 11; // pin
unsigned long ultrasoundValue = 0;
short count = 0;

void setup()
{
  Serial.begin(9600);
  pinMode(ultraSoundSignal,OUTPUT);
}

unsigned long ping()
{ 
  pinMode(ultraSoundSignal, OUTPUT); // Switch signalpin to output
  digitalWrite(ultraSoundSignal, LOW); // Send low pulse 
  delayMicroseconds(2); 
  digitalWrite(ultraSoundSignal, HIGH); // Send high pulse
  delayMicroseconds(10); 
  digitalWrite(ultraSoundSignal, LOW); // Holdoff
  pinMode(ultraSoundSignal, INPUT); // Switch signalpin to input
  digitalWrite(ultraSoundSignal, HIGH); // Turn on pullup resistor

  // echo = pulseIn(ultraSoundSignal, HIGH, 38000)
  echo = pulseIn(ultraSoundSignal, HIGH); //Listen for echo
  ultrasoundValue = (echo / 58.138) * .39; //convert to CM then to inches
  return ultrasoundValue;
}

void loop()
{
  int x = 0;
  x = ping();
  //{
    Serial.println(x);
    // if ultrasonic within certain range push to database .....
 // }
  delay(10);
  //count++;
}
