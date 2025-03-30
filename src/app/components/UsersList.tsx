"use client"; // Mark as a client component

import { fetchUsers, logout } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types";

export default function UsersList() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    loadUsers();
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login"); // Redirect after logout
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <button 
        onClick={handleLogout} 
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
