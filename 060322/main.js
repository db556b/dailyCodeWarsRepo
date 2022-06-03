// parameters- a string containing words and exclamation points, a positive integer 
// return- the string with the N number of exclamation points removed
// examples
// PseudoCode



// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s,n){
    //split and map s
    return s.split('').map(e => {
        //check for element to equal '!' and ensure only removing max of n '!'
      if (e === '!' && n > 0) { 
          //when match found decrement n to ensure we do not remove too many '!'
        n-- 
        //return empty quotes when condition met
        return ''}
        //return element when condition is not met
      return e
      //join mapped array
    }).join('')
    }



remove("!!!Hi !!hi!!! !hi",1)  //should return =>  "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3)  //should return =>  "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5)  //should return =>  "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100)  //should return =>  "Hi hi hi"