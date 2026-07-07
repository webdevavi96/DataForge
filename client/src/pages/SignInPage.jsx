import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Card } from "../components/export.js";
import { useAuth } from "../hooks/hookExport.js";

function SignInPage() {

  const { login } =useAuth();
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(formData);

    if (!user) return

    if (user.isVerified) navigate("/dashboard", { replace: true })

  }



  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">

      <div className="absolute top-20 left-20 h-72 w-72 bg-indigo-600 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 right-20 h-72 w-72 bg-purple-600 rounded-full blur-[120px] opacity-20" />

      <Card className="
                relative
                w-full
                max-w-md
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-2xl
                p-8
            ">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-3">
            Sign in to continue to DataForger
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              onChange={handleChange}
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                                text-white
                                placeholder:text-slate-500
                            "
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              name="password"
              onChange={handleChange}
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                                text-white
                                placeholder:text-slate-500
                            "
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
          >
            Sign In
          </Button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-slate-700"></div>

          <span className="px-4 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-slate-700"></div>
        </div>

        <Button
          variant="secondary"
          className="w-full"
        >
          Continue with Google
        </Button>

        <p className="text-center text-slate-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign Up
          </Link>
        </p>

      </Card>
    </div>
  );
}

export default SignInPage;