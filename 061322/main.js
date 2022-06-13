// parameters- a string containing various letters
// return trueif there are an even number of x's and o's; false otherwise
// examples
// PseudoCode

// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    //init x and o arrays
    let x = [], 
        o = []
        //split string into array. Loop through each item in the array
    str.split('').forEach( e => {
        // if element canverted to lower case === pertinent x/o push into pertinent array
      if ( e.toLowerCase() === 'x' ) x.push(e)
      if ( e.toLowerCase() === 'o' ) o.push(e)
  })
    //return comparison between length of x array and o array
    return x.length === o.length
  }




XO('xo') // should return => true  because there is the same number of x's and o's in the argument
XO("xxOo") // should return => true because there is the same number of x's and o's in the argument
XO("xxxm") // should return => false  because there is not the same numnber of x's and o's in the passed argument string
XO("Oo") // should return => false because there is not the same numnber of x's and o's in the passed argument string
XO("ooom") // should return => false because there is not the same numnber of x's and o's in the passed argument string



const XO2 = str => {
    //split string into array
    str = str.toLowerCase().split('');
    //return comparison of two returned arrays (one checking for x's and the other for o's)
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }