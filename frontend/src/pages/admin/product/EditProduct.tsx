import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import {
  useEditProductByIdMutation,
  useGetProductByIdQuery,
} from "@/redux/features/product/productApi";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TResponse } from "@/interface/globalInterface";
import { IProduct } from "@/interface/productInterface";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const form = useForm();

  const { data } = useGetProductByIdQuery(id);
  const product: IProduct = data?.data;

  useEffect(() => {
    form.setValue("title", product?.title);
    form.setValue("price", product?.price);
    form.setValue("discountPrice", product?.discountPrice);
    form.setValue("description", product?.description);
  }, [product, form]);

  const [editProductById, { isLoading }] = useEditProductByIdMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const info = {
      title: data.title,
      price: Number(data.price),
      discountPrice: data.discountPrice && Number(data.discountPrice),
      description: data.description,
    };
    const formData = new FormData();
    formData.append("image", image as Blob);
    formData.append("data", JSON.stringify(info));

    const res = (await editProductById({ id, formData })) as TResponse;

    if (res?.data?.success) {
      toast.success("Product update Success");
      navigate("/admin/product/all");
    } else {
      toast.error(res?.error?.data?.message || "something went wrong!");
      console.log(res);
    }
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Edit Product</h3>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-2 p-4 form_group"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <label>Product Title</label>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    value={field.value || ""}
                    required
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <label>Regular Price</label>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      required
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discountPrice"
              render={({ field }) => (
                <FormItem>
                  <label>Discount Price</label>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <label>Product Description</label>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value || ""}
                    rows={10}
                    required
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <label>Product Image</label>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      if (
                        e.target.files &&
                        e.target.files[0].size > 1024 * 1024
                      ) {
                        toast.error("File size must be less than 1MB");
                        return;
                      }

                      setImage(e.target.files?.[0] as File);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          {product?.image && !image && (
            <div className="w-80 relative">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${product?.image}`}
                alt={product?.title}
                className="w-full object-cover rounded mb-4"
              />
            </div>
          )}

          {image && (
            <div className="w-80 relative">
              <img
                src={URL.createObjectURL(image)}
                alt="banner"
                className="w-full object-cover rounded mb-4"
              />

              <div
                onClick={() => setImage(null)}
                className="absolute top-0 right-0"
              >
                <AiOutlineDelete className="cursor-pointer text-red-500 text-xl opacity-50 hover:opacity-100 duration-300" />
              </div>
            </div>
          )}

          <Button type="submit" className="w-max">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
