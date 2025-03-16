import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  useDeleteAdminMutation,
  useGetAllAdminsQuery,
} from "@/redux/features/admin/adminApi";
import toast from "react-hot-toast";
import { TResponse } from "@/interface/globalInterface";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { useAppSelector } from "@/redux/hook/hooks";
import { IUser } from "@/interface/userInterface";

export default function AllAdministrator() {
  const { loggedUser } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useGetAllAdminsQuery({});
  const admins = data?.data;

  const [deleteAdmin] = useDeleteAdminMutation();

  const handleDelete = async (id: string) => {
    if (loggedUser?._id === id) {
      return toast.error("You can't delete yourself");
    }
    const isConfirm = window.confirm("are you sure delete this admin?");
    if (isConfirm) {
      const res = (await deleteAdmin(id)) as TResponse;

      if (res?.data?.success) {
        toast.success("Admin deleted successfully");
      } else {
        toast.error(res?.error?.data?.message || "Failed to delete admin");
        console.log(res);
      }
    }
  };

  if (isLoading) return <TableSkeleton />;

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">All Admin</h1>
          <Link to="/admin/administrator/add" className="primary_btn">
            Add Admin
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>username</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin: IUser, i: number) => (
              <tr key={admin?._id}>
                <td>{i + 1}</td>
                <td>{admin?.username}</td>
                <td>{admin?.name}</td>
                <td>{admin?.phone}</td>
                <td>{admin?.role}</td>
                <td>
                  <button onClick={() => handleDelete(admin?._id)}>
                    <AiOutlineDelete className="text-lg hover:text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
