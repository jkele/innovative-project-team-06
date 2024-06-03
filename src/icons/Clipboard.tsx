import { type FC, type SVGAttributes } from "react";

export const Clipboard: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.337.74H23.663v13.337h26.674V.74zM18.662 19.078V4.908H6.158V73.26h61.684V4.908H55.34v14.17H18.662z"
      fill="#054166"
    />
  </svg>
);
