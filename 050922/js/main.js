// Will there be enough space?
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


function enough(cap, on, wait) {
    const pass = cap - on - wait
    return pass >=0 ? 0 : Math.abs(pass)
  }
  //7kyu string ladder
  // String Ends With?
  // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

  function solution(str, ending){
    return str.endsWith(ending)
  }


  // Simple Comparison?
  // Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

  // To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
  
  function add(a, b){
    return a == b
  }