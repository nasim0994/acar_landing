import { baseApi } from "@/redux/baseApi";

export const whyChooseSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWhyChooseSection: builder.query({
      query: (query) => ({
        url: "/why-choose/section",
        method: "GET",
        params: query,
      }),
      providesTags: ["whyChoose"],
    }),
    updateWhyChooseSection: builder.mutation({
      query: ({ id, info }) => ({
        url: `/why-choose/section/update/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["whyChoose"],
    }),
    addWhyChooseSection: builder.mutation({
      query: (info) => ({
        url: `/why-choose/section/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["whyChoose"],
    }),
  }),
});

export const {
  useGetWhyChooseSectionQuery,
  useAddWhyChooseSectionMutation,
  useUpdateWhyChooseSectionMutation,
} = whyChooseSectionApi;
