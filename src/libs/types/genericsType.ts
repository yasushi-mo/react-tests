export function identity<T extends string | number>(arg: T): T {
  return arg;
}

identity<number>(1);
identity<string>("test");

// identity<boolean>(true);
