import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // SUCCESS LOGIN
      if (res.data.token) {
        // save token in browser
        localStorage.setItem("token", res.data.token);

        // go to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            className="w-full mb-4 p-3 rounded-lg bg-slate-700 text-white outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className="w-full mb-4 p-3 rounded-lg bg-slate-700 text-white outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
