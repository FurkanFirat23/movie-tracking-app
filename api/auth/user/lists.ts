import { NextResponse } from "next/server";

export async function GET() {
  const lists = [
    { id: 1, name: "Watch Later" },
    { id: 2, name: "Favorites" },
  ];

  return NextResponse.json({ lists });
}
