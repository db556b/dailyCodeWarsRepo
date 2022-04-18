//Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

//Function:

//getNumberFromString(s)

function getNumberFromString(s) {
    return Number(s.split("").filter(x => "0" <= x && x <= "9").join(""));
  }


//   Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


solution = (nums) => nums === null ? [] : nums.sort((a,b)=> a-b)

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
    return  data.map(e => e[0] > 54 && e[1] > 7 ? 'Senior' : 'Open')
     }

     