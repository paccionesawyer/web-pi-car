# Web-Car

In the figure below, what you see is a LEGO Spike Prime connected to two motors and a Rasberry Pi. The Raspberry PI hosts a server using the python library flask that has a custom Graphical User Interface. The webpage can be accessed by any desktop or laptop of mobile device on the same wifi by going to [Pi ip-address]:5000. The graphical user interface also shown below consists of a wheel that can be used to control the direction that the car moves in and a slider that controls the velocity of the car. The inputs are taken from the webpage and communicated from the Raspberry PI to the Lego SPIKE PRIME using serial communication. The SPIKE PRIME then parses the user input into a motor response (i.e. increasing/decreasing the motors to speed up/slow down or their relative speeds to turn)

[Full Video](https://youtu.be/HMzt1AFN9BQ)

![Labelled Diagram](https://github.com/paccionesawyer/web-pi-car/blob/main/assets/PI_CAR_Labelled.jpg)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Raspberry Pi 4](https://www.google.com/search?q=raspberry+pi+4&sxsrf=ALeKk03vsMgGCu7PQVxu5BVM5yzeNxULQw:1613717510216&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjM7dqXrvXuAhWYWc0KHdwgBTIQ_AUoAXoECAUQAw&biw=958&bih=1087) x2
  - Libraries
    - [Flask](https://flask.palletsprojects.com/en/1.1.x/) 3.4.6
    - [OpenCV](https://pypi.org/project/opencv-python/) 1.02
    - [Serial](https://pyserial.readthedocs.io/en/latest/pyserial.html) 3.4

- A LEGO SPIKE PRIME Kit [Purchase One Here.](https://education.lego.com/en-us/products/lego-education-spike-prime-set/45678#spike%E2%84%A2-prime)
  - The LEGO SPIKE PRIME kit IDE should be downloaded to update the firmware [here](https://education.lego.com/en-us/downloads/spike-prime/software)
    - Once the firmware is updated you can connect via Serial Communication using Putty or [this IDE](https://github.com/chrisbuerginrogers/ME35_21)

### Installing

Simply download the files in this repository and first run the code on the WIO Terminal using the Arduino IDE. Then run the SPIKE PRIME Code in REPL or the IDE that can be found here, [SPIKE PRIME IDE](https://github.com/chrisbuerginrogers/ME35_21). To run the PI code, use <code>flask run --host=0.0.0.0</code>. The file must be named <code>app.py</code>. This will start a webpage on your Raspberry Pi being served to port 5000.

![GUI](https://github.com/paccionesawyer/web-pi-car/blob/main/assets/gui.jpg)

## Authors

- **Sawyer Bailey Paccione** - *Raspberry PI CODE, SPIKE CODE* - [Portfolio](http://sawyerbaileypaccione.tech/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
