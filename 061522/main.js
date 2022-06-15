// parameters- a string of letters
// return- alternating case of parameter
// examples
// PseudoCode





function spongeMeme(sentence) {
    //take argument. 
    return sentence
    //split into array. 
                .split('')
    //loop through array. //alternate capital and lowercase. 
                .map((e,i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase())
    //join. 
                .join('')
    //return this
  }

  spongeMeme('lkjasdf:KJHLKJHasdflkjadsflkjhasdf')  // should return => LkJaSdF:KjHlKjHaSdFlKjAdSfLkJhAsDf
  spongeMeme("stop Making spongebob Memes!")  // should return =>  'StOp mAkInG SpOnGeBoB MeMeS!'
  spongeMeme("colored teens cant Be successful in tech")  // should return =>  'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'



//   function spongeMeme(sentence) {
//     return sentence.split('').map((e,i)=> i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')
//   }