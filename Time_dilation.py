import math
from decimal import *


getcontext().prec = 25
def head_to_foot(height,time):
    vel_head = Decimal(2*math.pi/86400)*(Decimal(6371000) + height)
    vel_foot = Decimal(2*math.pi/86400)*Decimal(6371000)
    dil_time_head = Decimal(time)/(Decimal(1- Decimal(vel_head**2/299792458**2))**Decimal(0.5))
    dil_time_foot = Decimal(time)/(Decimal(1- Decimal(vel_foot**2/299792458**2))**Decimal(0.5))
    val = str(dil_time_head-dil_time_foot)
    if "E" in val:
        val = list(val.split("E"))
        val = (f"{val[0]} 10^{val[1]} second(s)")
    
    return val

def diff_bet_two(height1,height2,time):
    vel_1 = Decimal(2*math.pi/86400)*(Decimal(6371000) + height1)
    vel_2 = Decimal(2*math.pi/86400)*(Decimal(6371000) + height2)
    dil_time_1 = Decimal(time)/(Decimal(1- Decimal(vel_1**2/299792458**2))**Decimal(0.5))
    dil_time_2 = Decimal(time)/(Decimal(1- Decimal(vel_2**2/299792458**2))**Decimal(0.5))
    val = str(abs(dil_time_1-dil_time_2))
    if "E" in val:
        val = list(val.split("E"))
        val = (f"{val[0]} 10^{val[1]} second(s)")
    
    return val

height1 = Decimal(input("Enter height of person 1 : "))
height2 = Decimal(input("Enter height of person 2 : "))
time = Decimal(input("Enter time interval : "))
time = time*86400

print(head_to_foot(height1,time))
print(diff_bet_two(height1,height2,time))
