// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    let word2 = word.toLowerCase().split('')
    let arr = []
    word.toLowerCase().split('').forEach(e => {
      if (word2.indexOf(e, word2.indexOf(e) + 1) === -1){
        arr.push(`(`)
      } else {arr.push(`)`)}
    })
  return arr.join('')
}

function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
