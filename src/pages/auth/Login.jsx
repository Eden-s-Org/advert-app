import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (identifier && password) {
      try {
        const userData = {
          usernameOrEmail: identifier,
          password,
        };
        const response = await axios.post(
          "https://advertising-api-1x6a.onrender.com/api/login",
          userData
        );

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);

        if (response.data.user.role === "customer") {
          navigate("/adverts");
        } else {
          navigate("/dashboard");
        }

      } catch (error) {
        alert(
          "Login failed: " + (error.response?.data?.message || error.message)
        );
      }
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-center text-xl font-bold">Login</h2>
        <form className="space-y-4 mt-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <Link to="/signup" className="flex justify-center mt-3 font-semibold">
          <p>
            Don't have an account?{" "}
            <span className="text-blue-600 underline font-bold">Sign-Up</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
