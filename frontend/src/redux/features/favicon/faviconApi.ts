import { baseApi } from "@/redux/baseApi";

export const faviconApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFavicon: builder.query({
      query: () => ({
        url: "/favicon",
      }),
      providesTags: ["favicon"],
    }),

    addFavicon: builder.mutation({
      query: (formData) => ({
        url: `/favicon/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["favicon"],
    }),

    updateFavicon: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/favicon/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["favicon"],
    }),
  }),
});

export const {
  useGetFaviconQuery,
  useAddFaviconMutation,
  useUpdateFaviconMutation,
} = faviconApi;
