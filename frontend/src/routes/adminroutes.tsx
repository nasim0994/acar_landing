import AdminLayout from "@/layouts/AdminLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";
import Banner from "@/pages/admin/Banner";
import Dashboard from "@/pages/admin/Dashboard";
import Feature from "@/pages/admin/Feature";
import AddProduct from "@/pages/admin/product/AddProduct";
import AllProduct from "@/pages/admin/product/AllProduct";
import EditProduct from "@/pages/admin/product/EditProduct";
import AddWhyChoose from "@/pages/admin/whyChose/AddWhyChoose";
import AllWhyChoose from "@/pages/admin/whyChose/AllWhyChoose";
import EditWhyChoose from "@/pages/admin/whyChose/EditWhyChoose";
import WhyChooseSection from "@/pages/admin/whyChose/WhyChoseSection";
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

    // product
    {
      path: "product/all",
      element: <AllProduct />,
    },
    {
      path: "product/add",
      element: <AddProduct />,
    },
    {
      path: "product/edit/:id",
      element: <EditProduct />,
    },

    // why choose
    {
      path: "why-choose/section",
      element: <WhyChooseSection />,
    },
    {
      path: "why-choose/all",
      element: <AllWhyChoose />,
    },
    {
      path: "why-choose/add",
      element: <AddWhyChoose />,
    },
    {
      path: "why-choose/edit/:id",
      element: <EditWhyChoose />,
    },

    // Feature
    {
      path: "feature",
      element: <Feature />,
    },
  ],
};
