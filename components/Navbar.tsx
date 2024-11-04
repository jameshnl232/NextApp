import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 max-md:mx-5 max-w-[800px] mx-auto shadow-md rounded-xl fixed backdrop-blur-md left-0 right-0 top-2 bg-white/70 z-30  ">
      <nav className="flex justify-between items-center ">
        <Link href="/">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/Startup.svg"
              width={50}
              height={50}
              alt="logo"
              className="rounded-full p-1"
            />
            <p className="text-lg font-bold text-sky-700">Startup Pitch</p>
          </div>
        </Link>
        <div className="flex justify-center items-center  ">
          {session && session.user ? (
            <div className="flex justify-center items-center gap-4">
              <Link href="/startup/create">
                <span className="max-sm:hidden text-gray-800 hover:text-sky-600">
                  Create
                </span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>

              <form
                className="flex justify-center items-center "
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden text-gray-800 hover:text-sky-600">
                    Logout
                  </span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
            </div>
          ) : (
            <form
              className="flex justify-center items-center "
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">
                <span className="max-sm:hidden text-gray-800 hover:text-gray-600">
                  Login
                </span>
                <LogIn className="size-6 sm:hidden text-gray-500" />
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
