import { MdArrowDropUp, MdDelete } from "react-icons/md";
import Products from "./Products";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { useState } from "react";

export default function Orders() {
  const dispatch = useAppDispatch();
  const [shipping, setShipping] = useState(80);
  const { carts } = useAppSelector((state) => state.cart);
  const subTotal = carts.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  const total = subTotal + shipping;

  return (
    <section className="py-10">
      <div className="container">
        <div className="mt-6 border border-primary rounded p-5 sm:p-10 bg-secondary/5">
          <h2 className="text-xl sm:text-2xl text-primary font-semibold text-center sm:w-3/4 mx-auto mb-6">
            অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
          </h2>

          <form className="mt-6 grid md:grid-cols-2 gap-6 lg:gap-16">
            <div>
              <h2 className="text-lg font-medium">Billing Details</h2>
              <br />
              <div className="flex flex-col gap-3">
                <div>
                  <small className="text-neutral-content">
                    Enter your name *
                  </small>
                  <input type="text" name="name" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    Enter your mobile number *
                  </small>
                  <input type="text" name="number" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    Enter your city *
                  </small>
                  <input type="text" name="city" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    Enter your full address *
                  </small>
                  <textarea name="address" rows={4} required></textarea>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium">Your Order</h2>
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
                              import.meta.env.VITE_BACKEND_URL +
                              "/product/" +
                              product?.image
                            }
                            alt="product"
                            className="w-11 h-11 rounded"
                          />

                          <div>
                            <p className="text-neutral text-[15px]">
                              {product?.name} * {product?.quantity}
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
                      <input
                        id="insideDhaka"
                        type="radio"
                        // value={shippingCharge?.insideDhaka}
                        name="shipping"
                        className="w-4 h-4"
                        // onClick={() =>
                        //   setShipping(shippingCharge?.insideDhaka)
                        // }
                        // checked={shipping === shippingCharge?.insideDhaka}
                      />
                      <label
                        htmlFor="insideDhaka"
                        className="ms-2 text-sm font-medium"
                      >
                        Inside Dhaka: 80 TK
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="outsideDhaka"
                        type="radio"
                        // value={shippingCharge?.outsideDhaka}
                        name="shipping"
                        className="w-4 h-4"
                        // onClick={() =>
                        //   setShipping(shippingCharge?.outsideDhaka)
                        // }
                        // checked={shipping === shippingCharge?.outsideDhaka}
                      />
                      <label
                        htmlFor="outsideDhaka"
                        className="ms-2 text-sm font-medium"
                      >
                        Outside Dhaka: 130 TK
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 font-medium text-lg">
                  <p className="text-neutral-content">Total</p>
                  <p className="text-primary">{total} TK</p>
                </div>

                <div className="mt-4 bg-gray-100 p-4 rounded text-neutral-content">
                  <h2>Cash on delivery</h2>
                  <div className="relative bg-gray-200 p-3 rounded mt-3">
                    <p className="text-sm">
                      You can pay the delivery man after receiving the product.
                    </p>

                    <div className="absolute -top-8 left-6">
                      <MdArrowDropUp className="text-gray-200 text-6xl" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="text-center w-full bg-primary text-base-100 rounded py-2.5 font-semibold">
                    {/* {isLoading
                          ? "Loading..."
                          : `Confirm order - ${calculateTotal() + shipping} TK`} */}{" "}
                    Confirm order - {total} TK
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
