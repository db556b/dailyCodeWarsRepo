// parameters- an array of words that may have starting letters in common
// return- a string containing the first set of common letter among all of the words passed as an argument
// examples
// PseudoCode


// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.



var longestCommonPrefix = function(strs) {
    //alphabetize strings
    strs = strs.sort()
    //init var as the common letters (for comparison later) to strs[0]
    let common = strs[0].split('')
    //init for loop i set to strs.length - 1 to work from the end (as these will have the least in common with the first or 0th indexed element) and work toward the original common
    for (let i = strs.length-1; i > 0; i--){
        //if common is empty, there are no common prefixes, break out of loop
        if (common === ''){break}
        //init current var to hold a split copy of the current element
        let current = strs[i].split('')
        //init new for loop to compare current letter to the 'current' var
        for (let j = 0; j < common.length; j++){
            //when the current letter element does not equal the same position in the 'current' var
            if (current[j] !== common[j]){
                //save the slice as common. if j is 0 then the element has 0 letters in common, so make common equal empty quotes
                common = j === 0 ? '' : current.slice(0, j)
            }
        }
    }
    //check if common is empty quotes, if so return those quotes; otherwise return common joined. 
    return common === '' ? common : common.join('')
};

//this can be optimized further- likely shoudl use a divide and conquer by initing two separate loops to do comparison and then compare the final responses of the two separate end common prefixes