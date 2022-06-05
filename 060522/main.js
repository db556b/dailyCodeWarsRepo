// parameters- an object containing specfici items
// return- an array with added greeting property
// examples
// PseudoCode


// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?


function greetDevelopers(list) {
    //loop through every item in the list array.
    for (let i = 0; i<list.length; i++){
        //add new property to objects in the list array
      list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
    }
    //return list
    return list
  }



function greetDevelopers2(list) {
    list.forEach(function(developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    
    return list;
  }