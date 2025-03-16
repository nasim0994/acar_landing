import { baseApi } from "@/redux/baseApi";

export const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => ({
        url: "/logo",
      }),
      providesTags: ["logo"],
    }),
    updateLogo: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/logo/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
    addLogo: builder.mutation({
      query: (formData) => ({
        url: `/logo/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const { useGetLogosQuery, useUpdateLogoMutation, useAddLogoMutation } =
  logoApi;
