// 'x' marks the spot.

// #'x' marks the spot

// ##Task:

// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.


const xMarksTheSpot = (input) => {
    let x = 0
    let y = []
    input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
    if(x != 1){
      return []
    }else {
      input.forEach((e,i)=> e.forEach(el=> el.includes('x') ? y.push(i,e.indexOf('x')) : false))
    }
    return y
  }