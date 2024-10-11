"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import SignInWIthGoogle from "./SignInWIthGoogle";
import Signout from "./Signout";
import SignInWIthGithub from "./SignInWIthGithub";
import SighnIn from "./SighnIn";
import Link from "next/link";

const ClientComponent = () => {
  const { data, status } = useSession();

  return (
    <div className="flex items-center justify-center h-screen">
      {status === "loading" && <p>Loading...</p>}
      {status === "unauthenticated" && (
        <div>
          <SignInWIthGoogle />
          <SignInWIthGithub />
          <SighnIn/>
          <Link href="/api/auth/signin" className="m-40 bg-black text-white p-2 rounded-md w-52" >Go TO Register</Link>
        </div>
      )}
      {status === "authenticated" && (
        <div>
          {data ? (
            <>
              <p>{data.user?.name}</p>
              <Image
                src={data.user?.image as string}
                alt="User Image"
                height={100}
                width={100}
              />
              <p>{data.user?.email}</p>
              <Signout />
            </>
          ) : (
            <SignInWIthGoogle />
          )}
        </div>
      )}
    </div>
  );
};

export default ClientComponent;
