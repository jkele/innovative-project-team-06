import { type FC, type SVGAttributes } from "react";

export const Location: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={17}
    height={20}
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.122 19.29s8.122-6.092 8.122-11.524C16.244 3.553 13.198 0 8.122 0 3.046 0 0 3.553 0 7.766 0 13.198 8.122 19.29 8.122 19.29zM6.152 5.21h3.94v3.94h-3.94V5.21z"
      fill="#054166"
    />
  </svg>
);
