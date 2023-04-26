function numbers(a, b) {
  let counter = 1;
  for (let i = a; i < b; i += 1) {
    for (let j = 1; j <= counter; j += 1) {
      console.log(i);
    }
    counter += 1;
  }
}

numbers(3, 7);
