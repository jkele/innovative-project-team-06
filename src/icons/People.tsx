import { type FC, type SVGAttributes } from "react";

export const People: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 0a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM3.337 7.428a2.678 2.678 0 115.356 0 2.678 2.678 0 01-5.356 0zm9.834-.33a2.375 2.375 0 100 4.75 2.375 2.375 0 000-4.75zm-.629 6.406c1.133 0 2.215.22 3.205.622a7.775 7.775 0 01-4.63 2.978v-3.482c.463-.078.94-.118 1.425-.118zm-2.72-1.084v4.846a7.776 7.776 0 01-7.61-5.06 9.417 9.417 0 013.563-.694c1.448 0 2.82.326 4.047.908z"
      fill="#054166"
    />
  </svg>
);
