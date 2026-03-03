import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, Users, BarChart3 } from "lucide-react";
import { SECTIONS } from "@/lib/mock-data";

const TeacherDashboard = () => {
  const { user } = useAuth();

  // Get sections assigned to this teacher
  const assignedSections = SECTIONS.filter((section) =>
    section.assignedTeachers.includes(user?.id || "")
  );

  const totalStudents = assignedSections.reduce((sum, section) => sum + section.enrolledStudents.length, 0);

  const stats = [
    {
      label: "Assigned Sections",
      value: assignedSections.length,
      icon: BookOpen,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Total Students",
      value: totalStudents,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Classes Today",
      value: assignedSections.length,
      icon: BarChart3,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome, {user?.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a
                href="/teacher/attendance"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-700 font-medium"
              >
                <Users className="w-5 h-5" />
                Mark Attendance
              </a>
              <a
                href="/teacher/marks"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 font-medium"
              >
                <BarChart3 className="w-5 h-5" />
                Enter Exam Marks
              </a>
              <a
                href="/teacher/sections"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-purple-700 font-medium"
              >
                <BookOpen className="w-5 h-5" />
                View My Sections
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Assigned Sections</h2>
            <div className="space-y-2">
              {assignedSections.length > 0 ? (
                assignedSections.map((section, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <span className="text-sm text-gray-600">{section.enrolledStudents.length} students</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-sm">No sections assigned yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
