import { Checkbox } from "@/components/ui/checkbox";
import { IProduct } from "@/interface/productInterface";
import { addToCart, changeQuantity } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { useEffect, useState } from "react";

export default function Product({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.cart);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const isExistingItem = carts?.find((item) => item?._id == product?._id);
    setIsInCart(!!isExistingItem);
    setSelectedQuantity(isExistingItem?.quantity || 1);
  }, [carts, product]);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ product, selectedQuantity }));
  };

  const handelIncreaseQuantity = (_id: string) => {
    dispatch(changeQuantity({ _id, quantity: selectedQuantity + 1 }));
  };

  const handelDecreaseQuantity = (_id: string) => {
    if (selectedQuantity > 1) {
      dispatch(changeQuantity({ _id, quantity: selectedQuantity - 1 }));
    }
  };

  return (
    <div
      className={`border rounded p-3 cursor-pointer ${
        isInCart && "border-primary bg-primary/5"
      }`}
    >
      <div className="flex items-start space-x-3">
        <Checkbox
          id="product"
          onCheckedChange={() => handleAddToCart(product)}
          checked={isInCart}
          disabled={isInCart}
        />

        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${product?.image}`}
          alt={product?.title}
          className="w-14 rounded"
        />

        <div className="-mt-1">
          <label
            htmlFor="product"
            className="cursor-pointer text-neutral font-bold peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-[3px]"
          >
            {product?.title}
          </label>

          <div className="flex items-center mt-1 gap-4">
            <div className="flex items-center gap-5 text-neutral border rounded py-[2px] px-2 w-max">
              <button
                onClick={() => handelDecreaseQuantity(product?._id)}
                className="border-neutral rounded"
              >
                -
              </button>
              <span className="text-xs">{selectedQuantity}</span>
              <button
                onClick={() => handelIncreaseQuantity(product?._id)}
                className="border-neutral rounded"
              >
                +
              </button>
            </div>

            <div>
              {product?.discountPrice && product.discountPrice > 0 ? (
                <span>
                  <del className="text-sm text-red-500">৳ {product?.price}</del>{" "}
                  <span className="text-sm">৳ {product?.discountPrice}</span>
                </span>
              ) : (
                <span className="text-sm">৳ {product?.price}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
