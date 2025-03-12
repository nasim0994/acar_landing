export default function WhyChose() {
  return (
    <section className="py-10 bg-gradient-to-t from-base-100 via-secondary/90 to-secondary">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl text-primary font-bold text-center">
          {"কেন আমাদের কাছ থেকে আচার কিনবেন?"}
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 items-start">
          <div className="bg-base-100 px-4 py-6 rounded flex flex-col justify-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQK6uu7vSvgJeRA28HGrN9MnQWxqcu7O_9Sg&s"
              alt="feature"
              className="w-16 rounded mx-auto"
            />

            <h2 className="mt-3 text-primary font-semibold">
              খাঁটি ও ঘরোয়া স্বাদ
            </h2>
          </div>

          <div className="bg-base-100 px-4 py-6 rounded flex flex-col justify-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoDfcGTDkXndwY0R-WqeKmOos5ndTBMqOhw&s"
              alt="feature"
              className="w-16 rounded mx-auto"
            />

            <h2 className="mt-3 text-primary font-semibold">
              তাজা ও প্রাকৃতিক উপাদান
            </h2>
          </div>

          <div className="bg-base-100 px-4 py-6 rounded flex flex-col justify-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3BN9x7MWu5MNKyCQf0NikLncfTPWI0ksgg&s"
              alt="feature"
              className="w-16 rounded mx-auto"
            />

            <h2 className="mt-3 text-primary font-semibold">সাশ্রয়ী মূল্য</h2>
          </div>

          <div className="bg-base-100 px-4 py-6 rounded flex flex-col justify-center text-center">
            <img
              src="https://www.shutterstock.com/image-vector/delivery-service-icon-courier-vector-600nw-2439593937.jpg"
              alt="feature"
              className="w-16 rounded mx-auto"
            />

            <h2 className="mt-3 text-primary font-semibold">দ্রুত ডেলিভারি</h2>
          </div>
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
