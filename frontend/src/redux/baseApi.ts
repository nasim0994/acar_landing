import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { userLoggedIn, userLogout } from "./features/user/authSlice";
const url = import.meta.env.VITE_BACKEND_URL + "/api";

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  const token = (api.getState() as RootState).auth.token;

  if (token) {
    const res = await fetch(url + "/auth/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data?.success) {
      api.dispatch(userLoggedIn({ token, user: data.data }));
    } else {
      api.dispatch(userLogout());
    }
  } else {
    api.dispatch(userLogout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [
    "product",
    "user",
    "order",
    "faq",
    "faqSection",
    "feature",
    "banner",
    "featureSection",
    "whyChoose",
  ],
});
