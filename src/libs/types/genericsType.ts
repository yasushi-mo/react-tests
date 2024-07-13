export function identity<T>(arg: T): T {
  return arg;
}

identity<number>(1);
identity<string>("test");
