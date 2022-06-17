// parameters
// return
// examples
// PseudoCode



// Split The Bill

// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

//     The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
//     The function should return an object/dict with the same names, showing how much money the members should pay or receive.

// Further points:

//     The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
//     If value is a decimal, round to two decimal places.

// Translations and comments (and upvotes!) welcome.

function splitTheBill(x) {
    let a = x
    let arr = []
    let average
    for (let key in x){arr.push(x[key])}
    average = ((arr.reduce((a,b) => a + +b, 0)) / arr.length)
    for (let key in a){x[key] = Math.round((x[key] - average) * 100) / 100}
    return a
  }