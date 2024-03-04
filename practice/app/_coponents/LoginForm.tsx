"use client";
import React, { useEffect, useReducer } from "react";
import InputForm from "./InputForm";
import { useSession } from "../_hooks/sessionContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { session, signin } = useSession();
  const [failToggle, setToggle] = useReducer((prev) => !prev, false);
  const login = (id: string) => {
    if (+id <= 0 || +id > 10) {
      setToggle();
      return;
    }
    signin(+id);
  };
  useEffect(() => {
    if (session) router.push("/albums");
  }, [session, router]);

  return (
    <div>
      <InputForm submit={login} ref={} />
      {failToggle && (
        <p className="text-red-600">ID는 1 ~ 10까지만 가능합니다</p>
      )}
    </div>
  );
}
