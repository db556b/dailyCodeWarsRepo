// parameters- a string containing a ramdom length in characters
// return- the string parameter with all the vowels (excluding y) removed from the value
// examples
// PseudoCode


// Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    //replace all vowels ('aeiou') with ''
    return str.replace(/[aeiou]/ig,'');
  }


disemvowel("This website is for losers LOL!") // should return =>  "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read") // should return =>  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
disemvowel("What are you, a communist?") // should return =>  "Wht r y,  cmmnst?"



//p- a string containing space-separated numbers
//r- a string containing the highest number followed by the lowest number in the argument

// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){
    //save new var with argumnet split on the spaces
    const num = numbers.split(' ')
    //return joined array containing the highest and lowest numbers
    return [Math.max(...num),Math.min(...num)].join(' ')
  }


  highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") // should return => "42 -9" because 42 is the highest number in the argument and -9 is the lowest number
  highAndLow("1 2 3") // should return => "3 1" because 3 is the highest number in the argumnet and 1 is the lowest



//   Sorted? yes? no? how?
//   Complete the method which accepts an array of integers, and returns one of the following:

//   "yes, ascending" - if the numbers in the array are sorted in an ascending order
//   "yes, descending" - if the numbers in the array are sorted in a descending order
//   "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.


  function isSortedAndHow(array) {
    let asc = false,
        des = false
    console.log(array)
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] === array[i +1]){continue}
      array[i] > array[i + 1] ? des = true :  asc = true 
    }
      return asc === true && des === true ? 'no' : asc === true ? 'yes, ascending' : 'yes, descending'
    }



//     Crash Override
//     Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.




    function aliasGen(f,l){
        let first = f.toUpperCase()[0],
            last = l.toUpperCase()[0]
        return !firstName[first] || !surname[last]  ? "Your name must start with a letter from A - Z." : `${firstName[first]} ${surname[last]}` 
    }