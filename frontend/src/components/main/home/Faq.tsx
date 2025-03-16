import { IFaq } from "@/interface/faqInterface";
import { useGetAllFaqQuery } from "@/redux/features/faq/faqApi";
import { useGetFaqSectionQuery } from "@/redux/features/faq/faqSectionApi";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  const [toggleFAQ, setToggleFAQ] = useState<number | null>(null);

  const { data: sectionData } = useGetFaqSectionQuery({});
  const { data } = useGetAllFaqQuery({});
  const faqs = data?.data;
  const section = sectionData?.data;

  const handelToggleFAQ = (i: number) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl text-primary font-semibold text-center sm:w-3/4 mx-auto">
          {section?.title || "প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)"}
        </h2>

        <div className="mt-6 sm:w-2/3 mx-auto">
          {faqs?.map((faq: IFaq, i: number) => (
            <div key={i} className="mb-2">
              <button
                onClick={() => handelToggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 bg-primary/30 font-semibold text-primary rounded text-sm sm:text-base text-start"
              >
                <p>{faq?.question}</p>
                <span>
                  {toggleFAQ === i && "activeFAQ" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>

              {/* Content/Ans */}
              <div
                className={`text-justify text-primary duration-500 faq-content ${
                  toggleFAQ === i && "activeFAQ"
                }`}
              >
                <p className="pb-5 p-3 text-sm sm:text-base">{faq?.answer}</p>
              </div>
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
