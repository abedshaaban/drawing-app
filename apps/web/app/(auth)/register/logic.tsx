"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { auth } from "@/util";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function Logic() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(credentials: z.infer<typeof formSchema>) {
    const { status, data, error } = await auth().register(credentials);

    console.log(data);
  }

  return (
    <Card className="w-full max-w-[400px] p-9 flex flex-col gap-6">
      <CardTitle className="text-center font-semibold text-3xl">
        Register
      </CardTitle>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm text-right w-full text-gray-500">
              Already have an account?
              <Link href={"/login"} className="hover:text-blue-600">
                {" "}
                Login here.
              </Link>
            </p>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
}
