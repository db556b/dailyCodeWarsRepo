//p- an integer
//r - a string filled array. if divisible by 3 & 5-return FizzBuzz. If divisble by 3 return "fizz". If divisible by 5 return 'buzz'.. into the array
//e
//p
const fizzBuzz = function(n) {

    
    
    //init array 
 //   return Array.from({length: n}, (e,i) => (i + 1) % 3 === 0 && (i + 1) % 5 === 0 ? "FizzBuzz" : (i + 1) % 3 === 0 ? "Fizz" : (i + 1) % 5 === 0 ? "Buzz" : (i + 1).toString())
    
    let arr = []
    //set up a loop
    for (let i = 1; i <= n; i++){
        i % 3 === 0 && i % 5 === 0 ? arr.push("FizzBuzz") : i % 3 === 0 ? arr.push("Fizz") : i % 5 === 0 ? arr.push("Buzz") : arr.push(i.toString())
            //check if i is divisible by 3, or 5, or both
            //push into arr string of fizz, buzz, fizzbuzz, or i
        // if (i % 3 === 0 && i % 5 === 0){
        //     arr.push("FizzBuzz")
        // } else if ( i % 3 === 0){
        //     arr.push("Fizz")
        // } else if ( i % 5 === 0){
        //     arr.push("Buzz")
        // } else {arr.push(i.toString())}
    }
    return arr    
};


//fizzBuzz(15) return =>  ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]