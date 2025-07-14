// vs type annotation
type Config = {
  theme: "light" | "dark";
  size: "small" | "medium" | "large";
};

// 型注釈を使用
export const config1: Config = {
  theme: "light",
  size: "medium",
};
// 推論: Config（具体的な "light", "medium" の情報が失われる）

// satisfies を使用
export const config2 = {
  theme: "light",
  size: "medium",
} satisfies Config;
// 推論: { theme: "light"; size: "medium" }（具体的な値の型が保持される）

// vs type assertion
// 型アサーションを使用
export const config3 = {
  theme: "light",
  size: "medium",
} as Config;
// config3 の型: Config（具体的な型情報が失われる）

// satisfies を使用
export const config4 = {
  theme: "light",
  size: "medium",
} satisfies Config;
// config4 の型: { theme: "light"; size: "medium" }（具体的な値の型が保持される）

// 型アサーションの危険性
export const dangerousConfig = {
  theme: "light",
  size: "medium",
  invalidProp: "value", // 余分なプロパティ
} as Config; // ❌ エラーにならない！型安全性が損なわれる

export const safeConfig = {
  theme: "light",
  size: "medium",
  // invalidProp: "value" // 余分なプロパティ
} satisfies Config; // ❌ エラー: オブジェクトリテラルは既知のプロパティのみ指定できます
