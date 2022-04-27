//Training JS #1: create your first JS function and print "Hello World!"

// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

//       --------keyword "function"
//       |       ----your function name  
//       |       |    ---if needed, some arguments will appear in brackets
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"

// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen(){
//   var somewords="This is an example."
//   console.log(somewords)
// }

// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will become more and more like it.
// Task

// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


function helloWorld(){
    var str='Hello World!'
    console.log(str)
    }


    //Turn with a Compass

    // You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

    // Return the direction you will face after the turn.


    function direction(facing, turn){
        const compass = {N:0,NE:45,E:90,SE:135,S:180,SW:225,W:270,NW:315}
        let end = compass[facing] + (turn%360)
        end >= 360 ? end -= 360 : end < 0 ? end = 360 + end : end = end
        return Object.keys(compass).find(key => compass[key] === end)
      }

      //RGB to Hex Conversion

    //   The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

    //   Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

    function rgb(r, g, b){
        let rgb = [r,g,b]  
        return rgb.map(e => e > 255 ? 255 : e < 0 ? 0 : e).map(e => e < 10 ? '0' + e : e)
          .map(e=>typeof(e) != 'number' ? e : e.toString(16).toUpperCase())
          .map ((e) => e.length == 1 ? '0' + e : e) 
          .join('')
      }