// parameters- a string containing letters
// return- boolean true/false. False if any letters repeat themselves in the string regardless of case
// examples
// PseudoCode

// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    //set boolean to retturn
    let something = true
    //take string and lowerCase  and split it
    str = str.toLowerCase().split('')
    //loop through string checking if the current element appears later in the string using lastIndexOf
    str.forEach((e,i) => {
        //if the last indexOf current element does not equal current index, change something to false
      if (i !== str.lastIndexOf(e)) something = false
    })
    //return something
    return something
  }




isIsogram("Dermatoglyphics") // should return =>  true because no characters repeat in the argument);
isIsogram("isogram") // should return =>  true because no characters repeat in the argument);
isIsogram("moose") // should return =>  false because some characters repeat themselves in the argument );
isIsogram("isIsogram") // should return =>  false because some characters repeat themselves in the argument );
isIsogram("aba") // should return =>  false because some characters repeat themselves in the argument 
isIsogram("moOse") // should return =>  false because some characters repeat themselves in the argument 
isIsogram("thumbscrewjapingly") // should return =>  true because no characters repeat in the argument);
isIsogram("") // should return =>  truebecause no characters repeat in the argument );