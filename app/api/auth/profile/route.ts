import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connectDB from "../../../../utils/connectDB";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  await connectDB();
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Token eksik." }, { status: 401 });
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    const user = await User.findById(id).select("-password");

    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await connectDB();
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Token eksik." }, { status: 401 });
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    const { profilePicture } = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      { profilePicture },
      { new: true }
    ).select("-password");

    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
