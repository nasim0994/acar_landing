import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { useLoginMutation } from "@/redux/features/user/authApi";
import { userLoggedIn } from "@/redux/features/user/authSlice";
import { TResponse } from "@/interface/globalInterface";

export default function Login() {
  window.scrollTo(0, 0);
  const { loggedUser } = useAppSelector((store) => store.auth);
  const [login, { isLoading, isError }] = useLoginMutation();
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (loggedUser && !isError) {
      navigate(from, { replace: true });
    }
  }, [loggedUser, isError, from, navigate]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const username = form.userName.value;
    const password = form.password.value;

    const loginInfo = {
      username,
      password,
    };

    const res = (await login(loginInfo)) as TResponse;

    if (res?.data?.success) {
      dispatch(
        userLoggedIn({
          user: res?.data?.data?.user,
          token: res?.data?.data?.token,
        })
      );
      toast.success("Login successful");
      setError("");
    }
    if (res?.error) {
      setError(res?.error?.data?.message);
      console.log(res);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full">
      <div>
        <form onSubmit={handleLogin} className="w-[90%] sm:w-[350px]">
          <div>
            <h2 className="text-2xl font-medium text-center">Admin Login</h2>
          </div>
          <br />
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              UserName
            </label>
            <input
              type="text"
              id="userName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="superAdmin"
              required
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <br />
          <button
            type="submit"
            disabled={isLoading}
            className="text-base-100 bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
