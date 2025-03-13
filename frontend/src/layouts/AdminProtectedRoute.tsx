import { userLogout } from "@/redux/features/user/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
};

export default function AdminProtectedRoute({ children }: TProtectedRoute) {
  const { token, loggedUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!token)
    return <Navigate to="/admin/login" state={{ from: location }} replace />;

  if (
    !token ||
    !(loggedUser?.role === "admin" || loggedUser?.role === "superAdmin")
  )
    dispatch(userLogout());

  return children;
}
