// parameters- P will be an integer between 0 and 9999, interest rate will always be a decimal between 0 and 1, number of periods will always be an integer between 0 and 50
// returnreturn an array consisiting of [amount paid back in simple interest, amount paid back in compound interest]
// examples
// PseudoCode


// Simple Interest and Compound Interest
// Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

// Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

// Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

function interest(P,r,n) {
    //simple interest formula is A=P(1+rt) compound interest formula is A=P(1+r/n)**nt
    return [Math.round(P+(P*r*n)), Math.round(P*Math.pow(1+r,n))]
  }



  interest(100, 0.1,  1)  // should return [110, 110]
interest(100, 0.1,  2)  // should return [120, 121]
interest(100, 0.1, 10)  // should return [200, 259]