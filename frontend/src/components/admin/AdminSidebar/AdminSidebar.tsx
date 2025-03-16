import { MdFeaturedPlayList } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCart4, BsBoxSeam } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { PiFlagBannerFill } from "react-icons/pi";
import { MdMonitor, MdOutlineDashboard, MdContactPhone } from "react-icons/md";

import SidebarItems from "./SidebarItems";
import { ISidebarItem } from "@/interface/sidebarInterface";

const adminSidebarItems: ISidebarItem[] = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <BsBoxSeam />,
    title: "Product",
    path: "/admin/product/all",
  },
  {
    icon: <BsCart4 />,
    title: "Orders",
    path: "/admin/orders",
  },
  {
    icon: <PiFlagBannerFill />,
    title: "Banner",
    path: "/admin/banner",
  },
  {
    icon: <MdFeaturedPlayList />,
    title: "Feature",
    path: "/admin/feature",
  },
  {
    icon: <AiOutlineQuestion />,
    title: "Why Choose",
    subMenu: [
      {
        title: "Section",
        path: "/admin/why-choose/section",
      },
      {
        title: "Why Choose",
        path: "/admin/why-choose/all",
      },
    ],
  },
  {
    icon: <FcAbout />,
    title: "FAQ",
    subMenu: [
      {
        title: "FAQ Section",
        path: "/admin/faq-section",
      },
      {
        title: "FAQ",
        path: "/admin/faq/all",
      },
    ],
  },
  {
    icon: <MdContactPhone />,
    title: "Business Info",
    path: "/admin/businessInfo",
  },

  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Favicon",
        path: "/admin/front-end/favicon",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/administrator/all",
  },

  {
    icon: <FaChartLine />,
    title: "SEO Setting",
    path: "/admin/seo",
  },
];

export default function AdminSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav>
          <Link to="/admin/dashboard" className="py-3 block">
            <img
              className="w-[70%] mx-auto"
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>

          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
