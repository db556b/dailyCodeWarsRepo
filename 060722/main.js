// parameters- two arrays- possibly empty or null
// return- true or false. True if the second array contains every number from the first array squared
// examples
// PseudoCode




// Are they the "same"?
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.



function comp(array1, array2){
    //return false when either array is falsy
    if (!array1 || !array2) return false;
    //map array 1 to square each number and sort it. Saved in new variable, so array1 does not get overwritten
    const array3 = array1.map(e => e**2).sort((a, b) => a - b)
    //sort array2
    array2.sort((a,b) =>a-b)
    //check is every element in array3 matches with its counterpart in array2. If this new array contains a false-return false. otherwise return true
    return array3.map((e,i) => e === array2[i] ? true : false).includes(false) ? false : true
  }


const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2))

const a3 = [];
const a4 = false;
console.log(comp(a3, a4))




//Parameters- mone array of strings containing words (colors)
//Return- return the number of matching pairs of strings in the argument
//E
//p

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves) {
    //instantiate a counter
    let counter = 0;
    //copy gloves to a local variable to not change the original and sort it
    let copyGloves = [...gloves].sort();
    //initiate loop
    for (let i = 0; i < copyGloves.length; i++) {
        //check current index against next index to see if they are the same
        if (copyGloves[i] === copyGloves[i+1]) {
            //if match found, increase counter for pairs
            counter++;
            //remove the current index and the one next to it
            copyGloves.splice(i, 2)
            //reduce incrementer by 1 due to removing two items from array
            i--;
        }
    }
    //return counter
    return counter;
}


numberOfPairs(['red','red']) //should return ===> 1 because there is one pair (red) found in the array
numberOfPairs(['red','green','blue']) //should return ===> 0 because there are no pairs found in the array
numberOfPairs(['gray','black','purple','purple','gray','black']) //should return ===> 3 because there are three pairs (gray, purple and black) found in the array