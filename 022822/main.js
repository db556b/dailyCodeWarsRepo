
// Simple validation of a username with regex
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore

// Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
    let res =  /^[a-z0-9_]+$/.test(username) 
    return username.length > 3 && username.length < 17 && res
  }