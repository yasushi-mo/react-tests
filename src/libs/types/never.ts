/* eslint-disable no-case-declarations */
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

type PaymentMethod =
  | { type: "credit_card"; cardNumber: string }
  | { type: "paypal"; email: string }
  | { type: "bank_transfer"; accountNumber: string };

function processPayment(method: PaymentMethod): string {
  switch (method.type) {
    case "credit_card":
      return `Processing credit card payment for card: ${method.cardNumber}`;
    case "paypal":
      return `Processing PayPal payment for email: ${method.email}`;
    case "bank_transfer":
      return `Processing bank transfer for account: ${method.accountNumber}`;
    default:
      // Exhaustive check using never
      const _exhaustive: never = method;
      throw new Error(`Unhandled payment method: ${_exhaustive}`);
  }
}

processPayment({ type: "paypal", email: "" });
// TypeScript will catch errors if you add a new PaymentMethod type
// and forget to handle it in the `switch`.
