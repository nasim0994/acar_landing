import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  useAddLogoMutation,
  useGetLogosQuery,
  useUpdateLogoMutation,
} from "@/redux/features/logo/logoApi";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TResponse } from "@/interface/globalInterface";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";

export default function Logo() {
  const [image, setImage] = useState<File | null>(null);
  const form = useForm();

  const { data } = useGetLogosQuery({});
  const logo = data?.data;
  const id = logo?._id;

  const [addLogo, { isLoading: aLoading }] = useAddLogoMutation();
  const [updateLogo, { isLoading: uLoading }] = useUpdateLogoMutation();

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    const formData = new FormData();
    formData.append("image", image as Blob);

    if (id) {
      const res = (await updateLogo({ id, formData })) as TResponse;
      if (res?.data?.success) {
        toast.success("Logo Update Success");
        setImage(null);
      } else {
        toast.error(res?.error?.data?.message || "something went wrong!");
        console.log(res);
      }
    } else {
      const res = (await addLogo(formData)) as TResponse;
      if (res?.data?.success) {
        toast.success("Logo Add Success");
        setImage(null);
      } else {
        toast.error(res?.error?.data?.message || "something went wrong!");
        console.log(res);
      }
    }
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Logo Setting</h3>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-2 p-4 form_group"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <label>Logo</label>
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

          {logo?.logo && !image && (
            <div className="w-40 relative">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${logo?.logo}`}
                alt="banner"
                className="w-full object-cover rounded mb-4"
              />
            </div>
          )}

          {image && (
            <div className="w-40 relative">
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
            {aLoading || uLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
