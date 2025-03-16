import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TResponse } from "@/interface/globalInterface";
import {
  useAddBusinessMutation,
  useGetBusinessQuery,
  useUpdateBusinessMutation,
} from "@/redux/features/businessInfo/businessInfoApi";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function BusinessInfo() {
  const form = useForm();

  const { data } = useGetBusinessQuery({});
  const businessInfo = data?.data;
  const id = businessInfo?._id;

  useEffect(() => {
    if (businessInfo) {
      form.reset({
        companyName: businessInfo?.companyName,
        phone: businessInfo?.phone,
        email: businessInfo?.email,
        facebook: businessInfo?.facebook,
        whatsapp: businessInfo?.whatsapp,
        address: businessInfo?.address,
        insideDhaka: businessInfo?.shipping?.insideDhaka,
        outsideDhaka: businessInfo?.shipping?.outsideDhaka,
      });
    }
  }, [businessInfo, form]);

  const [addBusinessInfo, { isLoading: aLoading }] = useAddBusinessMutation();
  const [updateBusinessInfo, { isLoading: uLoading }] =
    useUpdateBusinessMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const info = {
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      facebook: data.facebook,
      whatsapp: data.whatsapp,
      address: data.address,
      shipping: {
        insideDhaka: Number(data.insideDhaka),
        outsideDhaka: Number(data.outsideDhaka),
      },
    };

    if (id) {
      const res = (await updateBusinessInfo({ id, info })) as TResponse;
      if (res?.data?.success) {
        toast.success("Business Info Update Success");
      } else {
        toast.error(res?.error?.data?.message || "something went wrong!");
        console.log(res);
      }
    } else {
      const res = (await addBusinessInfo(info)) as TResponse;
      if (res?.data?.success) {
        toast.success("Business Info Add Success");
      } else {
        toast.error(res?.error?.data?.message || "something went wrong!");
        console.log(res);
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Business Info</h3>
      </div>

      <Form {...form}>
        <form
          className="grid sm:grid-cols-2 gap-4 p-4 form_group"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <label>Company Name</label>
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

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <label>Phone</label>
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label>Email</label>
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

          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem>
                <label>Facebook</label>
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

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <label>Whatsapp</label>
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

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <label>Address</label>
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

          <FormField
            control={form.control}
            name="insideDhaka"
            render={({ field }) => (
              <FormItem>
                <label>Shipping Inside Dhaka</label>
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

          <FormField
            control={form.control}
            name="outsideDhaka"
            render={({ field }) => (
              <FormItem>
                <label>Shipping Outside Dhaka</label>
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

          <Button type="submit" className="w-max">
            {aLoading || uLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
