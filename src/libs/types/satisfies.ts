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

// use cases
// 1. 設定オブジェクトの型安全性確保
type ApiConfig = {
  endpoints: {
    users: string;
    posts: string;
    comments: string;
  };
  timeouts: {
    default: number;
    upload: number;
    download: number;
  };
  retryPolicy: {
    maxRetries: number;
    backoffMs: number;
  };
};

// ❌ satisfies なしの場合 - 必須プロパティが漏れても気づかない
export const unsafeConfig = {
  endpoints: {
    users: "/api/users",
    posts: "/api/posts",
    // comments が漏れている！
  },
  timeouts: {
    default: 5000,
    upload: 30000,
    // download が漏れている！
  },
  retryPolicy: {
    maxRetries: 3,
    backoffMs: 1000,
  },
};

// ✅ satisfies ありの場合 - 必須プロパティの漏れでコンパイルエラー
export const safeConfig2 = {
  endpoints: {
    users: "/api/users",
    posts: "/api/posts",
    comments: "/api/comments",
  },
  timeouts: {
    default: 5000,
    upload: 30000,
    download: 10000,
  },
  retryPolicy: {
    maxRetries: 3,
    backoffMs: 1000,
  },
} satisfies ApiConfig;

// safeConfig.timeouts.default の型は number として推論される
// safeConfig.retryPolicy.maxRetries の型は number として推論される

// as const
type ConfigAsConst = {
  port: number;
  host: string;
  ssl: boolean;
};

// satisfies のみの場合
export const config1AsConst = {
  port: 3000,
  host: "localhost",
  ssl: false,
} satisfies ConfigAsConst;
// config1.port の型は number
// config1.host の型は string
// config1.ssl の型は boolean

// as const と satisfies の組み合わせ
export const config2AsConst = {
  port: 3000,
  host: "localhost",
  ssl: false,
} as const satisfies ConfigAsConst;
// config2.port の型は 3000（リテラル型）
// config2.host の型は "localhost"（リテラル型）
// config2.ssl の型は false（リテラル型）

// 型制約違反があった場合はエラーになる
export const invalidConfig = {
  port: 3000,
  host: "localhost",
  ssl: false,
  // ssl: "invalid" // ❌ エラー: boolean が期待されるのに string が指定されている
} as const satisfies ConfigAsConst;
