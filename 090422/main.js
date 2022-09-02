
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    str = str.includes('_') ? str.split('_') : str.split('-');
    let arr = [];
    return str.map((e,i) =>{
      if (i === 0){
        return e;
      } else {
        e = e.split('')
        e[0] = e[0].toUpperCase()
        return e.join('')
      }
    }).join('')
  }