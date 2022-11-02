function shorter_reverse_longer(a,b){
    let short = a.length >= b.length ? b : a,
        long = short === a ? b : a
    return shorterLongerShorter(short,long)
  }
  
  function shorterLongerShorter(short,long){
    return short + long.split('').reverse().join('') + short
  }