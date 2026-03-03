import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardList,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Clock,
  GraduationCap,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const roleColors: Record<string, { bg: string; text: string; icon: string }> = {
  admin: {
    bg: "bg-gray-900",
    text: "text-gray-700",
    icon: "bg-gray-100",
  },
  teacher: {
    bg: "bg-green-900",
    text: "text-green-700",
    icon: "bg-green-100",
  },
  staff: {
    bg: "bg-amber-900",
    text: "text-amber-700",
    icon: "bg-amber-100",
  },
  student: {
    bg: "bg-blue-900",
    text: "text-blue-700",
    icon: "bg-blue-100",
  },
};

const getMenuItems = (role: string) => {
  const baseItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: `/dashboard/${role}`,
      roles: ["admin", "teacher", "staff", "student"],
    },
  ];

  const roleMenus = {
    admin: [
      ...baseItems,
      { label: "Approval Queue", icon: Clock, href: `/admin/approvals`, roles: ["admin"] },
      {
        label: "Class & Section Management",
        icon: BookOpen,
        href: `/admin/class-management`,
        roles: ["admin"],
      },
      { label: "Student Management", icon: Users, href: `/admin/students`, roles: ["admin"] },
      { label: "Teacher Management", icon: GraduationCap, href: `/admin/teachers`, roles: ["admin"] },
      { label: "Staff Management", icon: Users, href: `/admin/staff`, roles: ["admin"] },
      {
        label: "Enrollment Management",
        icon: ClipboardList,
        href: `/admin/enrollment`,
        roles: ["admin"],
      },
      { label: "Attendance Reports", icon: BarChart3, href: `/admin/attendance`, roles: ["admin"] },
      { label: "Exam Results", icon: FileText, href: `/admin/exam-results`, roles: ["admin"] },
      { label: "Payment Records", icon: CreditCard, href: `/admin/payments`, roles: ["admin"] },
    ],
    teacher: [
      ...baseItems,
      { label: "My Sections", icon: BookOpen, href: `/teacher/sections`, roles: ["teacher"] },
      { label: "Attendance", icon: ClipboardList, href: `/teacher/attendance`, roles: ["teacher"] },
      { label: "Exam Marks", icon: BarChart3, href: `/teacher/marks`, roles: ["teacher"] },
      { label: "Student Profiles", icon: Users, href: `/teacher/students`, roles: ["teacher"] },
      { label: "Exam Results", icon: FileText, href: `/teacher/results`, roles: ["teacher"] },
    ],
    staff: [
      ...baseItems,
      {
        label: "Enroll New Student",
        icon: Users,
        href: `/staff/enroll-student`,
        roles: ["staff"],
      },
      {
        label: "Student Records",
        icon: ClipboardList,
        href: `/staff/student-records`,
        roles: ["staff"],
      },
      {
        label: "Class & Section Management",
        icon: BookOpen,
        href: `/staff/class-management`,
        roles: ["staff"],
      },
      {
        label: "Enrollment Management",
        icon: Users,
        href: `/staff/enrollment`,
        roles: ["staff"],
      },
      { label: "Payment Records", icon: CreditCard, href: `/staff/payments`, roles: ["staff"] },
    ],
    student: [
      ...baseItems,
      { label: "My Profile", icon: Users, href: `/student/profile`, roles: ["student"] },
      {
        label: "Attendance",
        icon: ClipboardList,
        href: `/student/attendance`,
        roles: ["student"],
      },
      { label: "Exam Results", icon: FileText, href: `/student/results`, roles: ["student"] },
    ],
  };

  return roleMenus[role as keyof typeof roleMenus] || baseItems;
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  const roleColor = roleColors[user.role as keyof typeof roleColors];
  const menuItems = getMenuItems(user.role);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 bg-white border-r border-gray-200 transition-all duration-300 z-50",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className={cn("border-b border-gray-200 p-4 flex items-center gap-3", !sidebarOpen && "justify-center")}>
          <div className={`${roleColor.bg} p-2 rounded-lg flex-shrink-0`}>
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          {sidebarOpen && <span className="font-bold text-gray-900 truncate">LSA</span>}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link key={idx} to={item.href}>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors",
                      isActive
                        ? `${roleColor.bg} text-white`
                        : `text-gray-700 hover:${roleColor.icon} hover:bg-gray-50`
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="truncate">{item.label}</span>}
                  </button>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Toggle */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("flex-1 flex flex-col transition-all duration-300", sidebarOpen ? "ml-64" : "ml-20")}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Empty space on left */}
            <div></div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                  `${roleColor.icon} ${roleColor.text} hover:bg-opacity-80`
                )}
              >
                <div>
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs capitalize">{user.role}</p>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
