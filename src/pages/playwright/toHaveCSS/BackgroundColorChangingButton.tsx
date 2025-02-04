import { FC, useState } from "react";

export const BackgroundColorChangingButton: FC = () => {
  const [bgColor, setBgColor] = useState<"red" | "blue">("red");

  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={() => setBgColor((prev) => (prev === "red" ? "blue" : "red"))}
    >
      Change Background Color
    </button>
  );
};
