import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/lib/mock-data";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role as UserRole)) {
    // Redirect to their own dashboard instead of showing access denied
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
