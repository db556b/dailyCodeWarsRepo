// parameters- two positive integers. OEach one represents the side of a rectangle
// return- the side measurements of all the squares contained within the rectangle
// examples
// PseudoCode


function sqInRect(l, w){
    //check whether the arguments make a square. Return null in this instance. 
    if (l === w){return null}
    //declare array to be returned later
    let arr = []
    //loop through and verify length and width are not 0 (when one becomes zero, there are no more squares left in the rectangle)
    while (l > 0 && w > 0){
    //check if length is greater than width. If is it, push the width into the array. Subtract width fron length
      if (l > w){
        arr.push(w)
        l -= w
      }
    //check if width is greater than length. If is it, push the length into the array. Subtract length from width
      else if (w > l){
        arr.push(l)
        w -= l
      }
      //if it has made it this far, then width must be equal to length. push length (or width) into the arr and break
      else {
      arr.push(l)
      break
      }
    }
    //return arr according to the return requirements
      return arr
  }



  sqInRect(5, 5) // should return =>  null)
  sqInRect(5, 3) // should return =>  [3, 2, 1, 1])
  sqInRect(3, 5) // should return =>  [3, 2, 1, 1])
  sqInRect(20, 14) // should return =>  [14, 6, 6, 2, 2, 2])
  sqInRect(14, 20) // should return =>  [14, 6, 6, 2, 2, 2])
  sqInRect(240, 32) // should return =>  [32, 32, 32, 32, 32, 32, 32, 16, 16])
  sqInRect(6250, 250) // should return =>  [250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250])
  sqInRect(625, 230) // should return =>  [230, 230, 165, 65, 65, 35, 30, 5, 5, 5, 5, 5, 5])
  sqInRect(731, 230) // should return =>  [230, 230, 230, 41, 41, 41, 41, 41, 25, 16, 9, 7, 2, 2, 2, 1, 1])
  sqInRect(37, 14) // should return =>  [14, 14, 9, 5, 4, 1, 1, 1, 1])