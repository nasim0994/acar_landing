import { useGetFeatureQuery } from "@/redux/features/feature/featureApi";
import parser from "html-react-parser";

export default function Feature() {
  const { data } = useGetFeatureQuery({});
  const feature = data?.data;

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl text-primary font-bold text-center sm:w-3/4 mx-auto">
          {feature?.title}
        </h2>
        <div className="mt-8 grid md:grid-cols-2 items-center">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${feature?.image}`}
              alt="feature"
              className="w-[80%] mx-auto rounded"
            />
          </div>

          <div>
            <div>{feature?.description && parser(feature.description)}</div>

            <div className="mt-6">
              <a href="#order" className="primary_btn text-sm">
                অর্ডার করতে ক্লিক করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
