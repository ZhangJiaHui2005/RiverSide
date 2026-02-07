import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ManageRooms() {
  // Trong thực tế, bạn sẽ fetch dữ liệu từ API ở đây
  // Tạm thời để mảng rỗng để build giao diện
  const rooms: any = []; 

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Danh sách phòng</h1>
          <p className="text-sm text-muted-foreground">Quản lý và cập nhật thông tin phòng của bạn.</p>
        </div>
        <Button asChild>
          <Link href="/admin/rooms/new">
            <Plus className="mr-2 h-4 w-4" /> Thêm phòng mới
          </Link>
        </Button>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tên phòng</TableHead>
              <TableHead>Loại</TableHead>
              <TableHead>Giá/Đêm</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                  Chưa có phòng nào. Hãy thêm phòng mới!
                </TableCell>
              </TableRow>
            ) : (
              rooms.map((room: any) => (
                <TableRow key={room._id}>
                  {/* Map dữ liệu ở đây */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}