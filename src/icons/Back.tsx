import { type FC, type SVGAttributes } from "react";

export const Back: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={30}
    height={50}
    viewBox="0 0 68 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.418 0h4.806v11.594h10.014c14.888 0 26.958 11.356 26.958 25.362V50h-4.622c0-8.406-7.24-15.217-16.175-15.217H30.224v13.043h-4.806L0 23.913 25.418 0z"
      fill="#5F8DAA"
    />
  </svg>
);
