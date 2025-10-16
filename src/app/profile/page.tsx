// app/profile/page.tsx
"use client";

import React from "react";

export default function ProfilePage() {
  // Mock user data — replace with real session or user context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-28 h-28 rounded-full object-cover border"
        />

        <div className="flex-1">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={user.name}
              disabled
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
