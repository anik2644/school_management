import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import RegisterTeacher from "./pages/RegisterTeacher";
import RegisterStaff from "./pages/RegisterStaff";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Dashboards
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import StaffDashboard from "./pages/dashboards/StaffDashboard";
import StudentDashboard from "./pages/dashboards/StudentDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            <Route
              path="/dashboard/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/approvals"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/class-management"
              element={
                <ProtectedRoute allowedRoles={["admin", "staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/teachers"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/staff"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/enrollment"
              element={
                <ProtectedRoute allowedRoles={["admin", "staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/attendance"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/exam-results"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/payments"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />

            {/* Teacher Routes */}
            <Route
              path="/dashboard/teacher"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <TeacherDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/sections"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/attendance"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/marks"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/students"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/results"
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />

            {/* Staff Routes */}
            <Route
              path="/dashboard/staff"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <StaffDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/enroll-student"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/student-records"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/class-management"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/enrollment"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/payments"
              element={
                <ProtectedRoute allowedRoles={["staff"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />

            {/* Student Routes */}
            <Route
              path="/dashboard/student"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/profile"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/attendance"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/results"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <Placeholder />
                </ProtectedRoute>
              }
            />

            {/* Registration Routes */}
            <Route path="/register/teacher" element={<RegisterTeacher />} />
            <Route path="/register/staff" element={<RegisterStaff />} />

            {/* Catch-all routes */}
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
