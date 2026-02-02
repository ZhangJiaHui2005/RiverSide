"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-500">
      {/* TOP LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        
        {/* HỖ TRỢ */}
        <div>
          <h4 className="font-semibold mb-4">Hỗ trợ</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Quản lý đặt phòng</li>
            <li>Liên hệ chăm sóc khách hàng</li>
            <li>Chính sách hoàn hủy</li>
            <li>Trung tâm trợ giúp</li>
          </ul>
        </div>

        {/* KHÁM PHÁ */}
        <div>
          <h4 className="font-semibold mb-4">Khám phá</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Ưu đãi đặc biệt</li>
            <li>Phòng & Suites</li>
            <li>Dịch vụ nghỉ dưỡng</li>
            <li>Blog du lịch</li>
          </ul>
        </div>

        {/* CHÍNH SÁCH */}
        <div>
          <h4 className="font-semibold mb-4">Điều khoản</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
            <li>Quy định thanh toán</li>
            <li>Quyền riêng tư</li>
          </ul>
        </div>

        {/* ĐỐI TÁC */}
        <div>
          <h4 className="font-semibold mb-4">Đối tác</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Hợp tác kinh doanh</li>
            <li>Đối tác du lịch</li>
            <li>Đăng ký đối tác</li>
          </ul>
        </div>

        {/* VỀ CHÚNG TÔI */}
        <div>
          <h4 className="font-semibold mb-4">RiverSide Hotel</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
            <li>Truyền thông</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-100 py-8 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} RiverSide Hotel. All rights reserved.
        </p>
        <p className="mt-2">
          Thiết kế & phát triển cho mục đích học tập và demo.
        </p>
      </div>
    </footer>
  );
}
