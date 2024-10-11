"use client";
import { signIn } from "next-auth/react";


const SignInWIthGithub = () => {
  return (
    <button
    className="p-3 rounded-lg bg-green-600 text-center align-middle m-auto flex mb-3 hover:bg-green-900 hover:text-white"
      onClick={() => {
        signIn("github");
      }}
    >
      Sign in with github
    </button>
  );
};

export default SignInWIthGithub;
