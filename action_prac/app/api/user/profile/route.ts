import { NextResponse } from "next/server";
import React from "react";

export async function GET() {
  const user = { name: "hoi", location: "seoul" };

  return NextResponse.json(user, { status: 200 });
}
