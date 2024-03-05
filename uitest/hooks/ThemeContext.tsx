"use client";

import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useMyParams } from "./useMyParmas";

export enum ButtonTheme {
  DEFAULT = "default",
  MOSAIC = "mosaic",
  STELLA = "stella",
  SHADCN = "shadcn",
  DAISYUI = "daisyui",
  APPY = "appy",
}

type ThemeContextType = {
  theme: string;
  color: string;
  setTheme: (themeName: string) => void;
  setColor: (themeColor: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: ButtonTheme.DEFAULT,
  color: "default",
  setTheme: () => {},
  setColor: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { getParams, setParams } = useMyParams();

  const theme =
    useMemo(() => getParams("theme"), [getParams("theme")]) ??
    ButtonTheme.DEFAULT;
  const color =
    useMemo(() => getParams("color"), [getParams("color")]) ?? "default";
  const setTheme = (themeName: string) => setParams("theme", themeName);
  const setColor = (themeColor: string) => setParams("color", themeColor);
  return (
    <ThemeContext.Provider value={{ theme, color, setTheme, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
