


// ASCII letters from Number
// You have to create a function that converts integer given as string into ASCII uppercase letters.

// All ASCII characters have their numerical order in table. 


function convert(number){
    number = number.split('')
    let arr = []
    for (let i = 0; i < number.length; i+=2){
      arr.push(`${number[i]}${number[i+1]}`)
      }
    return arr.map((e,i)=> String.fromCharCode(+e)).join('')
  }