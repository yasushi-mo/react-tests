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

// use
type ThemeConfig = {
  colors: Record<string, string>;
  spacing: Record<string, number>;
};

export const myTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
} satisfies ThemeConfig;

// myTheme.colors.primary の型は string ではなく "#007bff" として推論される
// myTheme.spacing.small の型は number ではなく 8 として推論される

export function getTextColor(
  theme: typeof myTheme,
  colorName: keyof typeof myTheme.colors
) {
  if (colorName === "primary") {
    // colorName が "primary" の場合、myTheme.colors.primary は "#007bff" と推論される
    return myTheme.colors.primary; // "#007bff"
  }
  return myTheme.colors[colorName];
}

type ColorName = keyof typeof myTheme.colors; // "primary" | "secondary" | "success"

function applyThemeColor(colorName: ColorName) {
  // 具体的な色の値が型として利用可能
  const color = myTheme.colors[colorName];
  console.log(`適用される色: ${color}`);
}

applyThemeColor("primary"); // ✅ OK
// applyThemeColor("invalid"); // ❌ エラー: 型 '"invalid"' を型

type Status = "loading" | "success" | "error";

// vs type annotation
// 型注釈を使用
export const status1: Status = "loading";
// status1 の型: Status

// satisfies を使用
export const status2 = "loading" satisfies Status;
// status2 の型: "loading"
