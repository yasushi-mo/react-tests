type ProductCategories = "electronics" | "books" | "clothing";

// interface StockInfo {
//   laptops?: number;
//   smartphones?: number;
//   title?: string;
//   quantity?: number;
//   status?: string;
// }

// --- 1. satisfies 演算子を使用した場合 ---
// satisfies は、`productStockSatisfies` が Record<ProductCategories, unknown> 型に適合するかをチェックしつつ、
// 個々のプロパティの最も具体的な型（リテラル型など）を保持します。
const productStockSatisfies = {
  electronics: {
    laptops: 50,
    smartphones: 120,
  },
  books: [
    { title: "The Great Gatsby", quantity: 30 },
    { title: "1984", quantity: 45 },
  ],
  clothing: "unavailable",
} satisfies Record<ProductCategories, unknown>;

// satisfies の場合: 具体的な型情報が保持される
const laptopStockSatisfies = productStockSatisfies.electronics.laptops; // type: number (50というリテラルではなくても、具体的なnumber型)
const firstBookTitleSatisfies = productStockSatisfies.books[0].title; // type: string ("The Great Gatsby"というリテラル型)
const clothingStatusSatisfies = productStockSatisfies.clothing; // type: "unavailable" (リテラル型)

// リテラル型が保持されているため、stringメソッドが利用できる
const upperCaseClothingStatusSatisfies =
  productStockSatisfies.clothing.toUpperCase(); // 問題なく使用可能

// Record<ProductCategories, unknown>に適合しない場合（例：キーが不足している場合）はコンパイルエラーになる
// const invalidStockSatisfies = {
//   electronics: { laptops: 10 },
// } satisfies Record<ProductCategories, unknown>; // Error: Property 'books' is missing in type '{ electronics: { laptops: number; }; }' but required in type 'Record<ProductCategories, unknown>'.

console.log("--- satisfies の例 ---");
console.log("Laptop stock:", laptopStockSatisfies);
console.log("First book title:", firstBookTitleSatisfies);
console.log("Clothing status:", clothingStatusSatisfies);
console.log("Uppercase clothing status:", upperCaseClothingStatusSatisfies);

// --- 2. 型注釈 (: Type) を使用した場合 ---
// 型注釈は、指定した型に式が適合することを確認しますが、
// 式の具体的なリテラル型情報を失い、より広い型に推論されてしまうことがあります。
const productStockAnnotated: Record<ProductCategories, unknown> = {
  electronics: {
    laptops: 50,
    smartphones: 120,
  },
  books: [
    { title: "The Great Gatsby", quantity: 30 },
    { title: "1984", quantity: 45 },
  ],
  clothing: "unavailable",
};

// 型注釈の場合: より広い型に推論されるため、具体的なメソッドアクセスに制限がかかる場合がある
export const laptopStockAnnotated = productStockAnnotated.electronics; // type: unknown
// productStockAnnotated.electronics は unknown 型なので、プロパティへの直接アクセスはエラーになる
// const laptopCountError = productStockAnnotated.electronics.laptops; // Error: Object is of type 'unknown'.

// clothing は unknown 型なので、stringメソッドは利用できない
// const upperCaseClothingStatusAnnotated = productStockAnnotated.clothing.toUpperCase(); // Error: Object is of type 'unknown'.

// 明示的に型をキャストする必要がある
const clothingStatusAnnotated = productStockAnnotated.clothing as string;
const upperCaseClothingStatusAnnotated = clothingStatusAnnotated.toUpperCase();

console.log("\n--- 型注釈 (: Type) の例 ---");
console.log("Clothing status (after cast):", clothingStatusAnnotated);
console.log(
  "Uppercase clothing status (after cast):",
  upperCaseClothingStatusAnnotated
);

// --- 3. 型アサーション (as Type) を使用した場合 ---
// 型アサーションは、コンパイラに対して「この式は確実にこの型である」と伝えるため、
// 誤った型をアサートするとランタイムエラーにつながる可能性があります。
const productStockAsserted = {
  electronics: {
    laptops: 50,
    smartphones: 120,
  },
  books: [
    { title: "The Great Gatsby", quantity: 30 },
    { title: "1984", quantity: 45 },
  ],
  clothing: "unavailable",
} as Record<ProductCategories, unknown>; // ここで Record<ProductCategories, unknown> にアサート

// 型アサーションの場合: アサートした型になるため、元の詳細な型情報が失われる
export const laptopStockAsserted = productStockAsserted.electronics; // type: unknown
// productStockAsserted.electronics は unknown 型なので、プロパティへの直接アクセスはエラーになる
// const laptopCountAssertedError = productStockAsserted.electronics.laptops; // Error: Object is of type 'unknown'.

// clothing は unknown 型なので、stringメソッドは利用できない
// const upperCaseClothingStatusAsserted = productStockAsserted.clothing.toUpperCase(); // Error: Object is of type 'unknown'.

// 明示的に型をキャストする必要がある
const clothingStatusAsserted = productStockAsserted.clothing as string;
const upperCaseClothingStatusAsserted = clothingStatusAsserted.toUpperCase();

// アサートが間違っているとランタイムエラーに繋がりやすい
// const dangerousAssert = { value: 123 } as string; // コンパイルエラーにはならないが、ランタイムで問題になる可能性がある

console.log("\n--- 型アサーション (as Type) の例 ---");
console.log("Clothing status (after cast):", clothingStatusAsserted);
console.log(
  "Uppercase clothing status (after cast):",
  upperCaseClothingStatusAsserted
);

// --- 4. 型推論のみの場合 ---
// 型注釈も型アサーションも satisfies もない場合、TypeScriptは最も具体的な型を推論しようとします。
const productStockInferred = {
  electronics: {
    laptops: 50,
    smartphones: 120,
  },
  books: [
    { title: "The Great Gatsby", quantity: 30 },
    { title: "1984", quantity: 45 },
  ],
  clothing: "unavailable",
};

// 型推論の場合: 最も具体的な型が推論されるが、全体の構造が特定の型に適合しているかのチェックは行われない
const laptopStockInferred = productStockInferred.electronics.laptops; // type: number
const firstBookTitleInferred = productStockInferred.books[0].title; // type: string
const clothingStatusInferred = productStockInferred.clothing; // type: "unavailable"

// productStockInferred は Record<ProductCategories, unknown> に適合しているかどうかのチェックがないため、
// 例えば 'electronics' キーを削除してもエラーにならない
// const productStockInferredMissingKey = {
//   books: [],
//   clothing: 'available'
// }; // これは productStockInferred とは異なるが、推論だけではエラーにならない

console.log("\n--- 型推論の例 ---");
console.log("Laptop stock:", laptopStockInferred);
console.log("First book title:", firstBookTitleInferred);
console.log("Clothing status:", clothingStatusInferred);
