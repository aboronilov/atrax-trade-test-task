"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { toast } from "sonner"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/validators/phone";
import { Button } from "@/components/ui/button";
import { getPhoneInfo } from "@/lib/fetcher/GetPhoneInfo";

type Input = z.infer<typeof registerSchema>


export default function Home() {
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: "",
    }
  })

  const onSubmit = async (data: Input) => {
    const { operator_name, region, status_code } = await getPhoneInfo(data)

    if (status_code === 200) {
      toast.success(`Meta info on the number ${data.phone} recieved successfully`, {
        description: `
          Operator: ${operator_name}
          Region: ${region}
      `
      })
    } else {
      toast.error("Wrong phone has been provided")
    }
  }
  return (
    <main className="h-screen flex items-center justify-center">
      <Card className="w-[350px] flex flex-col">
        <CardHeader>
          <CardTitle>Phone number</CardTitle>
          <CardDescription>Get the meta info by the phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone in 7xxxxxxxxxx format" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
