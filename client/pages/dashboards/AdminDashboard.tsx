import DashboardLayout from "@/components/DashboardLayout";
import { Users, GraduationCap, UserCog, Clock } from "lucide-react";
import { STUDENTS, TEACHERS, STAFF_MEMBERS } from "@/lib/mock-data";

const AdminDashboard = () => {
  const totalStudents = STUDENTS.filter((s) => s.status === "approved").length;
  const totalTeachers = TEACHERS.filter((t) => t.status === "approved").length;
  const totalStaff = STAFF_MEMBERS.filter((s) => s.status === "approved").length;
  const pendingApprovals =
    STUDENTS.filter((s) => s.status === "pending").length +
    TEACHERS.filter((t) => t.status === "pending").length +
    STAFF_MEMBERS.filter((s) => s.status === "pending").length;

  const stats = [
    {
      label: "Total Students",
      value: totalStudents,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Total Teachers",
      value: totalTeachers,
      icon: GraduationCap,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Total Staff",
      value: totalStaff,
      icon: UserCog,
      color: "bg-amber-100 text-amber-600",
    },
    {
      label: "Pending Approvals",
      value: pendingApprovals,
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your school.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                href="/admin/approvals"
                className="flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-orange-700 font-medium"
              >
                <Clock className="w-5 h-5" />
                Review Pending Approvals
              </a>
              <a
                href="/admin/students"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 font-medium"
              >
                <Users className="w-5 h-5" />
                Manage Students
              </a>
              <a
                href="/admin/class-management"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-purple-700 font-medium"
              >
                <Users className="w-5 h-5" />
                Manage Classes & Sections
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Database</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Connected
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Active Users</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {totalStudents + totalTeachers + totalStaff}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Server Status</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">New student enrollment pending approval</p>
                <p className="text-sm text-gray-600">Sara Ibrahim - Nursery Class</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-green-500 bg-green-50">
              <GraduationCap className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Teacher registration submitted</p>
                <p className="text-sm text-gray-600">Zainab Sheikh - Art & Craft</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-amber-500 bg-amber-50">
              <UserCog className="w-5 h-5 text-amber-600" />
              <div>
                <p className="font-medium text-gray-900">Staff registration submitted</p>
                <p className="text-sm text-gray-600">Neha Patel - Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
