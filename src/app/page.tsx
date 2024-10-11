import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/Authoptions";
import SignInWIthGoogle from "@/_components/SignInWIthGoogle";
import SignInWIthGithub from "@/_components/SignInWIthGithub";
import Signout from "@/_components/Signout";
import SighnIn from "@/_components/SighnIn";
import Link from "next/link";
import ClientComponent from "@/_components/ClientComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    // <div className="flex items-center justify-center h-screen">
    //   {session ? (
    //     <>
    //       <p>{session.user?.name}</p>
    //       {session.user?.image && (
    //         <Image
    //           src={session.user?.image as string}
    //           alt="User Image"
    //           height={100}
    //           width={100}
    //         />
    //       )}
    //       <p>{session.user?.email}</p>
    //       <Signout />
    //     </>
    //   ) : (
    //     <div className="form">
    //       <SignInWIthGoogle />
    //       <SignInWIthGithub />
    //       <SighnIn/>
    //       <Link href="/api/auth/signin" className="m-40 bg-black text-white p-2 rounded-md w-52" >Go TO Register</Link>
    //     </div>
    //   )}
    // </div>
    <ClientComponent/>
  );
}
