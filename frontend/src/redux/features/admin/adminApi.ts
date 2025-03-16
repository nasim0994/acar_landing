import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => ({
        url: "/admin/all",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getAdminById: builder.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),

    addAdmin: builder.mutation({
      query: (info) => ({
        url: `/auth/admin/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useDeleteAdminMutation,
  useGetAdminByIdQuery,
  useAddAdminMutation,
} = adminApi;
