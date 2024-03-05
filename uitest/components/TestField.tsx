"use client";

import { ArrowBigDown } from "lucide-react";
import MyButton from "./myui/MyButton";
import { Button } from "./ui/button";
import { useMyParams } from "@/hooks/useMyParmas";
import { ButtonTheme, useTheme } from "@/hooks/ThemeContext";
import { MouseEvent } from "react";

export default function TestField() {
  const { setTheme, setColor } = useTheme();
  const { setParams } = useMyParams();

  const themeClickHandler = (e: MouseEvent<HTMLButtonElement>) =>
    setTheme(e.currentTarget.name);
  const colorClickHandler = (e: MouseEvent<HTMLButtonElement>) =>
    setColor(e.currentTarget.name);

  return (
    <div className="">
      <div className="mb-3">
        shadcn button : <Button>Test Button</Button>
      </div>
      <div className="grid grid-flow-row gap-3">
        <MyButton name={ButtonTheme.MOSAIC} onClick={themeClickHandler}>
          mosicTheme
        </MyButton>
        <MyButton name={ButtonTheme.DEFAULT} onClick={themeClickHandler}>
          defaultTheme
        </MyButton>
        <MyButton name={"stella"} onClick={themeClickHandler}>
          stellaTheme
        </MyButton>
        <MyButton name={ButtonTheme.DAISYUI} onClick={themeClickHandler}>
          DaisyUiTheme
        </MyButton>
        <MyButton name="default" onClick={colorClickHandler}>
          PrimaryColor
        </MyButton>
        <MyButton name="destructive" onClick={colorClickHandler}>
          DestructiveColor
        </MyButton>
      </div>
    </div>
  );
}
