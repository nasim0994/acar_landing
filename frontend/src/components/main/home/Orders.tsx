import { MdArrowDropUp, MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import {
  clearCartAfterOrder,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useGetBusinessQuery } from "@/redux/features/businessInfo/businessInfoApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";

export default function Orders() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState(0);
  const { carts } = useAppSelector((state) => state.cart);

  const { data } = useGetBusinessQuery({});
  const shippingCharge = data?.data?.shipping;

  useEffect(() => {
    setShipping(shippingCharge?.insideDhaka);
  }, [shippingCharge]);

  const subTotal = carts.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  const total = subTotal + shipping;

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("number") as HTMLInputElement).value;
    const city = (form.elements.namedItem("city") as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLInputElement)
      .value;

    if (carts?.length === 0) {
      return toast.error("Please add some products to cart first.");
    }

    const orderInfo = {
      user: {
        name,
        phone,
      },
      city,
      address,
      products: carts?.map((product) => {
        return {
          product: product?._id,
          quantity: product?.quantity,
        };
      }),
      shipping,
      total,
    };

    console.log(orderInfo);

    const res = await createOrder(orderInfo);

    if (res?.data?.success) {
      form.reset();
      toast.success("Order placed successfully!");
      dispatch(clearCartAfterOrder());
      navigate(`/order/success/${res?.data?.data?._id}`);
    } else {
      toast.error("Something went wrong! Please try again.");
    }
    console.log(res);
  };

  return (
    <section className="py-10" id="order">
      <div className="container">
        <div className="mt-6 border border-primary rounded p-5 sm:p-10 bg-secondary/5">
          <h2 className="text-xl sm:text-2xl text-primary font-semibold text-center sm:w-3/4 mx-auto mb-6">
            অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
          </h2>

          <form
            onSubmit={handlePlaceOrder}
            className="mt-6 grid md:grid-cols-2 gap-6 lg:gap-10 form_group"
          >
            <div>
              <h2 className="text-neutral font-medium">Billing Details</h2>
              <br />
              <div className="flex flex-col gap-3">
                <div>
                  <small className="text-neutral-content">
                    আপনার নাম লিখুন *
                  </small>
                  <input type="text" name="name" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার মোবাইল নাম্বারটি লিখুন *
                  </small>
                  <input type="text" name="number" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার শহরের নাম লিখুন *
                  </small>
                  <input type="text" name="city" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার সম্পূর্ণ ঠিকানা লিখুন *
                  </small>
                  <textarea name="address" rows={4} required></textarea>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-medium text-neutral">Your Order</h2>
              <div>
                {carts.map((product) => (
                  <div
                    key={product?._id}
                    className="flex justify-between items-center border-b py-2 border-dashed border-gray-400"
                  >
                    <div className="w-full flex items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <div>
                          <MdDelete
                            onClick={() =>
                              dispatch(removeFromCart(product?._id))
                            }
                            className="text-red-500 cursor-pointer text-xl"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <img
                            src={
                              import.meta.env.VITE_BACKEND_URL + product?.image
                            }
                            alt={product?.title}
                            className="w-11 h-11 rounded"
                          />

                          <div>
                            <p className="text-neutral text-[15px]">
                              {product?.title} * {product?.quantity}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p>{product?.price * product?.quantity} TK</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center border-b py-2.5 border-dashed border-gray-400">
                  <p className="text-neutral-content">Subtotal</p>
                  <p className="text-primary flex items-center gap-px">
                    {subTotal} TK
                  </p>
                </div>
                <div className="flex justify-between items-center border-b py-2.5 border-dashed border-gray-400 ">
                  <p className="text-neutral-content">Shipping</p>
                  <div className="text-neutral">
                    <div className="flex items-center">
                      <div>
                        <input
                          id="insideDhaka"
                          type="radio"
                          value={shippingCharge?.insideDhaka}
                          name="shipping"
                          className="w-4 h-4"
                          onClick={() =>
                            setShipping(shippingCharge?.insideDhaka)
                          }
                          checked={shipping === shippingCharge?.insideDhaka}
                        />
                      </div>

                      <label
                        htmlFor="insideDhaka"
                        className="ms-2 text-sm font-medium whitespace-nowrap"
                      >
                        ঢাকার ভিতরে: {shippingCharge?.insideDhaka} টাকা
                      </label>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <input
                          id="outsideDhaka"
                          type="radio"
                          value={shippingCharge?.outsideDhaka}
                          name="shipping"
                          className="w-4 h-4"
                          onClick={() =>
                            setShipping(shippingCharge?.outsideDhaka)
                          }
                          checked={shipping === shippingCharge?.outsideDhaka}
                        />
                      </div>

                      <label
                        htmlFor="outsideDhaka"
                        className="ms-2 text-sm font-medium whitespace-nowrap"
                      >
                        ঢাকার বাহিরে: {shippingCharge?.outsideDhaka} টাকা
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 font-medium text-lg">
                  <p className="text-neutral-content">Total</p>
                  <p className="text-primary">{total} TK</p>
                </div>

                <div className="mt-4 bg-gray-100 p-4 rounded text-neutral-content">
                  <h2>ক্যাশ অন ডেলিভারি</h2>
                  <div className="relative bg-gray-200 p-3 rounded mt-3">
                    <p className="text-sm">
                      পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।
                    </p>

                    <div className="absolute -top-8 left-6">
                      <MdArrowDropUp className="text-gray-200 text-6xl" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    disabled={isLoading}
                    className="text-center w-full bg-primary text-base-100 rounded py-2.5 font-semibold"
                  >
                    {isLoading ? "Loading..." : `Confirm order - ${total} TK`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
