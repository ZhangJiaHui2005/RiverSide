"use client";


import { useParams, useRouter } from "next/navigation";
import { MapPin, Car,
  CigaretteOff,
  ParkingSquare,
  Headphones,
  WashingMachine,
  ArrowUpDown,
  User,
  Users,
  UsersRound,
  Wifi,
  Tv,
  Snowflake,
  Bath,
  Droplets,
  Home,
  Maximize,
  VolumeX, 
  DoorOpen,
  Square, 
} from "lucide-react";
import Link from "next/link";

const rooms = [
    { id: 1,
      type: "Economy",
      slug: "single-room",
      name: "Single Room",
      vi: "Phòng Đơn",
      icons: User,
      price: "450.000đ / đêm",
      capacity: "1 người",
      badge: "Rẻ nhất",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      amenities: [
        { icon: Maximize, label: "20 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Square , label: "Cửa sổ" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Droplets , label: "Phòng tắm" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 2,
      type: "Economy",
      slug: "standard-room",
      name: "Standard Room",
      vi: "Phòng Đơn",
      icons: Users,
      price: "550.000đ / đêm",
      capacity: "1–2 người",
      badge: "Tiết kiệm",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      amenities: [
        { icon: Maximize, label: "20 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Droplets , label: "Phòng tắm" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
        { icon: DoorOpen, label: "Ban công" },
      ],
    },
    {
      id: 3,
      type: "Business",
      slug: "superior-room",
      name: "Superior Room",
      vi: "Phòng Đôi",
      icons: Users,
      price: "850.000đ / đêm",
      capacity: "2–3 người",
      badge: "Phổ biến",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      amenities: [
        { icon: Maximize, label: "40 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Droplets , label: "Phòng tắm" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
        { icon: DoorOpen, label: "Ban công" },
      ],
    },
    {
      id: 4,
      type: "Business",
      slug: "twin-room",
      name: "Twin Room",
      vi: "Phòng Đôi",
      icons: UsersRound,
      price: "900.000đ / đêm",
      capacity: "2 người",
      badge: "2 giường",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      amenities: [
        { icon: Maximize, label: "40 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Droplets , label: "Phòng tắm" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
        { icon: Home, label: "Phòng khách" },
      ],
    },
    {
      id: 5,
      type: "Luxury",
      slug: "deluxe-room",
      name: "Deluxe Room",
      vi: "Phòng Đơn",
      icons: Users,
      price: "1.100.000đ / đêm",
      capacity: "2 người",
      badge: "Thoải mái",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      amenities: [
        { icon: Maximize, label: "40 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: Home, label: "Phòng khách" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 6,
      type: "Luxury",
      slug: "deluxe-river-view",
      name: "Deluxe River View",
      icons: Users,
      price: "1.250.000đ / đêm",
      capacity: "2 người",
      badge: "View sông",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      amenities: [
        { icon: Maximize, label: "60 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: Home, label: "Phòng khách" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 7,
      type: "Family",
      slug: "family-room",
      name: "Family Room",
      icons: UsersRound,
      price: "1.400.000đ / đêm",
      capacity: "3–4 người",
      badge: "Gia đình",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      amenities: [
        { icon: Maximize, label: "60 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 8,
      type: "Family",
      slug: "family-suite",
      name: "Family Suite",
      icon: UsersRound,
      price: "1.650.000đ / đêm",
      capacity: "4 người",
      badge: "Rộng rãi",
      image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
      amenities: [
        { icon: Maximize, label: "60 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 9,
      type: "Premium",
      slug: "executive-room",
      name: "Executive Room",
      icon: UsersRound,
      price: "1.900.000đ / đêm",
      capacity: "2–3 người",
      badge: "Doanh nhân",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
      amenities: [
        { icon: Maximize, label: "60 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 10,
      type: "Premium",
      slug: "executive-suite",
      name: "Executive Suite",
      icon: UsersRound,
      price: "2.400.000đ / đêm",
      capacity: "2–4 người",
      badge: "Cao cấp",
      image: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71",amenities: [
        { icon: Maximize, label: "60 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 11,
      type: "VIP",
      slug: "royal-suite",
      name: "Royal Suite",
      icon: UsersRound,
      price: "3.200.000đ / đêm",
      capacity: "4–5 người",
      badge: "VIP",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      amenities: [
        { icon: Maximize, label: "80 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
    {
      id: 12,
      type: "Presidential",
      slug: "presidential-suite",
      name: "Presidential Suite",
      icons: UsersRound,
      price: "4.800.000đ / đêm",
      capacity: "4–6 người",
      badge: "Siêu VIP",
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
      amenities: [
        { icon: Maximize, label: "80 m²"},
        { icon: Wifi, label: "Wifi miễn phí" },
        { icon: Snowflake, label: "Điều hoà không khí" },
        { icon: Tv, label: "TV màn hỉnh phẳng" },
        { icon: Bath, label: "Bồn tắm" },
        { icon: DoorOpen, label: "Ban công" },
        { icon: VolumeX, label: "Hệ thống cách âm" },
      ],
    },
  ];

export default function RoomDetail() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug as string;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return (
      <div className="p-10">
        <h1>❌ Không tìm thấy phòng</h1>
        <button onClick={() => router.push("/phong-nghi")}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to from-slate-50 to-slate-100 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <button 
            className="text-3xl text-slate-700 hover:text-slate-800 transition cursor-pointer" 
            onClick={() => router.push("/phong-nghi")}>
            Phòng Nghỉ 
            <span className="ml-4">→</span>
          </button> 

          <span className="text-3xl font-bold text-slate-800 ml-4">
            {room.name} - {room.vi}
          </span>

          <p className="mt-4 text-slate-800 max-w-xl">
            Từ phòng tiết kiệm đến không gian nghỉ dưỡng đẳng cấp
          </p>
          <span>____________________________________________________________</span>
          <h2 className="text-2xl font-semibold mb-2 mt-4">
              RiverSide Hotel
            </h2>
            <Link href="https://maps.app.goo.gl/phZ2JPUBvb86eAQE7">
              <div className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline mb-4">
                <MapPin size={16}/>
                <span>189/18/2 Hoàng Hoa Thám phường 6, Quận Bình Thạnh, Thành phố Hồ Chí Minh</span>
              </div>
            </Link>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="rounded-3x1 overflow-hidden group rounded-3xl  bg-white/70 backdrop-blur-xl shadow-lg">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-[420] object-cover hover:scale-105 transition duration-700"
              /> 

            <div className="max-w-xl">
                  <p className="text-1xl font-bold text-slate-800 ml-2 mt-6">Các tiện nghi được ưu chuộng nhất</p>
                <div className="grid grid-rows-4 grid-flow-col gap-2">
                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl"> 
                    <Car size={20} className="text-blue-800"/>
                    <span>Xe đưa đón sân bay</span>
                  </div>
                  
                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <CigaretteOff size={20} className="text-blue-800"/>
                    <span>Phòng không hút thuốc</span>
                  </div>
                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <ParkingSquare size={20} className="text-blue-800"/>
                    <span>Chỗ đỗ xe miễn phí</span>
                  </div>
                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <Wifi size={20} className="text-blue-800"/>
                    Wifi miễn phí
                  </div>

                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <Users size={20} className="text-blue-800"/>
                    Phòng gia đình
                  </div>

                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <Headphones size={20} className="text-blue-800"/>
                    Lễ tân 24/24
                  </div>

                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <Snowflake size={20} className="text-blue-800"/>
                    Điều hòa nhiệt độ
                  </div>

                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl">
                    <WashingMachine size={20} className="text-blue-800"/>
                    <span>Giặt ủi</span>
                  </div>

                  <div className="flex gap-2 p-4 text-slate-600 rounded-xl ">
                    <ArrowUpDown size={20} className="text-blue-800"/>
                    <span>Thang máy</span>
                  </div>
                </div>

              <div>
                <p className="text-slate-600 mb-6 leading-relaxed p-4">
                ✨ RiverSide Hotel – Tiện nghi & Vị trí lý tưởng tại TP. Hồ Chí Minh

                Bạn có thể đủ điều kiện nhận ưu đãi Genius tại RiverSide Hotel. Để kiểm tra ưu đãi có áp dụng cho ngày bạn chọn hay không, vui lòng<br />
                <br />Mức giảm Genius phụ thuộc vào thời điểm đặt phòng, ngày lưu trú và các chương trình khuyến mãi hiện hành. <br />

                <br />Tọa lạc tại vị trí thuận tiện ở Quận Bình Thạnh, RiverSide Hotel là lựa chọn lý tưởng cho du khách khi đến TP. Hồ Chí Minh. 
                Khách sạn cách Chợ Tân Định 4,3 km, Bảo tàng Lịch sử Việt Nam 9,1 km, Bảo tàng Chứng tích Chiến tranh 10 km, Dinh Thống Nhất, Diamond Plaza, 
                Bưu điện Trung tâm và Nhà thờ Đức Bà chỉ khoảng 10 km. <br />

                <br />RiverSide Hotel cung cấp Wi-Fi miễn phí toàn khuôn viên và dịch vụ đưa đón sân bay (có tính phí), mang đến sự thuận tiện tối đa cho khách lưu trú.
                Mỗi phòng nghỉ đều được thiết kế hiện đại với tủ quần áo, TV màn hình phẳng, máy điều hòa và phòng tắm riêng trang bị vòi xịt/chậu rửa vệ sinh cùng đồ dùng cá nhân miễn phí. 
                Một số phòng có ban công, tạo không gian thoáng đãng và thư giãn. Ga trải giường và khăn tắm luôn được chuẩn bị sẵn sàng cho khách. <br />

                <br />Đội ngũ lễ tân phục vụ 24/24, thông thạo tiếng Việt và tiếng Anh, luôn sẵn sàng hỗ trợ và tư vấn để chuyến đi của bạn trở nên trọn vẹn hơn.
                RiverSide Hotel nằm cách Trung tâm thương mại Vincom khoảng 10 km, thuận tiện cho việc mua sắm, tham quan và khám phá thành phố.
                </p>
              </div>

              <button
                onClick={() => router.push("/phong-nghi")}
                className="text-blue-600 font-medium hover:underline mt-4 mb-6 p-4 cursor-pointer">
                ← Quay lại danh sách phòng
              </button>
            </div>

            </div>
            
          <div className="sticky top-24 space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">
          {room.name} - {room.vi} 
        </h1>

        <span className="text-3xl ">
          Loại Phòng: {room.type}
        </span>

   
        <div className="grid grid-cols-2 gap-2 mt-4">
        {room.amenities.map((item, index) => {
          const Icon = item.icon;
          

          return (
            <div
              key={index}
              className="flex items-center gap-2 text-slate-600 text-sm"
            >
              <Icon size={16} className="text-blue-800" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      <div>
        {(() => {
          const Icon = room.icons;
          return (
            <div className="flex items-center gap-2 text-slate-700">
              <Icon size={20} className="text-blue-800" />
              <span>Số lượng khách: {room.capacity}</span>
            </div>
          );
        })()}
      </div>


        {/* Giá */}
        <div className="bg-slate-50 p-6 rounded-2xl">
          <p className="text-sm text-slate-500">Giá mỗi đêm</p>
          <p className="text-3xl font-bold text-slate-900">
            {room.price}
          </p>
        </div>

        {/* Nút đặt phòng */}
        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg hover:bg-slate-800 transition">
          Đặt phòng ngay
        </button>
      </div>
    </div>
  </div>
</div>
  );
}
