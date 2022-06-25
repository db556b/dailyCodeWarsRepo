// parameters
// return
// examples
// PseudoCode


// Max sum path
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

//     A path can start from either list, and can finish in either list.
//     If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list



////This is bad code and slow. This needs to be refactored to remove all these loops. 

function maxSumPath(l1,l2){
    if (l2 == [] && l1 == []){return 0}
    let arr1 = l1.filter(e => l2.includes(e)),
        tot = 0,
        l1Track = 0,
        l2Track = 0,
        l1TrackEnd,
        l2TrackEnd
    for (let i = 0; i <= arr1.length; i++){
      l1TrackEnd = l1.indexOf(arr1[i]) === -1 ? l1.length : l1.indexOf(arr1[i])
      l2TrackEnd = l2.indexOf(arr1[i]) === -1 ? l2.length : l2.indexOf(arr1[i])
      tot += Math.max(l1.slice(l1Track,l1TrackEnd).reduce((a,b) => a + +b, 0), l2.slice(l2Track,l2TrackEnd).reduce((a,b) =>a + +b, 0))
      l1Track = l1TrackEnd
      l2Track = l2TrackEnd
    }
    return tot
  }