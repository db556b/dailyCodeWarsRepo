// parameters- whole number, possibly negative
// return- a number
// examples- below 
// PseudoCode


function getRealFloor(n){
    //num is greater than 14 should return n - 2 (this needs to be done first otherwise the n > 0 with be truthy for numbers higher than 14)
    //num is greater than 0 and less than 14 should return n-1
    //num is a negative number (subfloors) should return the num
return   n > 12 ? n - 2 : 
           n > 0 ? n - 1:
           n
} 


getRealFloors(5) //return 4
getRealFloors(15) // return 13
getRealFloors(-15) // return -15



