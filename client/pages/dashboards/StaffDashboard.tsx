import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { Users, FileText, CreditCard, BookOpen } from "lucide-react";
import { STUDENTS, PAYMENTS } from "@/lib/mock-data";

const StaffDashboard = () => {
  const { user } = useAuth();

  const recentEnrollments = STUDENTS.filter((s) => s.status === "approved").slice(0, 5).length;
  const pendingApprovals = STUDENTS.filter((s) => s.status === "pending").length;
  const recentPayments = PAYMENTS.length;

  const stats = [
    {
      label: "Recent Enrollments",
      value: recentEnrollments,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Pending Approvals",
      value: pendingApprovals,
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
    },
    {
      label: "Payment Records",
      value: recentPayments,
      icon: CreditCard,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
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
                href="/staff/enroll-student"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 font-medium"
              >
                <Users className="w-5 h-5" />
                Enroll New Student
              </a>
              <a
                href="/staff/student-records"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-purple-700 font-medium"
              >
                <FileText className="w-5 h-5" />
                Manage Student Records
              </a>
              <a
                href="/staff/class-management"
                className="flex items-center gap-3 p-3 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors text-amber-700 font-medium"
              >
                <BookOpen className="w-5 h-5" />
                Manage Classes & Sections
              </a>
              <a
                href="/staff/payments"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-700 font-medium"
              >
                <CreditCard className="w-5 h-5" />
                View Payment Records
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Enrollments</h2>
            <div className="space-y-2">
              {STUDENTS.filter((s) => s.status === "approved")
                .slice(0, 5)
                .map((student, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{student.name}</span>
                    <span className="text-sm text-gray-600">{student.classLevel}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffDashboard;
