// parameters- a string containing space-separated positive numbers 
// return- a string containing space-separated numbers consisting of a list of all the discounted prices as specified in the instructions
// examples
// PseudoCode



// Find the discounted prices
// Your friend Cody has to sell a lot of jam, so he applied a good 25% discount to all his merchandise.

// Trouble is that he mixed all the prices (initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

// For example, consider this inputs:

// "15 20 60 75 80 100"
// "9 9 12 12 12 15 16 20"

// They should output:

// "15 60 75"
// "9 9 12 15"

// Every input will always have all the prices in pairs (initial and discounted) sorted from smaller to bigger.

// You might have noticed that the second sample input can be tricky already; also, try to have an eye for performances, as huge inputs could be tested too.

// Final Note: kata blatantly taken from this problem (and still not getting why they created a separated Code Jam for ladies, as I find it rather discriminating...).



function findDiscounted(prices){
    // return empty string if the argument is empty
    if (prices === '') return '';
    //split prices on the space to get an array of strings containing numbers
    prices = prices.split(' ')
    //init return array
    let retArr = []
    //change all strings in prices array to numbers
    for (let i = 0; i < prices.length; i++){
      prices[i] = +prices[i]
    }
    //loop through array
    for (let i = 0; i < prices.length; i++){
        //init index of last version of price of current value grabbed by loop
      let index = prices.lastIndexOf(+prices[i] * 4/3)
      //if current price times 4/3 has already been seen and used (continue)
      if(prices[i] === -1){continue}
      else{
        //push price into return arr and convert to string
          retArr.push(prices[i].toString())
          //change last index of price * 4/3 to -1. All inputs in the prices array are positive, so changing to a negative number will help loop go faster
          prices[index] = -1
      }
    }
    //return joined array in string for joined with spaces as required by the instructions.
    return retArr.join(' ')
  }

findDiscounted("15 20 60 75 80 100") // should return => "15 60 75");
findDiscounted("9 9 12 12 12 15 16 20") // should return => "9 9 12 15");
findDiscounted("750000000 1000000000") // should return => "750000000");
findDiscounted("0 0") // should return => "0");
findDiscounted("") // should return => "");