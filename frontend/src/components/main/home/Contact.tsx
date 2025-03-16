import { useGetBusinessQuery } from "@/redux/features/businessInfo/businessInfoApi";

export default function Contact() {
  const { data } = useGetBusinessQuery({});
  const business = data?.data;

  return (
    <section className="pt-10 pb-20 bg-gradient-to-t from-base-100 via-secondary/90 to-secondary relative">
      <div className="container">
        <h2 className="text-center font-semibold text-neutral text-lg">
          প্রয়োজন হলে কল করুন: {business?.phone}, {business?.whatsapp}
        </h2>
      </div>
    </section>
  );
}
