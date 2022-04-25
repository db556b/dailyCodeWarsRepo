
//PASSWORD MAKER
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

//     instead of including i or I put the number 1 in the password;
//     instead of including o or O put the number 0 in the password;
//     instead of including s or S put the number 5 in the password.



function makePassword(phrase) {
    return phrase.split(' ')
           .map(e=> e[0])
           .join('')
           .replace(/o/ig,'0')
           .replace(/i/ig,'1')
           .replace(/s/ig,'5')
  }

//    Circle Area inside square
//   Turn an area of a square in to an area of a circle that fits perfectly inside the square.

//   inscribed circle
  
//   You get the blue+red area and need to calculate the red area.
  
//   Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.
  
//   You don't have to worry about error handling or negative number input: area >= 0.
  
//   This kata might be simpler than you expect, but good luck!

  function squareAreaToCircle(size){
    return Math.PI * Math.pow(Math.sqrt(size)/2,2)
  }