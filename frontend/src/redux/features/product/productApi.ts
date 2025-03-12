import { baseApi } from "@/redux/baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/car/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: (query) => ({
        url: `/car/all`,
        method: "GET",
        params: query,
      }),
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/car/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    editProductById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/car/update/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/car/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useEditProductByIdMutation,
  useDeleteProductMutation,
} = carApi;
