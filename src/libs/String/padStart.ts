const str = "Pizza";
const formattedStr = str.padStart(10, ".");
console.log(formattedStr);
// Output: ".....Pizza"

const index = "1";
const formattedIndex = index.padStart(2, "0");
console.log(formattedIndex);
// Output: "01"

const cardNumber = "1234567812345678";
const maskedCardNumber = cardNumber.slice(-4).padStart(cardNumber.length, "*");
console.log(maskedCardNumber);
// Output: "************5678"

const category = "Science";
const formattedCategory = category.padStart(category.length + 3, "#");
console.log(formattedCategory);
// Output: "###Science"
