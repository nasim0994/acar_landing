import { baseApi } from "@/redux/baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaq: builder.query({
      query: () => ({
        url: "/faq/all",
      }),
      providesTags: ["faq"],
    }),

    createFaq: builder.mutation({
      query: (info) => ({
        url: `/faq/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["faq"],
    }),

    deleteFaqById: builder.mutation({
      query: (id) => ({
        url: `/faq/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faq"],
    }),

    updateFaq: builder.mutation({
      query: ({ id, info }) => ({
        url: `/faq/update/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["faq"],
    }),

    getFaqById: builder.query({
      query: (id) => ({
        url: `faq/${id}`,
        method: "GET",
      }),
      providesTags: ["faq"],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useCreateFaqMutation,
  useDeleteFaqByIdMutation,
  useUpdateFaqMutation,
  useGetFaqByIdQuery,
} = faqApi;
