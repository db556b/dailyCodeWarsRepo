
function solve(arr) {
    return arr.reduce((acc, curr) => {
      return acc * ([...new Set(curr)]).length
    }, 1)
  };