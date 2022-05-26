// parameters- two arguments
// return- return arguments together to form a first name and last name
// examples
// PseudoCode


// Grasshopper - Combine strings
// Combine strings function

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')

// returns:

// 'James Stevens'



//function takes in multiple arguments
function combineNames(...args){
    //return those arguments joined with a space between them
    return args.join(' ')
    }




    combineNames('James', 'Dean')  // should return 'James Dean'
    combineNames('Post', 'Malone') // should return 'Post Malone'
    combineNames('John', 'Travolta') // should return 'John Travolta'
    combineNames('John', 'Smith') // should return 'John Smith'