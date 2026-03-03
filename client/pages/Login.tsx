import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { Building2, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = login(email, password);

      if (result.success && result.user) {
        // Redirect based on user role
        setTimeout(() => {
          navigate(`/dashboard/${result.user!.role}`);
        }, 300);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const demoAccounts = [
    { role: "Admin", email: "admin@littlescholars.edu", password: "admin123", color: "text-gray-800" },
    { role: "Teacher", email: "sophia.williams@littlescholars.edu", password: "teacher123", color: "text-green-600" },
    { role: "Staff", email: "malik@littlescholars.edu", password: "staff123", color: "text-amber-600" },
    { role: "Student", email: "ahmed.ali@student.edu", password: "student123", color: "text-blue-600" },
  ];

  const handleQuickLogin = (account: typeof demoAccounts[0]) => {
    setEmail(account.email);
    setPassword(account.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Little Scholars Academy</h1>
          <p className="text-gray-600 mt-2">School Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Login to Your Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-semibold transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Demo Accounts */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">📌 Demo Accounts (for testing)</h3>
          <div className="space-y-3">
            {demoAccounts.map((account, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
                onClick={() => handleQuickLogin(account)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className={`font-semibold ${account.color}`}>{account.role}</p>
                    <p className="text-xs text-gray-600">{account.email}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                    Use
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          New to the system?{" "}
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
