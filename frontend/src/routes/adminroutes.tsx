import AdminLayout from "@/layouts/AdminLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";
import Banner from "@/pages/admin/Banner";
import Dashboard from "@/pages/admin/Dashboard";
import { Navigate } from "react-router-dom";

export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  ),
  children: [
    {
      index: true,
      element: <Navigate to="/admin/dashboard" replace />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "banner",
      element: <Banner />,
    },
  ],
};
