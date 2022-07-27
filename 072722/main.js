// parameters- a string of random text
// return- if the argument is less than 2 or greater than 100 in length, return 'invalid string' else return the odd indexed elements of the string as an array
// examples
// PseudoCode

// Return a string's even characters
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string". 

function evenChars(string) {
    //test ifstring is greater than 100  or less than 2 in lengtth and return 'invlaid string' if either is true
    //split string, filter for odd indexed items and return array of those items
    return string.length < 2 || string.length > 100 ? 'invalid string' : string.split('').filter((_,i)=> i%2===1)
    }



evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva") // should return =>  "invalid string" because this is an invalid string according to the description (too long)
evenChars ("a") // should return =>  "invalid string" because this is an invalid string according to the description (too short)
evenChars ("") // should return =>  "invalid string" because this is an invalid string according to the description (too short)
evenChars ("1234") // should return =>  ["2", "4"] as these are the odd indexed characters in the argument
evenChars (";;;--") // should return =>  [";", "-"] as these are the odd indexed characters in the argument
evenChars ("abcdefghijklm") // should return =>  ["b", "d", "f", "h", "j", "l"] as these are the odd indexed characters in the argument


