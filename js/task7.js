function findUnique(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const number = arr[i];
    if (i !== arr.indexOf(number)) {
      return false;
    }
  }
  return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
