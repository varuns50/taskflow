import UsersList from "../components/UsersList";

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UsersList /> {/* 👈 Client-side logic goes here */}
    </div>
  );
}
