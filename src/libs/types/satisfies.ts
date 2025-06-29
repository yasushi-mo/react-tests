type ProductCategories = "electronics" | "books" | "clothing";

const productStock = {
  electronics: {
    laptops: 50,
    smartphones: 120,
  },
  books: [
    { title: "The Great Gatsby", quantity: 30 },
    { title: "1984", quantity: 45 },
  ],
  clothing: "unavailable", // 在庫情報として文字列も許容
} satisfies Record<ProductCategories, unknown>;

// satisfiesを使用することで、productStock.electronics がオブジェクト型として認識され、
// プロパティにアクセスできる。
export const laptopStock = productStock.electronics.laptops; // type: number
export const firstBookTitle = productStock.books[0].title; // type: string (元のリテラル型を保持)
export const clothingStatus = productStock.clothing.toUpperCase(); // type: string (元のリテラル型を保持)

// Record<ProductCategories, unknown>に適合しない場合（例：キーが不足している場合）はエラーになる
// const invalidStock = {
//   electronics: { laptops: 10 },
// } satisfies Record<ProductCategories, unknown>; // Error: Property 'books' is missing
