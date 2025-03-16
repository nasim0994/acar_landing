import { useGetBannerQuery } from "@/redux/features/banner/bannerApi";
import { useGetLogosQuery } from "@/redux/features/logo/logoApi";
import { Link } from "react-router-dom";

export default function Hero() {
  const { data: logoData } = useGetLogosQuery({});
  const { data } = useGetBannerQuery({});
  const banner = data?.data;
  const logo = logoData?.data?.logo;

  return (
    <section className="relative min-h-[100vh] bg-gradient-to-t from-primary/70 via-secondary to-secondary/90 pb-10 sm:pb-0">
      <header className="pt-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${logo}`}
                alt="logo"
                className="w-28 sm:w-40"
              />
            </Link>

            <a href="#order" className="primary_btn text-sm">
              অর্ডার করতে ক্লিক করুন
            </a>
          </div>
        </div>
      </header>

      <div className="min-h-[100vh] relative flex items-center justify-center">
        <div className="container relative z-20">
          <div className="mt-10 xl:-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-center">
            <div className="pb-10">
              <h2 className="text-3xl md:text-5xl text-primary font-bold">
                {banner?.title}
              </h2>

              <p className="mt-2 sm:mt-4 sm:text-lg font-medium text-neutral">
                {banner?.description}
              </p>

              <div className="mt-8">
                <a
                  href="#order"
                  className="bg-primary text-base-100 px-4 py-2 rounded"
                >
                  অর্ডার করুন
                </a>
              </div>
            </div>

            <div className="-order-1 lg:order-1">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${banner?.image}`}
                alt={banner?.title}
                className="w-[60%] lg:w-[80%] mx-auto"
              />
            </div>
          </div>
        </div>

        {/* shine */}
        <div className="shine1"></div>
        <div className="shine2"></div>
        <div className="shine3"></div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute z-10 bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L26.7,117.3C53.3,139,107,181,160,208C213.3,235,267,245,320,250.7C373.3,256,427,256,480,240C533.3,224,587,192,640,186.7C693.3,181,747,203,800,213.3C853.3,224,907,224,960,234.7C1013.3,245,1067,267,1120,240C1173.3,213,1227,139,1280,112C1333.3,85,1387,107,1413,117.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
