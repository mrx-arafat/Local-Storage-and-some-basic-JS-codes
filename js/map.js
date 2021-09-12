const products = [
  {
    name: "laptop",
    price: 121232,
    color: "gold",
  },
  { name: "mobile ", price: 12132, color: "black" },
  { name: "watch ", price: 32, color: "silver" },
];
///map
const colors = products.map((product) => product.color);

console.log(colors);
const newArray = [];

for (const product of products) {
  console.log(product.name);
  newArray.push(product.name);
}

console.log(newArray);

const prices = products.map((x) => x.price);
console.log(prices);
//foreach
products.forEach((product) => console.log(product.price));
//filter
const cheap = products.filter((prod) => prod.price <= 32);
console.log(cheap);

/// filter check with includes
const spName = products.filter((p) => p.name.includes("t"));
console.log(spName);
// find-- just give the first output

const special = products.find((p) => p.name.includes("t"));
console.log(special);
