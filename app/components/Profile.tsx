export default function Profile() {
  const user = {
    username: "kullanici123",
    email: "kullanici@example.com",
    profilePicture: "https://via.placeholder.com/150",
  };

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
