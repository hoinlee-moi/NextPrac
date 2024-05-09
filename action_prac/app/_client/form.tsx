"use client";

import { FormEvent, useEffect } from "react";
import { Login, Logout } from "../_action";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Session } from "next-auth";

export default function Form({ session }: { session: Session | null }) {
  const router = useRouter();
  const pathname = usePathname();
  const login = async (e: FormData) => {
    try {
      const response = await fetch("/api/actions/login", {
        method: "POST",
        body: e,
      });
      console.log(await response.json());
    } catch (error) {}
  };
  return (
    // <form action={signin} className="text-center p-3">
    <>
      <form action={login} className="text-center p-3">
        <input
          className=" w-2/5 px-2 py-3 mr-2 outline-none rounded focus:shadow-sm focus:shadow-blue-200"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="w-2/5 px-2 py-3 outline-none rounded focus:shadow-sm focus:shadow-blue-200"
          type="text"
          name="pw"
          placeholder="pw"
        />
        <button className="block mx-auto py-2 px-4 mt-3 bg-purple-300 rounded">
          Login
        </button>
      </form>
      {session && (
        <form action={Logout}>
          <button className="block mx-auto py-2 px-4 mt-3 bg-green-300 rounded">
            Logout
          </button>
        </form>
      )}
    </>
  );
}
