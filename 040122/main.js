

// Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n){
    let count = 1;
    for(let i=1; i <= n/2; i++){
        if(n%i===0){
            count++
        }
    }
    return count;
}