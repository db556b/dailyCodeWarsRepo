// Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.


// parameters- a string with S replaced with 5, I replaced with 1, O replaced with 0
// return- a string with 5's replaced with S's, 1's replaced with I's, and 0's replaced with O
// examples -below
// PseudoCode

function corrections(string){
    //take string and use String.replace method in combination with regex to find the mistaken characters and replace them with the proper ones
    //return the result
    //This will not alter the original string on which the method is called
  return string.replace(/5/g,"S").replace(/0/g,"O").replace(/1/g,"I");
}



corrections('5TRING') //shoudl return 'STRING
corrections('51NGAPORE') // should return 'SINGAPORE'
corrections('TE5T1NG') //should return 'TESTING