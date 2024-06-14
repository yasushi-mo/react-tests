import { FC } from "react";

export const AnchorAndButton: FC = () => {
  return (
    <>
      <a href="https://www.google.com">Anchor</a>
      <hr />
      <button onClick={() => window.location.replace("https://www.google.com")}>
        Button
      </button>
    </>
  );
};
