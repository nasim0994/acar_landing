import AdminLayout from "@/layouts/AdminLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";
import AddAdministrator from "@/pages/admin/administrator/AddAdministrator";
import AllAdministrator from "@/pages/admin/administrator/AllAdministrator";
import Banner from "@/pages/admin/Banner";
import BusinessInfo from "@/pages/admin/BusinessInfo";
import Dashboard from "@/pages/admin/Dashboard";
import AddFaq from "@/pages/admin/faq/AddFaq";
import AllFaq from "@/pages/admin/faq/AllFaq";
import EditFaq from "@/pages/admin/faq/EditFaq";
import FaqSection from "@/pages/admin/faq/FaqSection";
import Feature from "@/pages/admin/Feature";
import Favicon from "@/pages/admin/frontend/Favicon";
import Logo from "@/pages/admin/frontend/Logo";
import AllOrder from "@/pages/admin/order/AllOrder";
import AddProduct from "@/pages/admin/product/AddProduct";
import AllProduct from "@/pages/admin/product/AllProduct";
import EditProduct from "@/pages/admin/product/EditProduct";
import SEO from "@/pages/admin/Seo";
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

    // order
    {
      path: "order/all",
      element: <AllOrder />,
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

    // faq
    {
      path: "faq-section",
      element: <FaqSection />,
    },
    {
      path: "faq/all",
      element: <AllFaq />,
    },
    {
      path: "faq/add",
      element: <AddFaq />,
    },
    {
      path: "faq/edit/:id",
      element: <EditFaq />,
    },

    // business info
    {
      path: "businessInfo",
      element: <BusinessInfo />,
    },

    // frontend
    {
      path: "frontend/logo",
      element: <Logo />,
    },
    {
      path: "frontend/favicon",
      element: <Favicon />,
    },

    // Administrator
    {
      path: "administrator/all",
      element: <AllAdministrator />,
    },
    {
      path: "administrator/add",
      element: <AddAdministrator />,
    },

    // seo
    {
      path: "seo",
      element: <SEO />,
    },
  ],
};
