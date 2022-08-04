// parameters- some iterable
// return- an array
// examples 
// PseudoCode


function uniqueInOrder(iterable){
    //init new array for returning
    let arr = []
    //loop through each item in the argument
    //check if neighbor is the same or different
    for(let i = 0; i < iterable.length;i++){
        let first = iterable[i]
        let next = iterable[i + 1]
        if(first != next){
            arr.push(first)
          // i = 0, i + 1 = 1 A A A A ... i = 4, B
        }
    }
    return arr
}

function uniqueInOrder2(iterable){
    //declare arr for later return insert iterable[0] into the array since that must be a unique char or and empty arr if iterable is empty
    let arr = iterable[0] ? [interable[0]] : []
    //loop through each element in argument
    for (let i = 1; i < iterable.length; i++){
        //if current element === the last element in arr do nothing. If no match, push the unique item
        iterable[i] === arr[arr.length - 1] ? false : arr.push(iterable[i])
    }
    //return arr
    return arr
  }





// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

uniqueInOrder('AAAABBBCCDAABBB')//should return ==> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')        //should return ==> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])      //should return ==> [1,2,3]
uniqueInOrder('AAAABBBCCDAABBB')// should return =>  ['A','B','C','D','A','B'] because it removes all of the same characters that are next to each other. 



































































