import LogoutButton from "../components/LogoutButton";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to your dashboard!</h1>
      <LogoutButton />
    </div>
  );
}
