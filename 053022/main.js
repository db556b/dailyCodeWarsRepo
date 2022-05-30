// parameters- single string with or without spaces
// return- either the string without spaces or "You just wanted my autograph didn't you?" if the string contains no spaces
// examples
// PseudoCode


// Ghostbusters (whitespace removal)
// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

function ghostBusters(building) {
    //test if there is a space by checking result to be returned against the orginal argumnet. If they are the same, return witty remark. If not return argument without spaces. 
    return building.split(" ").join("") === building ? "You just wanted my autograph didn't you?" : building.split(" ").join("")
  }


ghostBusters("Factor y") //should return "Factory"  because there is a space in the string argument
ghostBusters("O  f fi ce") //should return "Office" because there is a space in the string argument
ghostBusters("BusStation") //should return "You just wanted my autograph didn't you?" because there is no space in the string argument
ghostBusters("Suite ") //should return "Suite" because there is a space in the string argument

