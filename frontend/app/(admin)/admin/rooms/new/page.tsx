"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// 1. Định nghĩa Schema xác thực dữ liệu
const formSchema = z.object({
  title: z.string().min(5, "Tên phòng ít nhất 5 ký tự"),
  description: z.string().min(10, "Mô tả ít nhất 10 ký tự"),
  price: z.coerce.number().min(1000, "Giá phải lớn hơn 1000đ"),
  type: z.string().default("Standard"),
  images: z.string().url("Vui lòng nhập URL ảnh hợp lệ").or(z.string().length(0)),
})

export default function NewRoomPage() {
  const router = useRouter()

  // 2. Khởi tạo Form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      type: "Standard",
      images: "",
    },
  } as const)

  // 3. Hàm xử lý gửi dữ liệu (Submit)
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...values,
            images: [values.images] // API mong muốn một mảng chuỗi
        }),
      })

      if (!response.ok) throw new Error("Lỗi khi tạo phòng")

      toast.success("Thêm phòng thành công!")
      router.push("/admin/rooms")
      router.refresh()
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại.")
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Thêm phòng mới</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên phòng</FormLabel>
                <FormControl><Input placeholder="Ví dụ: Deluxe River View" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả chi tiết</FormLabel>
                <FormControl><Textarea placeholder="Mô tả các tiện ích của phòng..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giá mỗi đêm (VNĐ)</FormLabel>
                  <FormControl><Input type="number" {...field} value={field.value as number || 0} onChange={(e) => field.onChange(e.target.valueAsNumber)} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại phòng</FormLabel>
                  <FormControl><Input placeholder="Standard, VIP..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link ảnh (URL)</FormLabel>
                <FormControl><Input placeholder="https://..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 pt-4">
            <Button type="submit">Lưu phòng</Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>Hủy</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}