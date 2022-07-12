// parameters- a string consisting of characters '(){}[]' in randomized order
// return- boolean of whether the characters in the argument are in an order that would allow for proper order to ensure all opening chars '({[' are properly and orderly closed by their closing counterparts ')}]'
// examples- below
// PseudoCode- below

// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.




var isValid = function(s) {
    //init obj with closing values keyed to their closing counterpart
    const closures = {'(' : ')', '{' : '}', '[' : ']'}
    //init array for holding current element value in array when it does not match value from k/v pair in object
    let current = []
    //split string argument into array and loop through each element
    s.split('').forEach(e => {
        //check each element against the last element in the 'current' temp array
        e === closures[current[current.length - 1]] ? 
        //if current element matches the value for the key of the last element in the current array, pop the last element off the current array
                    current.pop() : 
        //push the current element into the current array if it does not match
                    current.push(e)
    })
    //return boolean of whether the current array is empty. if it is then the values in s are in the right order, if not then there was a mismatched pair
    return current.length === 0
}


isValid("()")//should return true as all chars in the array are properly closedd
isValid("()[]{}")//should return true as all chars in the array are properly closedd
isValid("(]")//should return false as the '(' is not properly closed with a ')' and is instead closed with a ']'