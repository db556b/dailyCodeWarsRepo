// parameters- a singulat integer
// return- true or false. true if argument is a palindrone number. false if not
// examples
// PseudoCode

// Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

//     For example, 121 is a palindrome while 123 is not.


 var isPalindrome = function(x) {
    //return comparison between argument and a split reversed joined version of teh same number
    return x === +(String(x).split('').reverse().join(''))
};



isPalindrome(121)// sghould return true as 121 is the same forwards and backwards
isPalindrome(132)//should return false as 132 backwards is 231. 