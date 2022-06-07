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