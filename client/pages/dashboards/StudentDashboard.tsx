import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { Users, BarChart3, ClipboardList } from "lucide-react";
import { SECTIONS, STUDENTS } from "@/lib/mock-data";

const StudentDashboard = () => {
  const { user } = useAuth();

  const student = STUDENTS.find((s) => s.id === user?.id);
  const enrolledSection = SECTIONS.find((section) => section.enrolledStudents.includes(user?.id || ""));

  const stats = [
    {
      label: "Class",
      value: enrolledSection?.name || "Not Enrolled",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Status",
      value: user?.status === "approved" ? "Active" : "Pending",
      icon: BarChart3,
      color: user?.status === "approved" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600",
    },
    {
      label: "Enrollment Date",
      value: student?.admissionDate ? new Date(student.admissionDate).toLocaleDateString() : "N/A",
      icon: ClipboardList,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
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
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <div className="space-y-3">
              <a
                href="/student/profile"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 font-medium"
              >
                <Users className="w-5 h-5" />
                View My Profile
              </a>
              <a
                href="/student/attendance"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-700 font-medium"
              >
                <ClipboardList className="w-5 h-5" />
                View Attendance
              </a>
              <a
                href="/student/results"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-purple-700 font-medium"
              >
                <BarChart3 className="w-5 h-5" />
                View Exam Results
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Student Information</h2>
            <div className="space-y-2">
              {student && (
                <>
                  <div className="flex justify-between items-center p-2">
                    <span className="text-gray-600">Date of Birth:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(student.dateOfBirth).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <span className="text-gray-600">Gender:</span>
                    <span className="font-medium text-gray-900 capitalize">{student.gender}</span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <span className="text-gray-600">Guardian:</span>
                    <span className="font-medium text-gray-900">{student.guardianName}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
