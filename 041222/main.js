// Day of the Year
// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1

// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

//     The year can be evenly divided by 4;
//     If the year can be evenly divided by 100, it is NOT a leap year, unless;
//     The year is also evenly divisible by 400. Then it is a leap year.




function toDayOfYear(arr) {
    const months = {
      1 : 0,    
      2 : 31,   //31
      3 : 59,   //28
      4 : 90,   //31
      5 : 120,  //30
      6 : 151,  //31
      7 : 181,  //30
      8 : 212,  //31
      9 : 243,  //31
      10 : 273, //30
      11 : 304, //31
      12 : 334  //30
    }
    const day = months[arr[1]] + arr[0]
    return (((arr[2] % 4 == 0) && (arr[2] % 100 != 0)) || (arr[2] % 400 == 0)) && arr[1] > 2 ? day + 1 : day
  }