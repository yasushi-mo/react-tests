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

// use case
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

// satisfies なしの場合 - 必須プロパティが漏れても気づかない
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

// satisfies ありの場合 - 必須プロパティの漏れでコンパイルエラー
export const safeConfig = {
  endpoints: {
    users: "/api/users",
    posts: "/api/posts",
    comments: "/api/comments",
  },
  timeouts: {
    default: 5000,
    upload: 30000,
    download: 15000,
  },
  retryPolicy: {
    maxRetries: 3,
    backoffMs: 1000,
  },
} satisfies ApiConfig;

// safeConfig.timeouts.default の型は number ではなく 5000 として推論される
// safeConfig.retryPolicy.maxRetries の型は number ではなく 3 として推論される
