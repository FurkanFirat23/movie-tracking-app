import { NextResponse } from "next/server";

let userProfile = {
  username: "kullanici123",
  email: "kullanici@example.com",
  profilePicture: "https://via.placeholder.com/150",
};

// Profil GET: Mevcut profili getir
export async function GET() {
  return NextResponse.json(userProfile);
}

// Profil PUT: Profili güncelle
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { username, email, profilePicture } = body;

    // Basit doğrulama
    if (!username || !email) {
      return NextResponse.json({ error: "Username ve email zorunludur" }, { status: 400 });
    }

    // Yeni değerlerle profili güncelle
    userProfile = { ...userProfile, username, email, profilePicture };
    return NextResponse.json({ message: "Profil başarıyla güncellendi", userProfile });
  } catch (error) {
    return NextResponse.json({ error: "Profil güncellenemedi" }, { status: 500 });
  }
}
