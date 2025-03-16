import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { adminRoutes } from "./adminRoutes";
import { authRoutes, orderSuccessRoutes } from "./commonRoutes";

export const router = createBrowserRouter([
  mainRoutes,
  authRoutes,
  adminRoutes,
  orderSuccessRoutes,
]);
