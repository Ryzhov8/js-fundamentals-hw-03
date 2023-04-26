function randArray(k) {
  const res = [];
  for (let i = 0; i < k; i += 1) {
    let randomNumber = Math.floor(Math.random() * 500);
    res.push(randomNumber);
  }
  return res;
}

console.log(randArray(5));
