import { useGetAllProductQuery } from "@/redux/features/product/productApi";

export default function Dashboard() {
  const { data: product } = useGetAllProductQuery({});

  return <div>Dashboard</div>;
}
