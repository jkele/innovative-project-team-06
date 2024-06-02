import { type FC, type SVGAttributes } from "react";

export const Close: FC<SVGAttributes<SVGElement>> = (properties) => {
  return (
    <svg
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path transform="rotate(-45 2 12)" fill="#004A80" d="M2 12H18V14H2z" />
      <path
        transform="scale(-1 1) rotate(-45 7.122 23.778)"
        fill="#004A80"
        d="M0 0H16V2H0z"
      />
    </svg>
  );
};
