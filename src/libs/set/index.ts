const set = new Set([1, 2, 3, 3, 2]);
console.log(set); // Set(3) { 1, 2, 3 }

// [add / delete / has]
const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // 重複は無視される

console.log(fruits); // Set(2) {'apple', 'banana'}
console.log(fruits.has("banana")); // true
fruits.delete("banana");
console.log(fruits.has("banana")); // false

// [loop]
const colors = new Set(["red", "green", "blue"]);

for (const color of colors) {
  console.log(color);
}
// red
// green
// blue

// [Duplication prevention]
const selectedCategoryIds = [1, 3, 2, 3, 1];
const uniqueCategoryIds = [...new Set(selectedCategoryIds)];

console.log(uniqueCategoryIds);
// => [1, 3, 2]

// 例: fetch('/api/update', { method: 'POST', body: JSON.stringify({ categoryIds: uniqueCategoryIds }) })

// [Existence check for large amount of data]
const viewedArticleIds = new Set([1001, 1002, 1003, 1004]);

const currentArticleId = 1002;

if (viewedArticleIds.has(currentArticleId)) {
  console.log("✔ 閲覧済みマークを表示");
} else {
  console.log("未閲覧");
}

// [Data comparison and integration using set operations]
const currentRoles = new Set(["viewer", "editor"]);
const updatedRoles = new Set(["admin", "editor"]);

// 削除するロール（現在はあるが、更新後はない）
const rolesToRemove = [...currentRoles].filter(
  (role) => !updatedRoles.has(role)
);
console.log(rolesToRemove);
// => ["viewer"]

// 追加するロール（更新後にはあるが、現在はない）
const rolesToAdd = [...updatedRoles].filter((role) => !currentRoles.has(role));
console.log(rolesToAdd);
// => ["admin"]

// [Reference match]
const setName = new Set<{ name: string }>();
setName.add({ name: "Alice" });
setName.add({ name: "Alice" });

console.log(setName.size); // 2（異なる参照とみなされる）
