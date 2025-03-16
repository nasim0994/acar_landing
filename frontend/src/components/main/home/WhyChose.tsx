import { IWhyChoose } from "@/interface/whyChooseInterface";
import { useGetAllWhyChooseQuery } from "@/redux/features/whyChoose/whyChooseApi";
import { useGetWhyChooseSectionQuery } from "@/redux/features/whyChoose/whyChooseSectionApi";

export default function WhyChose() {
  const { data: sectionData } = useGetWhyChooseSectionQuery({});
  const { data } = useGetAllWhyChooseQuery({});
  const whyChooses = data?.data;
  const section = sectionData?.data;

  return (
    <section className="py-10 bg-gradient-to-t from-base-100 via-secondary/90 to-secondary">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl text-primary font-bold text-center">
          {section?.title || "কেন আমাদের কাছ থেকে কিনবেন?"}
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 items-start">
          {whyChooses?.map((whyChoose: IWhyChoose) => (
            <div
              key={whyChoose?._id}
              className="bg-base-100 px-4 py-6 rounded flex flex-col justify-center text-center"
            >
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${whyChoose.icon}`}
                alt="feature"
                className="w-14 rounded mx-auto"
              />

              <h2 className="mt-3 text-primary font-semibold text-lg">
                {whyChoose.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#order"
            className="bg-primary text-base-100 px-4 py-2 rounded"
          >
            অর্ডার করতে ক্লিক করুন
          </a>
        </div>
      </div>
    </section>
  );
}
