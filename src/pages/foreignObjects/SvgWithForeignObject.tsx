import { FC } from "react";

const SvgWithForeignObject: FC = () => {
  return (
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background rectangle */}
      <rect x="10" y="10" width="380" height="180" fill="lightblue" />

      {/* foreignObject containing HTML content */}
      <foreignObject x="20" y="20" width="360" height="160">
        <div
          style={{
            fontSize: "16px",
            color: "darkblue",
            padding: "10px",
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <p>This is HTML inside SVG!</p>
          <button
            style={{
              padding: "8px",
              border: "none",
              backgroundColor: "orange",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => alert("Button clicked!")}
          >
            Click Me
          </button>
        </div>
      </foreignObject>
    </svg>
  );
};

export default SvgWithForeignObject;
