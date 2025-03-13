import { baseApi } from "@/redux/baseApi";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: "/banner",
      }),
      providesTags: ["banner"],
    }),

    addBanner: builder.mutation({
      query: (formData) => ({
        url: `/banner/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["banner"],
    }),

    updateBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/banner/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useGetBannerQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
} = bannerApi;
