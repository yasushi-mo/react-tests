const str = "Pizza";
const formattedStr = str.padStart(10, ".");
console.log(formattedStr);
// Output: ".....Pizza"

const index = "1";
const formattedIndex = index.padStart(2, "0");
console.log(formattedIndex);
// Output: "01"

const cardNumber = "1234567812345678";
export const maskedCardNumber = cardNumber
  .slice(-4)
  .padStart(cardNumber.length, "*");
console.log(maskedCardNumber);
