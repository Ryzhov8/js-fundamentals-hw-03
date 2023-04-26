function createArray(start, end) {
  const res = [];
  for (let i = start; i <= end; i += 1) {
    res.push(i);
  }
  return res;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
