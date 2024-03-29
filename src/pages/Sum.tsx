import { FC } from "react";
import { sum } from "../libs/calculate";

type Props = { num1: number; num2: number };

export const Sum: FC<Props> = ({ num1, num2 }) => {
  const result = sum(num1, num2);
  return <div>The sum is: {result}</div>;
};
