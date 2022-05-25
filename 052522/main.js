// parameters- an integer from 0 - really high
// return a string consisting of human readable and correctly formatted time including year, day, hours, minutes, and seconds
// examples
// PseudoCode


// Human readable duration format
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


function formatDuration (seconds) {
    //check for argument of 0. If 0 return 'now'
    if (seconds === 0) {return 'now'}
    //find the number of years in the passed argument
    let year = Math.floor(seconds/31536000)
    //find the number of days in the passed argument
    let day = Math.floor((seconds % 31536000) / 86400)
    //find the number of hours in the passed argument
    let hour = Math.floor(((seconds % 31536000) % 86400) / 3600)
    //find the number of minutes in the passed argument
    let minute = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)
    //find the number of seconds in the passed argument
    let second = Math.floor(seconds % 31536000 % 86400 % 3600 % 60)
    //check variables for 0. if 0 make null to remove from array formed later. Convert to string and add label (various pertinent units) for time frame with s when needed
    year = year < 1 ? null : year > 1 ? year.toString() + ` years` : year.toString() + ` year`
    day = day < 1 ? null : day > 1 ? day.toString() + ` days` : day.toString() + ` day`
    hour = hour < 1 ? null : hour > 1 ? hour.toString() + ` hours` : hour.toString() + ` hour`
    minute = minute < 1 ? null : minute > 1 ? minute.toString() + ` minutes` : minute.toString() + ` minute`
    second = second < 1 ? null : second > 1 ? second.toString() + ` seconds` : second.toString() + ` second`
    //save them into an array
    let arr = [year, day, hour, minute, second]
    //check for and remove null values from the array
    arr = arr.filter(e => e !== null)
    //return joined array if length is one (has one unit of time)
    return arr.length === 1 ? arr.join('') : 
        //join with ' and ' when array has two units in it
            arr.length === 2 ? arr.join(' and ') : 
            //join array into string, add ' and ' between last and second from last elements, add ', ' between each of the other elements besides the last and second from last
            arr.map((e,i,a) => i == a.length - 2 ? e + ' and ': i == a.length - 1 ? e : e + ', ').join('')
  }
  




  formatDuration(1) // should return "1 second");
formatDuration(62) // should return "1 minute and 2 seconds");
formatDuration(120) // should return "2 minutes");
formatDuration(3600) // should return "1 hour");
formatDuration(3662) // should return "1 hour, 1 minute and 2 seconds");

