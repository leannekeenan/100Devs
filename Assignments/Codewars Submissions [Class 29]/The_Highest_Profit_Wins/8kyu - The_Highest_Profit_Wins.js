/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
*/

function minMax(arr){
    //create empty array to hold new array holding  in and max values
    let result = [];
    //run sort function to find the min and max values of the array
    let sort = arr.sort((min, max) => {
      //return the difference between the min and max values
      return min - max;
    })
    //use .push method to add the sorted values to the empty array
    //  - [0] is largest
    //  - sort.length - 1 is smallest
    result.push(sort[0])
    result.push(sort[sort.length - 1])
    //return result values array
    return result
  }