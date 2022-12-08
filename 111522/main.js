// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.



sumStrings = (a,b) => String(BigInt(a) + BigInt(b))