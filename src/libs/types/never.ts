export function throwError(message: string): never {
  throw new Error(message);
}

export function infiniteLoop(): never {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // Infinite loop
  }
}

export type NumberString = number & string;
