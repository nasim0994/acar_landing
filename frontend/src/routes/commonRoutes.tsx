import OrderSuccess from "@/components/main/home/OrderSuccess";
import Login from "@/pages/admin/Login";

export const authRoutes = {
  path: "admin/login",
  element: <Login />,
};

export const orderSuccessRoutes = {
  path: "/order/success/:id",
  element: <OrderSuccess />,
};
