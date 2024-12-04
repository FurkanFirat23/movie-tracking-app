import bcrypt from "bcryptjs";
import User from "@/models/User"; // Model dosyasını doğru yoldan içe aktarın
import connectDB from "@/utils/connectDB"; // Veritabanı bağlantısı için doğru yolu kullanın
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectDB(); // Veritabanı bağlantısını başlat

  const { username, password, email } = await request.json();

  // Tüm alanların dolu olduğundan emin olun
  if (!username || !password || !email) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluştur
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    // Kullanıcıyı kaydet
    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("User registration error:", error);

    // Hata durumunda yanıt döndür
    return NextResponse.json(
      { error: "User registration failed" },
      { status: 500 }
    );
  }
}
