

// Geometry Basics: Circle Area in 2D
// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:

// // Represents a Circle where center is a Point and radius is a Number
// class Circle {
//   constructor(center, radius) { 
//     this.center = center; 
//     this.radius = radius;
//   }
// }



function circleArea(circle){
    return (Math.PI * (circle.radius ** 2))
  }