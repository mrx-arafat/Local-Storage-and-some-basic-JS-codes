function packing(a, b, c) {
  const array = [a, b, c];

  return array;
}

console.log(packing(21, 32, 13));

const [x, y, z] = packing(10, 20, 30);
console.log(y);
