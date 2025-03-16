import { baseApi } from "@/redux/baseApi";

export const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBusiness: builder.query({
      query: () => ({
        url: "/business",
      }),
      providesTags: ["business"],
    }),

    addBusiness: builder.mutation({
      query: (info) => ({
        url: `/business/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["business"],
    }),

    updateBusiness: builder.mutation({
      query: ({ id, info }) => ({
        url: `/business/update/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["business"],
    }),
  }),
});

export const {
  useGetBusinessQuery,
  useAddBusinessMutation,
  useUpdateBusinessMutation,
} = businessApi;
