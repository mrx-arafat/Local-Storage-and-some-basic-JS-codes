const addToLocalStorage = () => {
  const strorageID = document.getElementById("storage-id");
  const id = strorageID.value;

  const strorageValue = document.getElementById("storage-value");
  const value = strorageValue.value;

  // id && value ture .. if we put empty string it will be flase

  if (id && value) {
    localStorage.setItem(id, value);
  }

  strorageID.value = "";
  strorageValue.value = "";
};

/// if we want to add an array or object then we will think about JSON stringify
//array
localStorage.setItem(
  "Arafat GF List",
  JSON.stringify(["Emma Watson", "Tasnim The Great", " Ivanka Trump"])
);

localStorage.setItem("GF Spends", JSON.stringify([200000, 10000, 5000000]));
//object

const person = { name: "Ivanka Trump", spend: 5000000, BF: "Arafat xD" };

localStorage.setItem("person", JSON.stringify(person));
