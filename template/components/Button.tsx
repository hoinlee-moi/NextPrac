"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-medium text-sm inline-flex items-center justify-center border border-transparent  leading-5 shadow-sm transition duration-150 ease-in-out disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
  {
    variants: {
      theme: {
        default: "rounded",
        rounded: "rounded-full ",
      },
      color: {
        default:
          "bg-transparent border-slate-200 hover:border-slate-300 text-slate-600",
        indigo: "bg bg-indigo-500 hover:bg-indigo-600 text-white",
        slate: "border-slate-200 hover:border-slate-300 text-indigo-500",
        danger: "bg-rose-500 hover:bg-rose-600 text-white",
        success: "bg-emerald-500 hover:bg-emerald-600 text-white",
      },
      size: {
        default: "px-3 py-2",
        xs: "px-2 py-0.5",
        sm: "px-2 py-1",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      theme: "default",
      color: "default",
      size: "default",
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  className,
  size,
  color,
  asChild = false,
  theme,
  //   disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ theme, color, size, className }))}
      {...props}
      //   disabled={disabled}
    />
  );
}
