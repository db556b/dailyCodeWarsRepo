// parameters- ande array of numbers that will contain at least one element that will exist more than half of the time in the array (the majority element)
// return- the majority element as an integer
// examples
// PseudoCode

// Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 


var majorityElement = function(nums) {
    //init obj to hold hash map of number of times an element is seen in the array and a test to compare if element is majority element
    let track = {},
        test = nums.length/2
        //map each element storing the nnumber fo times the element is seen in the 'track' var
    nums.forEach(e => {
        //check if current element exists in the track var. if not, add it. if it does, increment counter by one
        track[e] ? track[e]++ : track[e] = 1
    })
    //loop through track obj to find the one that is the majority element
    for (const value in track){
        //test each one for majority element. if it is, return the property (not the value) as an integer
        if (track[value] > test){
            return +value
        }
    }
};


var majorityElement2 = function(nums) {
    let track = {},
        test = nums.length/2
    for (let i = 0; i < nums.length; i++){
        track[nums[i]] ? track[nums[i]]++ : track[nums[i]] = 1
        if(track[nums[i]] >= test){return nums[i]}
    }
};

var majorityElement3 = function(nums) {
    nums = nums.sort()
    const length = nums.length
    return length % 2 === 1 ? nums[Math.floor(length / 2)] : nums[length / 2]
};



// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2