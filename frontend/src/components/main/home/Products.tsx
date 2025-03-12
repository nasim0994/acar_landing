import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import Product from "./Product";

export default function Products() {
  const { data } = useGetAllProductQuery({});
  const products = data?.data;

  return (
    <section className="pt-10">
      <div className="container">
        <h2 className="text-2xl font-semibold text-primary">আমাদের পণ্য</h2>

        <div className="grid gap-4 mt-4 md:grid-cols-2">
          {products?.map((product) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
