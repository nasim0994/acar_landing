import { FaUserShield, FaCartPlus } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { useGetAllAdminsQuery } from "@/redux/features/user/userApi";
import { useGetAllFaqQuery } from "@/redux/features/faq/faqApi";

export default function Dashboard() {
  const { data: users } = useGetAllAdminsQuery({});
  const { data: faqs } = useGetAllFaqQuery({});
  // const { data: orders } = useGetAllOrdersQuery({});
  // const { data: features } = useGetAllFeatureQuery({});

  return (
    <section className="pb-5">
      <div className="grid sm:grid-cols-4 gap-1 sm:gap-4">
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Admin</p>
            <h3 className="text-primary font-bold">{users?.data?.length}</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaUserShield className="text-xl" />
          </div>
        </div>
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Orders</p>
            {/* <h3 className="text-primary font-bold">{orders?.data?.length}</h3> */}
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaCartPlus className="text-xl" />
          </div>
        </div>
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Feature</p>
            <h3 className="text-primary font-bold">
              {/* {features?.data?.length} */}
            </h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <MdFeaturedPlayList className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total FAQ</p>
            <h3 className="text-primary font-bold">{faqs?.data?.length}</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FcAbout className="text-xl" />
          </div>
        </div>
      </div>

      {/* Orders */}
      {/* <OrderTable /> */}
    </section>
  );
}
