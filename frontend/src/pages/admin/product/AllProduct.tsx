import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { TResponse } from "@/interface/globalInterface";
import { IProduct } from "@/interface/productInterface";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "@/redux/features/product/productApi";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AllProduct() {
  const { data, isLoading, isError, isSuccess } = useGetAllProductQuery({});
  const products = data?.data;

  const [deleteProduct] = useDeleteProductMutation();
  const deleteProductHandler = async (id: string) => {
    const isConfirm = window.confirm("Are you sure delete this product?");
    if (isConfirm) {
      const res = (await deleteProduct(id)) as TResponse;
      if (res?.data?.success) {
        toast.success("Product deleted successfully");
      } else {
        toast.error(res?.error?.data?.message || "Failed to delete product");
        console.log(res);
      }
    }
  };

  let content = null;
  if (isLoading) return (content = <TableSkeleton />);

  if (isError) {
    content = (
      <p className="text-red-500 mt-5">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {products?.map((product: IProduct, i: number) => (
          <tr key={product?._id}>
            <td>{i + 1}</td>
            <td>{product?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${product?.image}`}
                alt={product?.title}
                className="w-14 h-8 rounded"
              />
            </td>
            <td>{product?.price}TK</td>
            <td>{product?.discountPrice}TK</td>
            <td>
              <div className="flex gap-3 items-center">
                <Link to={`/admin/product/edit/${product?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteProductHandler(product?._id)}>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="p-3 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Products</h1>
          <Link to="/admin/product/add" className="primary_btn text-sm">
            Add Product
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Discount Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
}
