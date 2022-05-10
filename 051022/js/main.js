

// No one likes carrying change.
// No one enjoys carrying around spare change. And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something. So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.

// For example: US Currency includes the penny, nickel, dime and quarter or the coins with denominations: [1, 5, 10, 25] If I were to ask you to make 75 cents you would return 3 since 75 cents can be made with 3 quarters.

// NOTES:

//     The coin denominations will contain at least one coin and will be greater than zero. [3] or [1, 100, 19] are both valid.
//     All amounts given will be solvable.
//     Be greedy...

    function coinsNeeded(amount, coins) {
        let change = amount
        let numOfCoins = 0
        coins = coins.sort((a,b)=>a>b)
        console.log(coins)
        for (let i = coins.length - 1; i >= 0; i--){
          if ( change / coins[i] >= 1) {
          numOfCoins += Math.floor(change / coins[i])
          change = change % coins[i]
            }
          }
        return numOfCoins
      }


//       Jaden Casing Strings
//       Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

      String.prototype.toJadenCase = function () {
  return this.split(' ').map((e,i)=> e[0].toUpperCase() + e.substr(1)).join(' ')
};String.prototype.toJadenCase = function () {
  return this.split(' ').map((e,i)=> e[0].toUpperCase() + e.substr(1)).join(' ')
};

// Nth Root of a Number
// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
function root(x, n) {
  return Math.pow(x,1/n)
  }

  // Simple Fun #154: Zero And One
  // You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

  // Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?


  function zeroAndOne(s) {
    let e = s.split('')
    let acc = 0
    for (let i = 0; i<e.length; i++){
    if (e[i] === '0' && e[i+1] === '1' || e[i] ===  '1' && e[i+1] === '0'){
      e[i] = ' '
      e[i+1] = ' '
    } 
    }
      e.forEach(e => e === ' ' ? acc = acc : acc++)
      return acc
    }