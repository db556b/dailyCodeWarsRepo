// parameters- a string of letter containing 'IVXLCDM' and not other letters
// return- the value as an integer of the total of the Roman numerals
// examples
// PseudoCode


// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

// Constraints:

//     1 <= s.length <= 15
//     s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//     It is guaranteed that s is a valid roman numeral in the range [1, 3999].




var romanToInt = function(s) {
    //init values object holding totals for all combos of potential numbers
    let values = {
        'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000,'IV' : 4,'IX' : 9,'XL' : 40,'XC' : 90,'CD' : 400,'CM' : 900
    }
    //copy (to not alter the original input) and split argument into individual values
    let arr = s.slice().split('')
    //loop through each value checking the next value to verify it is not a subtraction combo
    for (let i = 0; i < arr.length; i++){
        //each if statement declares separate instances where the letters need to be combined into a singular array element
        if (arr[i] === 'I' && (arr[i+1]=== 'V' || arr[i+1] === 'X')){
            arr[i] += arr[i+1];
            arr.splice(i+1,1)
        } else if (arr[i] === 'X' && (arr[i+1]=== 'L' || arr[i+1] === 'C')){
            arr[i] += arr[i+1];
            arr.splice(i+1,1)
        } else if (arr[i] === 'C' && (arr[i+1]=== 'D' || arr[i+1] === 'M')){
            arr[i] += arr[i+1];
            arr.splice(i+1,1)
    }
    }
    //map array replacing their letter values with their numeric equivalents
    arr = arr.map(e=> values[e])
    //return reduced array of the numeric values
    return arr.reduce((a,b) => a+b,0)
};

//refactor
var romanToInt2 = function(s) {
    //init values of all combinations possible
    let values = {
        'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000,'IV' : 4,'IX' : 9,'XL' : 40,'XC' : 90,'CD' : 400,'CM' : 900
    }
    //copy (to not alter the original input) and split argument into individual values
    let arr = s.slice().split('')
    //loop through each value
    for (let i = 0; i < arr.length; i++){
        //check current element's value per 'values' object to the next element's value in the 'values' object enter if when value of current element is less than the value of the next element requiring a combination of the current element and the next element
        if (values[arr[i]] < values[arr[i+1]]){
            //concat next element onto end of current element
            arr[i] += arr[i+1];
            //remove the next element before exiting if statement
            arr.splice(i+1,1)
    }
    }
    //return a mapped arr replacing Letter Roman values with their integer values, reduce array to a singular number
    return arr.map(e=> values[e]).reduce((a,b)=>a+b,0)
};