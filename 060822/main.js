// parameters- one array with strings inside
// returnas- the number of matching pairs of items in the array
// examples
// PseudoCode 

// Pair of gloves
// Pair of gloves

// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves){
    //copy and sort gloves array into a new variable to not destroy or alter the orginal array
    let gloves2 = gloves.slice(0).sort()
    //set acc to 0 for later return 
    let acc = 0
    //initiate loop through sorted array/
    for (let i = 0; i < gloves2.length - 1; i++){
        //check current element against the next element for a match
      if (gloves2[i] === gloves2[i + 1]){
          //increase accumulator
        acc++
        //remove current element and the next element in the array
        gloves2.splice(i,2)
        //decrement i when a match is found to not bypass anything after the elements have been removed
        i--
      }
    }
    //return acc
    return acc
  }


  numberOfPairs(['red','red'])  //should return 1 because there is only one pair (red,red)
  numberOfPairs(['red','green','blue']) //should return 0 because there are no pairs in the array
  numberOfPairs(['gray','black','purple','purple','gray','black']) //should return 3 because there are three pairs (gray,grey/purple,purpler/black,black) test


