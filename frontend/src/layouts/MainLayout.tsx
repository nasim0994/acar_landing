import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <main className="min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
