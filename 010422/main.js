// parameters- whole number consisting of number of days for rental
// return- total cost of car rental as a whole number
// examples
// PseudoCode

// if car rented days >= 7 return d * 40 - 50
// if car rented days >= 3 && < 7 return d * 40 - 20
// if car retned days < 3 return d * 40

//Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
    const cost = d * 40
    return d > 6 ? cost - 50 : d > 2 ? cost - 20 : cost
  }

rentalCarCost(1) //should return 40
rentalCarCost(2) //shoudl return 80
rentalCarCost(8) //shoudl return 270