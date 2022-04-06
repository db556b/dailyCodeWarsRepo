
// Compare Number
// I saw @myjinxin2015's Simple Fun #264: Compare Two Integers and thought, "hey what if the two numbers ain't integers, ain't always positive and could have leading zeros?"

// Compare two numbers given as strings. Return 'less' if a < b, 'equal' if a = b, and 'greater' if a > b.
// NOTE

//     The numbers a and b are given as string
//     They can be positive or negative
//     They can have leading zeros in the characteristic part and trailing zero in the mantissa part 

// 12.34 => characteristic part = 12; mantissa part = 34



function compare(a,b){
	const numA = +a,
        numB = +b
  if (numA > numB) return 'greater'
  if (numA < numB) return 'less'
  a = a.split('')
  b = b.split('')
  for (let i = 0; i < a.length || i < b.length; i++){
    if (+a[i] > +b[i]) return 'greater'
    if (+a[i] < +b[i]) return 'less'
  }
  return 'equal'
}