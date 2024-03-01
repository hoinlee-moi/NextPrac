"use client";
import React, { useEffect } from "react";
import InputForm from "./InputForm";
import { useSession } from "../_hooks/sessionContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { session, signin } = useSession();
  const login = (id: string) => signin(+id);
  useEffect(() => {
    console.log(session);
    if (session) router.push("/albums");
  }, [session]);

  return (
    <div>
      <InputForm submit={login} />
    </div>
  );
}
