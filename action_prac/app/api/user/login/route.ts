import { Login } from "@/app/_action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("request", request);
  const form = new FormData();
  form.set("name", "ho");
  form.set("pw", "1232");
  Login(form);
  return NextResponse.json({ message: "??" });
  // const name = formData.get("name") as string;
  // const pw = formData.get("pw") as string;
  // return { name, pw };
  // await signIn("credentials", { name, pw });
  // const user = await client.user.findFirst({
  //   where: {
  //     name: name,
  //   },
  // });
  // console.log(user, "serverData");
  // if (!user || user.pw !== pw) return new Error("실패");

  // return { message: "success" };
}
