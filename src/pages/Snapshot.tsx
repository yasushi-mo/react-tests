import { FC, useState } from "react";

export const Snapshot: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div role="region" aria-labelledby="counter-title">
      <h1 id="counter-title">Counter</h1>
      <button
        data-testid="increment-btn"
        onClick={() => setCount(count + 1)}
        aria-label="Increment counter"
      >
        Increment
      </button>
      <span data-testid="counter-value" role="status">
        {count}
      </span>
    </div>
  );
};
