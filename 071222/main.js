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


//  isValid("()")      //should return true as all chars in the array are properly closedd
//  isValid("()[]{}")      //should return true as all chars in the array are properly closedd
//  isValid("(]")      //should return false as the '(' is not properly closed with a ')' and is instead closed with a ']'



var removeDuplicates = function(nums) {
    let i = 0,
        length = nums.length
    for (let i = 0; i<length; i++){
        if (i !== nums.lastIndexOf(nums[i])){
           // console.log(`if ${i + 1} ${nums.lastIndexOf(nums[i] - i)}`)
            nums.splice(i+1, nums.lastIndexOf(nums[i])-i)
            length = nums.length
           // console.log(length, nums)
        }
        else {console.log(`else ${i}`)}
    }
        console.log(nums)
        return nums
    };

    console.log(removeDuplicates([1,1,1,1,1,2,3,3,3,3,4,5,5,5,5,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9]))


    // Length of Last Word
    // Given a string s consisting of words and spaces, return the length of the last word in the string.

    // A word is a maximal substring consisting of non-space characters only.
    
     
    
    // Example 1:
    
    // Input: s = "Hello World"
    // Output: 5
    // Explanation: The last word is "World" with length 5.
    
    // Example 2:
    
    // Input: s = "   fly me   to   the moon  "
    // Output: 4
    // Explanation: The last word is "moon" with length 4.
    
    // Example 3:
    
    // Input: s = "luffy is still joyboy"
    // Output: 6
    // Explanation: The last word is "joyboy" with length 6.
    
     
    
    // Constraints:
    
    //     1 <= s.length <= 104
    //     s consists of only English letters and spaces ' '.
    //     There will be at least one word in s.
    
    

    var lengthOfLastWord = function(s) {
        //take string and trim it to remove trailing spaces. then split it
        s = s.trim().split(' ')
        //return the length of the last element in the split array
        return s[s.length - 1].length
    };



//     Implement strStr()
//     Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

 

// Constraints:

//     1 <= haystack.length, needle.length <= 104
//     haystack and needle consist of only lowercase English characters.




    var strStr = function(haystack, needle) {
        //ummmm...... return the indexOf the needle from the string haystack
        return haystack.indexOf(needle)
    };



    // Plus One
    // You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

    // Increment the large integer by one and return the resulting array of digits.
    
     
    
    // Example 1:
    
    // Input: digits = [1,2,3]
    // Output: [1,2,4]
    // Explanation: The array represents the integer 123.
    // Incrementing by one gives 123 + 1 = 124.
    // Thus, the result should be [1,2,4].
    
    // Example 2:
    
    // Input: digits = [4,3,2,1]
    // Output: [4,3,2,2]
    // Explanation: The array represents the integer 4321.
    // Incrementing by one gives 4321 + 1 = 4322.
    // Thus, the result should be [4,3,2,2].
    
    // Example 3:
    
    // Input: digits = [9]
    // Output: [1,0]
    // Explanation: The array represents the integer 9.
    // Incrementing by one gives 9 + 1 = 10.
    // Thus, the result should be [1,0].
    
     
    
    // Constraints:
    
    //     1 <= digits.length <= 100
    //     0 <= digits[i] <= 9
    //     digits does not contain any leading 0's.
    
    

    var plusOne = function(digits) {
        //loop through argument starting at the end
        for (let i = digits.length - 1; i >= 0; i--){
            //if element is the first element and that element is 9
            if (i === 0 && digits[i] === 9){
                //change current element to 0
                digits[i] = 0
                //unshift a 1 to the beginning of the array
                digits.unshift(1)
                //return argument
                return digits
                //if element is 9
            } else if (digits[i] === 9){
                //change to 0 and restart loop from beginning
                digits[i] = 0
                //if no if staments are true
            } else {
                //add one to the current element
                digits[i]++;
                //return argument with change
                return digits
            }
        }
        };