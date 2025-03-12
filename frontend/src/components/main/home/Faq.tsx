import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    _id: "1",
    qus: "আপনার আচারে কি কোনো কেমিক্যাল বা প্রিজারভেটিভ ব্যবহার করা হয়?",
    ans: "না, আমাদের আচার ১০০% খাঁটি এবং কোনো কেমিক্যাল বা কৃত্রিম প্রিজারভেটিভ ছাড়া তৈরি করা হয়।",
  },
  {
    _id: "2",
    qus: "আপনারা কোন কোন স্বাদের আচার বিক্রি করেন?",
    ans: "আমরা টক, ঝাল, মিষ্টি, মশলাদারসহ বিভিন্ন ধরনের আচার বিক্রি করি, যা সবার পছন্দের উপযোগী।",
  },
  {
    _id: "3",
    qus: "আমি কিভাবে অর্ডার করতে পারি?",
    ans: "আপনি আমাদের ওয়েবসাইট বা ফেসবুক পেজ থেকে সরাসরি অর্ডার করতে পারেন। এছাড়াও কল বা মেসেজের মাধ্যমেও অর্ডার দেওয়া যায়।",
  },
  {
    _id: "4",
    qus: "আপনারা কত দিনের মধ্যে ডেলিভারি দেন?",
    ans: "ঢাকার মধ্যে ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ৩-৫ কার্যদিবসের মধ্যে ডেলিভারি করি।",
  },
  {
    _id: "5",
    qus: "আমি কি বাল্ক (পাইকারি) অর্ডার দিতে পারবো?",
    ans: "হ্যাঁ, আমরা পাইকারি ক্রেতাদের জন্য বিশেষ ছাড় দিয়ে থাকি। পাইকারি অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন।",
  },
  {
    _id: "6",
    qus: "পেমেন্ট করার কী কী অপশন আছে?",
    ans: "আমরা বিকাশ, নগদ, রকেট ও ক্যাশ অন ডেলিভারি পেমেন্ট গ্রহণ করি।",
  },
];

export default function Faq() {
  const [toggleFAQ, setToggleFAQ] = useState<number | null>(null);
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
          প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
        </h2>

        <div className="mt-6 sm:w-2/3 mx-auto">
          {faqs?.map((faq, i) => (
            <div key={i} className="mb-2">
              <button
                onClick={() => handelToggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 bg-primary/30 font-semibold text-primary rounded text-sm sm:text-base text-start"
              >
                <p>{faq?.qus}</p>
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
                <p className="pb-5 p-3 text-sm sm:text-base">{faq?.ans}</p>
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
