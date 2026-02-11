import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to PrimeTrade Dashboard
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-md">
        A simple authentication-based dashboard built using
        React, Node.js, MongoDB, and JWT.
      </p>

      <div className="flex gap-6">
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
