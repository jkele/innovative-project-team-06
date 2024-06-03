import { type FC, type SVGAttributes } from "react";

export const Add: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={85}
    height={85}
    viewBox="0 0 85 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      transform="rotate(90 53.737 0)"
      fill="#054166"
      d="M53.7373 0H138.5875V19.7984H53.7373z"
    />
    <path fill="#054166" d="M0 31.1118H84.8502V50.9102H0z" />
  </svg>
);
