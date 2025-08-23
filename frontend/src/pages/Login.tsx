import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url("/assets/pic1.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <p className="text-center text-green-800 font-medium text-lg">Hi Kisaan 👋!!</p>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-900">Login</h2>
        {error && <div className="text-red-600 text-center">{error}</div>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">
          Login
        </Button>
        <div className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-700 hover:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
