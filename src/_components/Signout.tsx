"use client";

import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <>
      <button
        className=" bg-red-700 p-2 text-center text-white rounded-md"
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
    </>
  );
};

export default Signout;
