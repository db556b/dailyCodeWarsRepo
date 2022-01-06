// parameters- two numbers representing two angles of a triangle
// return- the thrid angle of a triangle as a number
// examples - below
// PseudoCode

// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    //all triangles' angles add up to 180. 
    //subtracting the other two angles from 180 will return the measure of the third angle
    return 180 - a - b;
  }


otherAngle(90,30) // shoudl return 60
otherAngle(120,50) // should return 10
otherAngle(45,45)  // should return 90