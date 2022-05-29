// parameters- a string of text
// return- should return the words in the test in reverse order, but not reversing the order of the letters in the words
// examples
// PseudoCode



// Reversing Words in a String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Happy coding!



function reverse(string){
    //return the string after spliting on the space between words, reversing, and then rejoining them on a space
    return string.split(' ').reverse().join(' ')
  }



  
reverse('I am an expert at this')// shoulr return  'this at expert an am I'
reverse('This is so easy')// shoulr return  'easy so is This'
reverse('no one cares')// shoulr return  'cares one no'
reverse('')// shoulr return  ''
reverse('CodeWars')// shoulr return  'CodeWars'