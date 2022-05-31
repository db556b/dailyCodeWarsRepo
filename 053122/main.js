// parameters- an array consisting of numbers 0 -100 inclusive. Missing a singular number
// return- the singular missing integer
// examples
// PseudoCode






function missingNo(nums) {
    //loop through waach number in the passed argument
    for (let i = 0; i < 101; i++){
        //check to see if the array includes the incremntor variable from the loop. If it does not, return i which will end the loop
      if(!nums.includes(i)) return i
    }
    //this method will stop looping through the array once it finds the missing number
    }



    function missingNo2(nums) {
        //reduce the entire array and subtract it from the total of all the numbers from 0-100 (5050) which will equal the integer that is missing. 
        return 5050 - nums.reduce((a, b) => a + b, 0)
        //this method requires looping through every number in the array regardless of which number is missing
      }


      function missingNo3(nums) {
        //reduce the array subtracting each subsequent number from the initial value of the total of all numbers between 0 and 100 (5050)
        return nums.reduce((a, b) => a - b, 5050)
        //this method seems to be slightly faster than missingNo2
        }    


      let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16] // 26
      let arr2 = [26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25, 1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2, 86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20, 94] // 40
      let arr3 = [15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43] // 80
      missingNo(arr1)//should return 26)
      missingNo(arr2)//should return 40)
      missingNo(arr3)//should return 80)