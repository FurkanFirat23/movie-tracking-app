import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connectDB from "../../../../utils/connectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await connectDB();
  
  try {
    const { email, password } = await req.json();

    // Kullanıcıyı bul
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    // Şifreyi kontrol et
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Hatalı şifre." }, { status: 400 });
    }

    // JWT Token oluştur
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" } // Token süresi
    );

    return NextResponse.json(
      {
        message: "Giriş başarılı.",
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Sunucu hatası. Lütfen tekrar deneyin." }, { status: 500 });
  }
}
