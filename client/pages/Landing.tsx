import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Building2 } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Little Scholars Academy</h1>
          </div>
          <Link to="/login">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Little Scholars Academy
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern school management system designed to nurture education, streamline administration, and create a thriving learning community for primary school students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Management</h3>
            <p className="text-gray-600">Complete enrollment and profile management system</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Class Management</h3>
            <p className="text-gray-600">Organize classes, sections, and teacher assignments</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Attendance & Marks</h3>
            <p className="text-gray-600">Track attendance and manage exam results easily</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Role-Based Access</h3>
            <p className="text-gray-600">Secure, role-specific dashboards for all users</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Started</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Login */}
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Existing User?</h4>
              <p className="text-gray-600 mb-6">Login to your account and access your dashboard</p>
              <Link to="/login">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white w-full">
                  Login Now
                </Button>
              </Link>
            </div>

            {/* Register as Teacher */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Register as Teacher</h4>
              <p className="text-gray-600 mb-6">Create a new teacher account and join our academy</p>
              <Link to="/register/teacher">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 w-full"
                >
                  Register as Teacher
                </Button>
              </Link>
            </div>

            {/* Register as Staff */}
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Register as Staff</h4>
              <p className="text-gray-600 mb-6">Join our administrative and support team</p>
              <Link to="/register/staff">
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 hover:text-amber-700 w-full"
                >
                  Register as Staff
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Note about students */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Note:</span> Student registration is handled by school staff only. If you are a student, please contact your local school office for enrollment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Little Scholars Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
