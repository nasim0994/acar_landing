import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import Product from "./Product";
import { IProduct } from "@/interface/productInterface";

export default function Products() {
  const { data } = useGetAllProductQuery({});
  const products = data?.data;

  return (
    <section className="pt-10">
      <div className="container">
        <h2 className="text-2xl font-semibold text-primary">আমাদের পণ্য</h2>

        <div className="grid gap-4 mt-4 md:grid-cols-2">
          {products?.map((product: IProduct) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
