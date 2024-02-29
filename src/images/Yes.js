import React from "react";

const Yes = ({ bg, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <circle cx={13.001} cy={13.001} r={13.001} fill={bg} />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.811}
        d="m7.73 12.65 4.217 4.216 6.324-6.325"
      />
    </svg>
  );
};

export default Yes;
