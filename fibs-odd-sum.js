function fibsOddSum(num) {
  let fibs = [1, 1, 2, 3, 5, 8];
  // if provided num is 1 we just want to return 1 and be done with it
  if (num === 1) {
    return 1;
  }

  // if num input is not 1 - first we provide a Fibonacci array
  if (num <= 10) {
    // do nothing - we can do it with good ol' fibs array
  } else {
    // else we iterate with a for loop to create an array we need 
  for (let i = 5; i < fibs.length; i++) {
    if (fibs[i] >= num) {
      break;
    } else {
      fibs.push(fibs[i] + fibs[i-1]);
    }
}
}
  // now that we have an array - we have to filter it so that it only has odds lower than num. We will create a function to check for it, and then use array filter to return us a new array with only odds in it.
  function isOddLowerThanNum(number) {
    return number <= num && number % 2;
  }

  let fibsFiltered = fibs.filter(isOddLowerThanNum);
  
  // now we just have to use array reduce to sum up all odds in the filtered array and return them
  function sumAll(total, number) {
    return total + number;
  }
  return fibsFiltered.reduce(sumAll);
}
