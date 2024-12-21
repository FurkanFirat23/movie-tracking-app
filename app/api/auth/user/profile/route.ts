import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    username: "kullanici123",
    email: "kullanici@example.com",
    profilePicture: "https://via.placeholder.com/150",
  };
  return NextResponse.json(user);
}
