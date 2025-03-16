import Pagination from "@/components/shared/Pagination";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { IOrder } from "@/interface/orderInterface";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/features/order/orderApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

export default function OrderTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const query = {
    page: currentPage,
    limit,
  };

  const { data, isLoading } = useGetAllOrdersQuery(query);
  const [deleteOrder, { isLoading: deleteLoading }] = useDeleteOrderMutation();
  const { pathname } = useLocation();

  const orders = data?.data;

  const [updateOrderStatus, { isLoading: statusLoading }] =
    useUpdateOrderStatusMutation();

  if (isLoading) return <TableSkeleton />;

  return (
    <div className="mt-4 bg-base-100 p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <p>Latest Orders</p>
        {pathname !== "/admin/orders" && (
          <Link to="/admin/orders" className="primary_btn text-sm">
            All Orders
          </Link>
        )}
      </div>

      <div className="mt-4 relative overflow-x-auto">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.length > 0 &&
              orders?.map((order: IOrder) => (
                <tr key={order?._id}>
                  <td>{moment(order?.createdAt).format("YYYY-MM-DD")}</td>
                  <td>
                    <p>Name: {order?.user?.name}</p>
                    <div className="text-sm text-neutral-content">
                      <p>Phone: {order?.user?.phone}</p>
                      <p>city: {order?.city}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                      {order?.products?.map((product) => (
                        <img
                          key={product?.product?._id}
                          className="h-8 w-8 rounded-full border-2 border-white"
                          src={`${import.meta.env.VITE_BACKEND_URL}/${
                            product?.product?.image
                          }`}
                          alt={product?.product?.title}
                        />
                      ))}
                    </div>
                  </td>
                  <td>{order?.total}</td>
                  <td>
                    {statusLoading ? (
                      "Loading..."
                    ) : (
                      <select
                        value={order?.status}
                        onChange={async (e) => {
                          const res = await updateOrderStatus({
                            id: order?._id,
                            status: e.target.value,
                          });
                          if (res?.data?.success) {
                            toast.success("Order Status Updated");
                          } else {
                            toast.error("Something went wrong");
                          }
                        }}
                        className={`border rounded p-1 text-xs cursor-pointer ${
                          order?.status == "pending" &&
                          "text-yellow-500 border-yellow-500"
                        } ${
                          order?.status == "shipped" &&
                          "text-blue-400 border-blue-400"
                        } ${
                          order?.status == "delivered" &&
                          "text-green-400 border-green-400"
                        } ${
                          order?.status == "cancelled" &&
                          "text-red-400 border-red-400"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    )}
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <Link
                        to={`/admin/order/${order?._id}`}
                        className=" hover:text-blue-700"
                      >
                        <GrView />
                      </Link>
                      <button
                        disabled={deleteLoading}
                        className="hover:text-red-700"
                        onClick={async (e) => {
                          e.preventDefault();
                          const isConfirm = window.confirm(
                            "Are You Sure Delete this Order"
                          );
                          if (isConfirm) {
                            const res = await deleteOrder(order?._id);
                            if (res?.data?.success) {
                              toast.success("Order Deleted");
                            } else {
                              toast.error("Something went wrong");
                            }
                          }
                        }}
                      >
                        {deleteLoading ? "..." : <AiOutlineDelete />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {data?.meta?.pages > 1 && (
        <Pagination
          pages={data?.meta?.pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
