


// Grader


// Create a function that takes a number as an argument and returns a grade based on that number.
// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"





function grader(score) {
    return score > 1 || score < .6 ? "F" :
            score >= .9 ? "A" :
            score >= .8 ? "B" : 
            score >= .7 ? "C" : "D"
   }