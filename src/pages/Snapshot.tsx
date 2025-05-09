import { FC, useState } from "react";

export const Snapshot: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div role="region">
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span role="status">{count}</span>
    </div>
  );
};
