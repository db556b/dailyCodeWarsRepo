// parameters- a string of '(' and ')'
// return- true if every open paran has a matching closing paren in the correct order
// examples
// PseudoCode


// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
    //init arr for pushing paren in
    let arr = []
    parens.split('').forEach(e=>{
        //if element is ')' and the last element in the arr array is ')'
      if (e === `)` && arr[arr.length - 1] === `(`){
        //if 
        arr.pop()
      } else {
        arr.push(e)
      } 
    })
    return arr.length === 0
  }




  
validParentheses( "(" ) // should return =>  false 
validParentheses( ")" ) // should return =>  false 
validParentheses( "" ) // should return =>  true 
validParentheses( "()" ) // should return =>  true 
validParentheses( "())" ) // should return =>  false 