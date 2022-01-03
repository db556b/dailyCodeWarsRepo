// parameters- one who number between 0 and 9
// return- passed number as a word instead of a number
// examples- below
// PseudoCode - below


//Switch it Up!


function switchItUp(number){
    //create object holding all the potential key value pairs for this limited data set
    const num = {1:'One', 2:'Two', 3:'Three',4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight',9: 'Nine', 0: 'Zero'}
    //return the value for the key that is passed in
    return num[number]
    }

switchItUp(1) //should return 'One'
switchItUp(0) // should return 'Zero'
switchItUp(9) // should return 'Nine'