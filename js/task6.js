function calc(a, b, op) {
  console.log(op);
  switch (op) {
    case 1:
      return a - b;
      break;
    case 2:
      return a * b;
      break;
    case 3:
      return a / b;
      break;
    default:
      return a + b;
      break;
  }
}

console.log(calc(10, 3, 4));
