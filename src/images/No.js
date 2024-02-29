import React from "react";

const No = ({ bg, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} fill="none">
      <circle cx={13.017} cy={13.017} r={13.017} fill={bg} />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.814}
        d="m10.201 16.535 6.333-6.333M16.534 16.535 10.2 10.202"
      />
    </svg>
  );
};

export default No;
