
// get character from ASCII Value
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c) {
    return String.fromCharCode(c)
  }

//   ASCII Total
//   You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

//   examples:
  
//   uniTotal("a") == 97 uniTotal("aaa") == 291
  
  function uniTotal (string) {
    return string.split('').reduce((a,b) => a + b.charCodeAt(0), 0)
    }

//     Holiday VI - Shark Pontoon
//     Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

//     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

//     sharkSpeed = how fast it can move in metres/second.

//     pontoonDistance = how far you need to swim to safety in metres.

//     youSpeed = how fast you can swim in metres/second.

//     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

//     The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".


    function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
        let shark = sharkDistance / sharkSpeed
        let me = pontoonDistance / youSpeed
        let answer = dolphin ? shark * 2 > me : shark > me
        return answer ? "Alive!" : "Shark Bait!"
      }

      function shark2(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
        if(dolphin){
          sharkSpeed /= 2;
        }
        return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
      }

    //   MakeUpperCase
    //   Write a function which converts the input string to uppercase.
      function makeUpperCase(str) {
        return str.toUpperCase()
       }

//        Holiday VIII - Duty Free
//        The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

       function dutyFree(normPrice, discount, hol){
        return Math.floor(hol/(normPrice*(discount*.01)))
        }