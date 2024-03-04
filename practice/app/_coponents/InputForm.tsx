"use client";

import { FormEvent, useRef } from "react";

type InputFormProps = {
  submit: (...args: any) => void;
  ref:
};

export default function InputForm({ submit }: InputFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandle = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) submit(inputRef.current.value);
  };
  return (
    <form onSubmit={submitHandle} className="flex">
      <input type="text" className="p-2 bg-slate-300 rounded " ref={inputRef} />
      <button className=" btn text-center ml-2">Submit</button>
    </form>
  );
}
