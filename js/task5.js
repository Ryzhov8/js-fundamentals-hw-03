function arrFilter(arr) {
  const numbers = [];
  const strings = [];
  for (const el of arr.flatMap((el) => el)) {
    switch (typeof el) {
      case "number":
        numbers.push(el);
        break;
      case "string":
        strings.push(el);
        break;

      default:
        break;
    }
  }
  return [numbers, strings];
}
let arr = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];
console.log(arrFilter(arr));
