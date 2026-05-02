import React, { useState } from "react";
import { CakeSlice } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅ initialize navigate

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Here you can add authentication logic (API call etc.)

    // ✅ Redirect to Home Page after login/signup
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      {/* Top Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-red-100 p-3 rounded-full">
            <CakeSlice className="h-10 w-10 text-red-500" />
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? "Sign in to your account" : "Create a new account"}
        </h2>
      </div>

      {/* Form Section */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">

          {/* ✅ Form uses handleSubmit */}
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Full Name (only signup) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>

            {/* Remember Me */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-red-500 border-gray-300 rounded" />
                  <label className="ml-2 text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text-sm text-red-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          {/* Toggle Section */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              {isLogin ? "New to BakingGo?" : "Already have an account?"}
            </p>

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-500 font-medium hover:underline"
            >
              {isLogin ? "Create an account" : "Sign in instead"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}