//ALTERNATE CAPITALIZATION

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    return [
        [...s].map((e,i)=> i%2==0?e.toUpperCase():e).join(''), 
        [...s].map((e,i)=> i%2==1?e.toUpperCase():e).join('')
    ]
  };

  
  //ALPHABET SYMMETRY
  
//   Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

//   Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
  
//   solve(["abode","ABc","xyzD"]) = [4, 3, 1]
  
//   See test cases for more examples.
  
//   Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
  
//   Good luck!

  function solve(arr){  
    const str = `abcdefghijklmnopqrstuvwxyz`
    let arr2= []
    for (let i = 0; i < arr.length; i++ ){
      arr2[i] = 0
    }
    for (let i = 0; i < arr.length ; i++){
      for (let j = 0; j<arr[i].length ; j++){
        if ([...arr[i]][j].toLowerCase() === [...str][j]){
          arr2[i] += 1
        }
      }
    }
      return arr2
    };