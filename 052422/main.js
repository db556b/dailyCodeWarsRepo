// parameters-- one single integer between 0 and 359999
// return a string consisting of three 2 didgit numbers separated by colons, e.g. HH:MM:SS
// examples
// PseudoCode



// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
        //declare a variable and save each of three numbers inside of the array as strings
        //hours = rounded down (seconds/3600--number of seconds in an hour). Mins = remainder of hours calculation divided by number of seconds in a minute (60). Seconds is the remainder from the previous two calculations (seconds%3600%60)
    const arr = [Math.floor(seconds/3600).toString(),Math.floor(seconds%3600/60).toString(),Math.floor(seconds%3600%60).toString()]
    //map and return previous arr to save each of the caluclations in a two digit format with a preceding 0 when there is only one didgit left from the math (e.g. 6/2=3, but need to be string('03'))
    return arr.map(e => e.length === 1 ? `0${e}` : e).join(`:`)
  }


humanReadable(0)    // should return '00:00:00'
humanReadable(59)   // should return '00:00:59'
humanReadable(60)   // should return '00:01:00'
humanReadable(90)   // should return '00:01:30'
humanReadable(3599)   // should return '00:59:59'