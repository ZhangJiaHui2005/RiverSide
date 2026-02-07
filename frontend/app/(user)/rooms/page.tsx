"use client";

import { useRouter } from "next/navigation";
import { 
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

const rooms = [
    { id: 1,
      type: "Economy",
      slug: "single-room",
      name: "Single Room",
      vi: "Phòng Đơn",
      icon: User,
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
      icon: Users,
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
      icon: Users,
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
      icon: UsersRound,
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
      icon: Users,
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
      icon: Users,
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
      icon: UsersRound,
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
      icon: UsersRound,
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

export default function Rooms() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-slate-800">
            Phòng Nghỉ
          </h1>
          <p className="mt-2 text-slate-600">
            Từ phòng tiết kiệm đến không gian nghỉ dưỡng đẳng cấp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const Icon = room.icon;

            return (
              <div
                key={room.slug}
                
                className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition">

                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs rounded-full shadow">
                    {room.badge}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase text-slate-400 mb-1">
                    {room.type}
                  </p>

                  <h2 className="text-xl font-medium text-slate-900 mb-2">
                    {room.name}
                  </h2>

                  <p className="flex items-center gap-2 text-slate-600">
                    <Icon size={18} className="text-blue-700" />
                    {room.capacity}
                  </p>
                  <p>______________________________________________________</p>
                  <div className="grid grid-rows-4 grid-flow-col">
                    {room.amenities?.slice(0, 8).map((item, i) => {
                      const AmenityIcon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 ">
                          <AmenityIcon size={14} />
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mb-4">______________________________________________________</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      {room.price}
                    </span>
                    <button 
                      onClick={() => router.push(`/phong-nghi/${room.slug}`)}
                      className="px-3 py-2 rounded-full cursor-pointer bg-slate-900 text-white text-sm hover:bg-slate-700">
                      Xem phòng
                    </button>
                    <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-700">
                      Đặt ngay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}