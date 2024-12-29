import { NextResponse } from "next/server";

let user = {
  username: "kullanici123",
  email: "kullanici@example.com",
  profilePicture: "https://via.placeholder.com/150",
};

export async function GET() {
  return NextResponse.json(user);
}

export async function PATCH(req: Request) {
  try {
    const data = await req.json();

    // Gelen veriyi mevcut kullanıcıyla birleştiriyoruz.
    user = { ...user, ...data };

    return NextResponse.json({
      message: "Profil başarıyla güncellendi.",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Profil güncellenirken bir hata oluştu." },
      { status: 400 }
    );
  }
}
