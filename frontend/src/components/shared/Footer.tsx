import { useGetBusinessQuery } from "@/redux/features/businessInfo/businessInfoApi";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { data } = useGetBusinessQuery({});
  const business = data?.data;

  return (
    <footer className="bg-primary text-base-100 py-5">
      <div className="container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300">
            Copyright© 2025 {business?.companyName}. All Rights Reserved.
            develop by{" "}
            <Link
              to="https://emanagerit.com"
              target="_blank"
              className="underline"
            >
              eManager
            </Link>
          </span>

          <div className="flex gap-3 items-center">
            <Link
              to={business?.facebook}
              target="_blank"
              className="w-7 h-7 rounded-full bg-base-100 flex justify-center items-center text-primary hover:bg-secondary hover:text-primary duration-200"
            >
              <BiLogoFacebook className="text-xl" />
            </Link>

            <Link
              to={`https://api.whatsapp.com/send?phone=${business?.whatsapp}`}
              target="_blank"
              className="w-7 h-7 rounded-full bg-base-100 flex justify-center items-center text-primary hover:bg-secondary hover:text-primary duration-200"
            >
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
