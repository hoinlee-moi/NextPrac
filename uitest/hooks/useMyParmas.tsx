"use clinet";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useMyParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname]
  );
  const getParams = (key: string) => searchParams.get(key);

  return { getParams, setParams } as const;
};
