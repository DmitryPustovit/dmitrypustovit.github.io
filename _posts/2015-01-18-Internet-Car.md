---
layout: post
title: Internet Controlled Car
summery: An RC car. An Arduino. Two guys with laptops. “Let’s make an internet controlled RC car.” “Eh, sure why not.”
---

![_config.yml]({{ site.baseurl }}/images/Car_Logo.jpg)

Over the winter holidays, a friend and I decided to find out what we could do with an old RC car and an Arduino. Well the word decided is a bit of a simplification, it’s more like I decided and dragged him along but none the less we put our efforts together and decided to see what we can do. My friend’s name is Vishnu and you can find his blog at <a href="vishnumenon.com">vishnumenon.com</a>.

![_config.yml]({{ site.baseurl }}/images/Car_2.jpg)
The car looked something like this when it was finished.

At first I was the only one working on this little project and I wanted to start with the basics (I had never controlled DC motors with an Arduino before). I started by removing all of the electronics from the RC car except for the motors and in my case, my RC car had little LEDs in the wheels and I thought it would be a waste to get rid of them so I kept them(I never did use them, maybe one day I will).

I put the wires that lead to the LEDs in the car’s wheels out of my way and proceeded to hook up the car’s DC motors to a motor controller I bought on amazon for less than 15 dollars. I plugged the motors into the two motor slots and then connected the car’s built in battery back to the motor controller. Then I connected the motor controller to the Arduino and connected a 9V battery to the Arduino. Once that was done I wanted to see if I could get the car to detect objects in front of it and stop moving. I found an ultrasonic sensor and hocked that up using a breadboard. This is what it looked like:

![_config.yml]({{ site.baseurl }}/images/Robotic_Mess.jpg)

To say it was a bit of a mess would be an understatement. Also as you may have noticed I am not using an actual Arduino UNO but a SainSmart UNO. It works exactly like an Arduino UNO but is a few dollars cheaper (I end up hot gluing the board to the RC frame and didn’t want to waste a real Arduino). I believe the motor controller I used was also a SainSmart product.

After I had everything hocked up as shown in the picture above I added some simple code that would move the car forward until it was just about to hit something. This worked until unless the senor fell off causing the car to have what can only be described a fit.

This gave me some slight amusement but I wanted to do something a bit more extreme so I dragged my friend Vishnu into the project. I proposed to him that we use the Arduino (or Arduino clone in this case) to control the car via a website that anyone could access. So there were had our problem, how to send commands from a webserver to an Arduino without purchasing some pricey network shield. Our solution, although it may not be the best, seems to have worked.

First we connected a Bluetooth device to the Arduino, something I already had laying around but could be bought on amazon for less than 10 dollars. I then added some code to the Arduino that would react like a remote control this was done by having the Arduino listen to the Bluetooth com port. Based on the message sent it would move forwards, backwards, turn left and turn right (the basics).

An important thing to note is that the RC car that I was using is much simpler than a standard RC car. It contained only two DC motors and the front wheels were mounted in place. In order to turn one DC motor would go in one direction while the other turned in the opposite direction. Unlike in most RC cars where the front wheels are mounted to a servo which allows for them to turn and steer the car in the direction needed.

After I connected the Bluetooth module to the Arduino and wrote the code that was needed I wrote a basic program in C# that sends the commands based on WASD keyboard input from my computer, this was to test how well the now Arduino controlled RC car works. After the test was successful I rewrote the C# program to download a string from a web address and send it to Arduino and then repeat the process. The string would be the command that would control the RC car.

A server was set up on nitrous.io that used node.js. A web GUI was created looked like this:

![_config.yml]({{ site.baseurl }}/images/Webpage_1.jpg)

The buttons change the variable when being pressed and then set it back to its default value. This causing the car to move based on the command being sent and then to stop. Once the server was completed everything was done and the testing began.

It worked with some errors, we suspected had we used our own dedicated server the RC car would have functioned better. Nitrous.io is a useful tool but it clearly has limitations for people who are not willing to spend money.


Part Two:

A bit later on we decided it would be fun if we were to add a way to “drive” the RC car. In essence we agreed to add a sonar sensor to the front of the car and send that value to the server to display on the webpage. Another friend of mine who was visiting also helped with this part. Sadly he does not have a blog.

![_config.yml]({{ site.baseurl }}/images/Webpage_2.jpg)

To start off, half of the issues we encountered were due to the senor. One sensor wouldn’t work at all and the once currently being used has a couple of issues. We also decided that the server would refresh the sonar value every half second in an attempt to get the most accurate value. This only resulted in the server becoming ever slower.

After finding a working sensor I mounted it using hot glue and Popsicle sticks. I also hot glued the Arduino and breadboard in an attempt to avoid having any of the wires disconnect. At this point another friend of mine had joined us on this little project and felt it was necessary to mention how all of the hot glue now on the car would cause us problems. Surely enough, it did.

Once the sensor was mounted, the Arduino code was modified to have it take the input values and send them over Bluetooth to the C# program. The C# program would then add them to web address of the string it was downloading and download the string from the server. This would send the sensor value to the server and it inserted the value onto the webpage itself.

If you look at the entire project as a whole, there is more than likely a much less complicated and more elegant method of accomplishing what we have. However, we were working with what we had available at the moment and not really thinking about every step in depth.

UPDATE:
I have recently ordered some new parts that I plan in using this project to improve it. I may update this post with new pictures and specifications of the RC car after I finish.


Specific Parts Used - All Amazon Links :


Arduino or Arduino Clone - No link as there are many different versions.

Motor Controller - [Motor Controller](http://www.amazon.com/SainSmart-Stepper-Controller-Mega2560-Duemilanove/dp/B00AJGM37I/ref=sr_1_3?s=electronics&ie=UTF8&qid=1421612779&sr=1-3&keywords=Motor+Controller)

Bluetooth Module -[Bluetooth Module](http://www.amazon.com/Baitaihem-Arduino-Wireless-Bluetooth-Receiver/dp/B00J1D6UBA/ref=sr_1_6?s=electronics&ie=UTF8&qid=1421612829&sr=1-6&keywords=arduino+bluetooth)

Senor, This one should work better then the one I used.  - [Ultrasonic Sensor](http://www.amazon.com/niceeshop-HC-SR04-Ultrasonic-Distance-Measuring/dp/B00F167T2A/ref=sr_1_2?s=electronics&ie=UTF8&qid=1421612884&sr=1-2&keywords=arduino+ultrasonic)

The rest of the parts were wires, breadboards, other parts I had laying around and of course and an RC car.
