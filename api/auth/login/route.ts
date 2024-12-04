import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === "test" && password === "password") {
    return NextResponse.json(
      { message: "Login successful" },
      {
        headers: {
          "Set-Cookie": "token=valid_token; HttpOnly; Path=/;",
        },
      }
    );
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
