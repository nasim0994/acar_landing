import { baseApi } from "@/redux/baseApi";

export const whyChooseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWhyChoose: builder.query({
      query: (query) => ({
        url: "/why-choose/all",
        method: "GET",
        params: query,
      }),
      providesTags: ["whyChoose"],
    }),
    updateWhyChoose: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/why-choose/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["whyChoose"],
    }),
    addWhyChoose: builder.mutation({
      query: (formData) => ({
        url: `/why-choose/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["whyChoose"],
    }),
    deleteWhyChooseById: builder.mutation({
      query: (id) => ({
        url: `/why-choose/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whyChoose"],
    }),
    getWhyChooseById: builder.query({
      query: (id) => ({
        url: `/why-choose/${id}`,
        method: "GET",
      }),
      providesTags: ["whyChoose"],
    }),
  }),
});

export const {
  useGetAllWhyChooseQuery,
  useUpdateWhyChooseMutation,
  useAddWhyChooseMutation,
  useDeleteWhyChooseByIdMutation,
  useGetWhyChooseByIdQuery,
} = whyChooseApi;
