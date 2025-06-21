const set = new Set([1, 2, 3, 3, 2]);
console.log(set); // Set(3) { 1, 2, 3 }

// add / delete / has
const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // 重複は無視される

console.log(fruits); // Set(2) {'apple', 'banana'}
console.log(fruits.has("banana")); // true
fruits.delete("banana");
console.log(fruits.has("banana")); // false

// loop
const colors = new Set(["red", "green", "blue"]);

for (const color of colors) {
  console.log(color);
}
// red
// green
// blue
