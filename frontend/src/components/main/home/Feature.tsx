export default function Feature() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl text-primary font-bold text-center sm:w-3/4 mx-auto">
          আচার ল্যান্ডিং পেজের জন্য ১০টি ফিচার
        </h2>
        <div className="mt-8 grid md:grid-cols-2 items-center">
          <div>
            <img
              src="/images/feature.jpg"
              alt="feature"
              className="w-[80%] mx-auto rounded"
            />
          </div>

          <div>
            <ul className="text-[17px] text-neutral flex flex-col gap-2">
              <li>
                1️⃣ ১০০% খাঁটি ও ঘরোয়া স্বাদ – কোনো কেমিক্যাল ছাড়া বিশুদ্ধ উপায়ে
                তৈরি।
              </li>
              <li>
                2️⃣ বিভিন্ন স্বাদের ভাণ্ডার – টক, ঝাল, মিষ্টি, মশলাদার – সব রকমের
                আচার পাওয়া যাবে।
              </li>
              <li>
                3️⃣ তাজা ও প্রাকৃতিক উপাদান – বাছাই করা ফল ও মশলা দিয়ে তৈরি।
              </li>
              <li>
                4️⃣ সংরক্ষণে সহজ – দীর্ঘদিন ভালো থাকে, কোনো কৃত্রিম প্রিজারভেটিভ
                নেই।
              </li>
              <li>
                5️⃣ স্বাস্থ্যকর ও পুষ্টিকর – হজমে সহায়ক এবং স্বাস্থ্যবান্ধব।
              </li>
              <li>
                6️⃣ অর্ডার করুন সহজেই – অনলাইন বা কলের মাধ্যমে দ্রুত অর্ডার
                দেওয়ার সুবিধা।
              </li>
              <li>
                7️⃣ দ্রুত ডেলিভারি – ঘরে বসেই অর্ডার করুন, দ্রুত পৌঁছে যাবে।
              </li>
              <li>8️⃣ সাশ্রয়ী দাম – বাজারের তুলনায় সেরা দামে সেরা গুণমান।</li>
              <li>
                9️⃣ বড় পরিমাণে কেনার সুযোগ – পারিবারিক বা ব্যবসার জন্য বাল্ক
                অর্ডারের সুবিধা।
              </li>
            </ul>

            <div className="mt-6">
              <a href="#order" className="primary_btn text-sm">
                অর্ডার করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
