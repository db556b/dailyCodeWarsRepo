//Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

//Function:

//getNumberFromString(s)

function getNumberFromString(s) {
    return Number(s.split("").filter(x => "0" <= x && x <= "9").join(""));
  }