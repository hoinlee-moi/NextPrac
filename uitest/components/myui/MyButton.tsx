import { useTheme } from "@/hooks/ThemeContext";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50 duration-150 ease-in-out",
  {
    variants: {
      theme: {
        default: "",
        mosaic: "border border-transparent leading-5 shadow-sm ",
        stella: "text-black border border-transparent rounded-full ",
      },
      color: {
        default: "bg-myPrimary text-white",
        destructive: "bg-myDestructive text-white text-black",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-2 py-1",
        xs: "px-2 py-0.5"   q,
        lg: "px-4 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      theme: "default",
      size: "default",
      color: "default",
    },
  }
);

type MyButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function MyButton({
  className,
  size,

  asChild = false,
  ...props
}: MyButtonProps) {
  const { theme, color } = useTheme() as any;

  return (
    <button
      className={cn(buttonVariants({ theme, color, size, className }))}
      {...props}
    />
  );
}
