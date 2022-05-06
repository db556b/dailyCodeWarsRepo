
// get character from ASCII Value
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c) {
    return String.fromCharCode(c)
  }

//   ASCII Total
//   You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

//   examples:
  
//   uniTotal("a") == 97 uniTotal("aaa") == 291
  
  function uniTotal (string) {
    return string.split('').reduce((a,b) => a + b.charCodeAt(0), 0)
    }