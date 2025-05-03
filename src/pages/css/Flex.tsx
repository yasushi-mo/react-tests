import { FC } from "react";
import classes from "./Flex.module.css";

export const Flex: FC = () => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.numerator}>1</span>
      <span>/</span>
      <span className={classes.denominator}>10</span>
    </div>
  );
};
