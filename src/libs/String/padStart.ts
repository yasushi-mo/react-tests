const str = "Pizza";
const formattedStr = str.padStart(10, ".");
console.log(formattedStr);
// Output: ".....Pizza"

const index = 1;
const formattedIndex = String(index).padStart(2, "0");
console.log(formattedIndex);
// Output: "01"
