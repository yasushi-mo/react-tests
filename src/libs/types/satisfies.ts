// simple sample
type Config = {
  theme: "light" | "dark";
  size: "small" | "medium" | "large";
};

// 従来の型注釈
export const config1: Config = {
  theme: "light",
  size: "medium",
};
// 推論: Config（具体的な "light", "medium" の情報が失われる）

// satisfies演算子を使用
export const config2 = {
  theme: "light",
  size: "medium",
} satisfies Config;
// 推論: { theme: "light"; size: "medium" }（具体的な値の型が保持される）
