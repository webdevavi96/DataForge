import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "../components/export.js";

function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">

      <div className="absolute top-20 left-20 h-72 w-72 bg-indigo-600 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 right-20 h-72 w-72 bg-purple-600 rounded-full blur-[120px] opacity-20" />

      <Card
        className="
                    relative
                    w-full
                    max-w-md
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    shadow-2xl
                    p-8
                "
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-slate-400 mt-3">
            Join DataForger and start visualizing your data
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                text-white
                                placeholder:text-slate-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                            "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                text-white
                                placeholder:text-slate-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                            "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                text-white
                                placeholder:text-slate-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                            "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                                w-full
                                px-4 py-3
                                rounded-xl
                                bg-slate-900/70
                                border border-slate-700
                                text-white
                                placeholder:text-slate-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-indigo-500
                            "
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 accent-indigo-500"
            />

            <p className="text-sm text-slate-400">
              I agree to the{" "}
              <span className="text-indigo-400 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-indigo-400 cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>

          <Button
            variant="primary"
            className="w-full"
          >
            Create Account
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
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default SignUpPage;