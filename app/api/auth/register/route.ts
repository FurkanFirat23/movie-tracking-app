import bcrypt from "bcryptjs";
import { NextApiRequest } from "next";
import User from "../../../../models/User";
import connectDB from "../../../../utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: NextApiRequest) => {
  const { username, email, password } = await req.json();

  try {
    // MongoDB'ye bağlan
    await connectDB();

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı oluştur
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 });
  }
};
