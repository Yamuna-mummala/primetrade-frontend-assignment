import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 bg-slate-800 shadow-md">
        <h1 className="text-xl font-bold">PrimeTrade Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-8">

        {/* Welcome Section */}
        <h2 className="text-3xl font-bold mb-6">
          Welcome Back 👋
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
            <p className="text-3xl font-bold text-indigo-400">12</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-400">8</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Pending</h3>
            <p className="text-3xl font-bold text-yellow-400">4</p>
          </div>

        </div>

        {/* Profile Section */}
        <div className="mt-10 bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Profile Overview</h3>
          <p className="text-gray-400">
            This is your personal dashboard. You can manage tasks, monitor progress,
            and access your account details here.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
