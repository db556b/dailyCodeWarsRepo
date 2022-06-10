// parameters- two array- possibly empty
// return- a new array with all elements from a that are not included in b
// examples
// PseudoCode




// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    //flatMap array for each element in a. if included in b, do not return anything.
    return a.flatMap(e => b.includes(e) ? [] : e)
    }


arrayDiff([1,2], [1]) // should return => [2] because 1 is in array b

arrayDiff([1,2,2], [1]) // should return => [2,2] because 1 is in array b

arrayDiff([1,2,2], [2]) // should return => [1] because 2 is in array b

arrayDiff([1,2,2], []) // should return => [1,2,2] because array b is empty

arrayDiff([], [1,2]) // should return => [] because array a is empty

arrayDiff([1,2,3], [1,2]) // should return => [3] because 1 and 2 are in array b