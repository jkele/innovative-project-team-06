import { type FC, type SVGAttributes } from "react";

export const Measurement: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 0L22 7.5 7.5 22 0 14.5l3.043-3.043 2.75 2.75 1.414-1.414-2.75-2.75 2.086-2.086 2.75 2.75 1.414-1.414-2.75-2.75 2.086-2.086 2.75 2.75 1.414-1.414-2.75-2.75L14.5 0z"
      fill="#054166"
    />
  </svg>
);
