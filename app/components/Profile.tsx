"use client";
import { useEffect, useState } from "react";

interface User {
  username: string;
  email: string;
  profilePicture: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user/profile");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Merhaba, {user.username}!</h2>
      <img
        src={user.profilePicture}
        alt="Profile"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      />
      <p>Email: {user.email}</p>
    </div>
  );
}
