import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useSession } from "./app/_hooks/sessionContext";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   const { session } = useSession();
  //   if (session) return NextResponse.redirect(new URL("/albums", request.url));
  //   else return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
