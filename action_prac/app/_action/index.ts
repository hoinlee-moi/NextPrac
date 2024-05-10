"use server";

import client from "@/lib/prisma";
import { signIn, signOut } from "./auth/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { error } from "console";

export const Login = async (formData: any) => {
  const name = formData.get("name") as string;
  const pw = formData.get("pw") as string;
  console.log(name, pw, "formData");
  await signIn("credentials", { name, pw });
  // const user = await client.user.findFirst({
  //   where: {
  //     name: name,
  //   },
  // });
  // console.log(user, "serverData");
  // if (!user || user.pw !== pw) return new Error("실패");

  // return { message: "success" };
};
export const test = async () => {};

// export const signup = async (formData: FormData) => {
//   const name = formData.get("name") as string;
//   const pw = formData.get("pw") as string;

//   console.log(name, pw, "formData");

//   const user = await client.user.findFirst({
//     where: {
//       name: name,
//     },
//   });

//   if (!user) {
//     await client.user.create({
//       data: {
//         name,
//         pw,
//       },
//     });
//     return true;
//   }

//   return console.error("이미 존재하는 ID입니다");
// };
