import { FC } from "react";

const SvgWithoutForeignObject: FC = () => {
  return (
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background rectangle */}
      <rect x="10" y="10" width="380" height="180" fill="lightblue" />
      {/* Simple SVG text */}
      <text x="20" y="50" fontSize="16" fill="darkblue">
        This is a plain SVG text.
      </text>
      {/* Circle with text inside */}
      <circle cx="200" cy="100" r="50" fill="orange" />
      <text x="200" y="105" fontSize="14" textAnchor="middle" fill="white">
        Circle
      </text>
    </svg>
  );
};

export default SvgWithoutForeignObject;
