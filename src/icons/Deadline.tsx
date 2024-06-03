import { type FC, type SVGAttributes } from "react";

export const Deadline: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={17}
    height={20}
    viewBox="0 0 60 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.333 6.636H0V0h60v6.636h-8.333v17.966L39.714 36.5l11.953 11.898v17.966H60V73H0v-6.636h8.333V48.398L20.286 36.5 8.333 24.602V6.636z"
      fill="#054166"
    />
  </svg>
);
