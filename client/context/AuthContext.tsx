import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, UserRole, ADMIN_USER, STUDENTS, TEACHERS, STAFF_MEMBERS } from "@/lib/mock-data";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { success: boolean; message: string; user?: User };
  logout: () => void;
  registerTeacher: (data: any) => { success: boolean; message: string };
  registerStaff: (data: any) => { success: boolean; message: string };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Mock admin login
    if (email === "admin@littlescholars.edu" && password === "admin123") {
      setUser(ADMIN_USER);
      return { success: true, message: "Login successful", user: ADMIN_USER };
    }

    // Mock student login
    const student = STUDENTS.find((s) => s.email === email);
    if (student && password === "student123") {
      if (student.status !== "approved") {
        return {
          success: false,
          message: "Your account is pending approval. Please contact the administrator.",
        };
      }
      setUser(student);
      return { success: true, message: "Login successful", user: student };
    }

    // Mock teacher login
    const teacher = TEACHERS.find((t) => t.email === email);
    if (teacher && password === "teacher123") {
      if (teacher.status !== "approved") {
        return {
          success: false,
          message: "Your account is pending approval. Please contact the administrator.",
        };
      }
      setUser(teacher);
      return { success: true, message: "Login successful", user: teacher };
    }

    // Mock staff login
    const staff = STAFF_MEMBERS.find((s) => s.email === email);
    if (staff && password === "staff123") {
      if (staff.status !== "approved") {
        return {
          success: false,
          message: "Your account is pending approval. Please contact the administrator.",
        };
      }
      setUser(staff);
      return { success: true, message: "Login successful", user: staff };
    }

    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => {
    setUser(null);
  };

  const registerTeacher = (data: any) => {
    // In a real app, this would send data to the server
    console.log("Teacher registration:", data);
    return { success: true, message: "Registration successful. Pending admin approval." };
  };

  const registerStaff = (data: any) => {
    // In a real app, this would send data to the server
    console.log("Staff registration:", data);
    return { success: true, message: "Registration successful. Pending admin approval." };
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, registerTeacher, registerStaff }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
