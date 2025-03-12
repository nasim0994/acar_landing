import AdminLayout from "@/layouts/AdminLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";
import Dashboard from "@/pages/admin/Dashboard";
import Login from "@/pages/main/Login";

export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  ),
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
};
