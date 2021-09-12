const products = [
  {
    name: "laptop",
    price: 121232,
    color: "gold",
  },
  { name: "mobile ", price: 12132, color: "black" },
  { name: "watch ", price: 32, color: "silver" },
];

const colors = products.map((product) => product.color);

console.log(colors);
const newArray = [];

for (const product of products) {
  console.log(product.name);
  newArray.push(product.name);
}

console.log(newArray);
