
// Basic variable assignment
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
var name = a + b;

//Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b

// Even or Odd
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
  }



//   Simple Fun #347: Bulb Maze I
//   You walk in a maze. You need to reach the exit through many rooms. These rooms are in a straight line.

// You can only walk in the dark. Otherwise, you will be caught by the enemy.

// Your trouble is that some rooms have light bulbs. If the light bulb is bright when you enter the room. You were caught by the enemy.

// Fortunately, the status of these bulbs (on/off) is aoto-switched every minute. So you have a chance to go through the maze.
// Task

// Let's us use a string map to represent these rooms， like this: "xo oxox".

// "x" means there is a bulb in the room, and its initial status is off;

// "o" means there is a bulb in the room, and its initial status is on;

// " "(space) means a room without bulb, it's always dark.

// Your task is to determine if you can go through the maze. Return true if you can, false otherwise.
// Note

//     Your initial position is the most left, the exit position is the most right.

//     Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.

// Examples

// For map = "xo oxox". The output should be true.

// step 0 :  xo oxox
//           ^ <--------You are here
// step 1 :  ox xoxo
//            ^ <--------You are here
// step 2 :  xo oxox
//             ^ <--------You are here
// step 3 :  ox xoxo
//              ^ <--------You are here
// step 4 :  xo oxox
//               ^ <--------You are here
// step 5 :  ox xoxo
//                ^ <--------You are here
// step 6 :  xo oxox
//                 ^ <--------You are here
// step 7 :  ox xoxo
//                  ^ <--------You've go through the maze :)

// For map = "xo oxox". The output should be false.

// step 0 :  xo  oxox
//           ^ <--------You are here
// step 1 :  ox  xoxo
//            ^ <--------You are here
// step 2 :  xo  oxox
//             ^ <--------You are here
// step 3 :  ox  xoxo
//              ^ <--------You are here
// step 4 :  xo  oxox
//               ^ <--------You were caught by the enemy :(



  function bulbMaze(maze){
    let result = true
    maze.split('').forEach((e,i) => {
      if (i % 2 === 0 && e === 'x' || e === ' '){
        result = result
      } else if ( i % 2 === 1 && e === 'o' || e === ' '){
        result = result
      } else { result = false }
    })
    return result
  }



//   Calculate Parity bit!
//   A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

//   You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.
  
//   Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.
  function checkParity(parity, bin){
    let sum = bin.split('').reduce((a,b)=>a+ +b, 0) % 2
    return parity === 'even' && sum === 1 || parity === 'odd' && sum === 0 ? 1 : 0 
  }