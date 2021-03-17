##############################################################################
#                                   Imports                                  #  
##############################################################################
import hub,utime


##############################################################################
#                              Initialize Ports                              #  
##############################################################################

# Raspberry Pi4 
serial = hub.port.C
serial.mode(hub.port.MODE_FULL_DUPLEX)
serial.baud(115200)

# Motors
left = hub.port.B.motor
right = hub.port.A.motor

# Initial Velocities
left_vel = -40
right_vel = 40

turn_rate = 20

while True : 
    try : 
        # Read communcition from Raspberry Pi and Decode
        line = serial.read(1000)
        line = str(line.decode("UTF-8"))
        
        if (line.startswith('d')) :
            # We are reading from the GUI Wheel
            try: 
                # Increase speed of one motor to turn car
                turn_rate = int(line[1:])
                
                new_right_vel = right_vel - (turn_rate//5)
                new_left_vel = left_vel - (turn_rate //5)
                
                left.pwm(new_left_vel)
                right.pwm(new_right_vel)
                
                utime.sleep(1)
            except: 
                pass

        elif (line.startswith('p')) :
            # We are reading from the power bar
            try :
                # Update motor velocities
                new_speed = int(line[1:])
                left_vel = -new_speed
                right_vel = new_speed
                left.pwm(left_vel)
                right.pwm(right_vel)
            except: 
                pass
                # Error Reading Number
      
    except: 
        pass
        
    utime.sleep_ms(100)

# Stop Car
left.pwm(0)
right.pwm(0)