"use client";

import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function page() {
  return (
    <div>
      <p>A list of reports done by the user will appear here</p>
      <Link
        href={"/report/add"}
        className=" bg-indigo-400 text-black p-2 rounded-md fixed bottom-3 right-2 hover:scale-105 hover:bg-indigo-300 "
      >
        <IoMdAdd />
      </Link>
    </div>
  );
}

export default page;
