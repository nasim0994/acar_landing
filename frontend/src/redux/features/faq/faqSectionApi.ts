import { baseApi } from "@/redux/baseApi";

export const faqSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaqSection: builder.query({
      query: (query) => ({
        url: "/faq-section",
        method: "GET",
        params: query,
      }),
      providesTags: ["faqSection"],
    }),
    updateFaqSection: builder.mutation({
      query: ({ id, info }) => ({
        url: `/faq-section/update/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["faqSection"],
    }),
    addFaqSection: builder.mutation({
      query: (info) => ({
        url: `/faq-section/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["faqSection"],
    }),
  }),
});

export const {
  useGetFaqSectionQuery,
  useAddFaqSectionMutation,
  useUpdateFaqSectionMutation,
} = faqSectionApi;
