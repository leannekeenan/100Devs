/*Your task is to sum the differences between consecutive pairs in the array in descending order. */

function sumOfDifferences(arr) {
    //if the earray has no numbers, return 0
      if(arr.length <= 1) {
        return 0;
      }
      /*
      after spreading through the array to find the maximum 
      number, return its total. Do the same for the minimum 
      value and deduct it from the max value
      */
      return Math.max(...arr) - Math.min(...arr)
    //get sum
    }