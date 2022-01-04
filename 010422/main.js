// parameters- whole number consisting of number of days for rental
// return- total cost of car rental as a whole number
// examples
// PseudoCode

// if car rented days >= 7 return d * 40 - 50
// if car rented days >= 3 && < 7 return d * 40 - 20
// if car retned days < 3 return d * 40

//Transportation on vacation
function rentalCarCost(d) {
    const cost = d * 40
    return d > 6 ? cost - 50 : d > 2 ? cost - 20 : cost
  }

rentalCarCost(1) //should return 40
rentalCarCost(2) //shoudl return 80
rentalCarCost(8) //shoudl return 270