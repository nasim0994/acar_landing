import { baseApi } from "@/redux/baseApi";

export const featureApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeature: builder.query({
      query: () => ({
        url: "/feature",
      }),
      providesTags: ["feature"],
    }),

    addFeature: builder.mutation({
      query: (formData) => ({
        url: `/feature/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["feature"],
    }),

    updateFeature: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/feature/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["feature"],
    }),
  }),
});

export const {
  useGetFeatureQuery,
  useAddFeatureMutation,
  useUpdateFeatureMutation,
} = featureApi;
