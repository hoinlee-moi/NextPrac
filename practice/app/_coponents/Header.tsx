"use client";

import { useSession } from "../_hooks/sessionContext";

export default function Header() {
  const { session } = useSession();
  return (
    <nav className="relative flex justify-between h-12 p-2 rounded-br-md rounded-bl-md bg-sky-200 w-full flex-shrink-0">
      <h1 className="text-2xl font-bold text-white ">My Album</h1>
      <button className="btn mr-5">{session ? "SignOut" : "SignIn"}</button>
    </nav>
  );
}
