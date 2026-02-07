export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <h3 className="text-sm font-medium text-muted-foreground">Tổng doanh thu</h3>
        <p className="text-2xl font-bold">120.000.000đ</p>
      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <h3 className="text-sm font-medium text-muted-foreground">Phòng đang trống</h3>
        <p className="text-2xl font-bold">15</p>
      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <h3 className="text-sm font-medium text-muted-foreground">Đơn đặt mới</h3>
        <p className="text-2xl font-bold">+12</p>
      </div>
      
      <div className="md:col-span-3 p-6 bg-white rounded-xl border shadow-sm h-[400px]">
        <p className="text-muted-foreground italic">Nơi hiển thị biểu đồ hoặc danh sách đơn gần đây...</p>
      </div>
    </div>
  )
}