"use client";

import Image from "next/image";
import { pacifico } from "../(clerk)/layout";
import { useRouter } from "next/navigation";
import { Wifi, Utensils, Waves, Dumbbell, Car, MapPinned, WashingMachine, } from "lucide-react";

const rooms = [
  {
    title: "Deluxe Room",
    image: "/deluxe.jpeg",
    desc: "Phòng cao cấp với view sông thoáng đãng",
  },
  {
    title: "Family Room",
    image: "/family.jpeg",
    desc: "Không gian rộng rãi cho gia đình",
  },
  {
    title: "Suite Room",
    image: "/suite.jpeg",
    desc: "Hạng phòng sang trọng, tiện nghi đẳng cấp",
  },
];

const services = [
  {
    icon: Wifi,
    title: "Wifi miễn phí",
    desc: "Kết nối internet tốc độ cao toàn bộ khách sạn",
    slug: "wifi",
    slugVi: "wifi-mien-phi",
  },
  {
    icon:  Waves,
    title: "Hồ bơi ngoài trời",
    desc: "Không gian thư giãn với view sông mát mẻ",
    slug: "pool",
    slugVi: "ho-boi",
  },
  {
    icon: Utensils,
    title: "Phòng gym",
    desc: "Trang thiết bị hiện đại, mở cửa 24/7",
    slug: "gym",
    slugVi: "phong-gym",
  },
  {
    icon: Dumbbell,
    title: "Nhà hàng",
    desc: "Ẩm thực đa dạng với đầu bếp chuyên nghiệp",
    slug: "restaurant",
    slugVi: "nha-hang",
  },
  {
    icon: Car,
    title: "Bãi đỗ xe",
    desc: "Bãi xe rộng rãi, an ninh 24/7",
    slug: "parking",
    slugVi: "bai-do-xe-hoi",
  },

  {
    title: "Tour du lịch",
    desc: "Khám phá địa phương cùng hướng dẫn viên",
    icon: MapPinned,
    slug: "tour",
    slugVi: "tour-du-lich",
  },
  {
    title: "Giặt ủi",
    desc: "Nhanh chóng – tiện lợi",
    icon: WashingMachine,
    slug: "laundry",
    slugVi: "giat-ui",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main>
      {/* { Hero } */}
      <section className="relative h-[90vh]">
        <Image
          src="/hero.png"
          alt="RiverSide Hotel"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`text-5xl md:text-7xl mb-4 tracking-wide drop-shadow-[0_6px_20px_rgba(0,150,255,0.5)] ${pacifico.className}`}>
              <span className="text-white">River</span>
              <span className="text-sky-400">Side</span>
            </h1>

            <p className="text-lg md:text-xl mb-6">
              Trải nghiệm nghỉ dưỡng đẳng cấp bên dòng sông yên bình
            </p>
            <button className="bg-gradient-to-r from-sky-400 to-sky-600 px-8 py-3 rounded-full
                text-white font-semibold shadow-lg shadow-sky-500/30 cursor-pointer transition-all duration-300
                hover:from-sky-500 hover:to-sky-700 hover:shadow-sky-600/50 hover:scale-105">
              Đặt phòng ngay
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center
       bg-white border-t border-slate-200">
  
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-sky-600 font-semibold mb-3">
            RIVERSIDE HOTEL
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            Không gian nghỉ dưỡng bên sông <br />
            dành cho những khoảnh khắc đáng nhớ
          </h2>

          <p className="text-slate-600 text-lg mb-8 max-w-xl">
            RiverSide Hotel được thiết kế để mang lại sự yên tĩnh, tiện nghi
            và cảm giác thư giãn trọn vẹn cho mọi chuyến đi.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="text-green-500">🌿</span>
              Vị trí ven sông yên bình
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="text-rose-500">🛏</span>
              Không gian hiện đại, ấm cúng
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="text-sky-500">🤍</span>
              Dịch vụ tận tâm, chuyên nghiệp
            </li>
          </ul>

          <button
            onClick={() => router.push("/gioi-thieu")}
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:gap-3 transition-all"
          >
            Khám phá câu chuyện của chúng tôi
            <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="about.jpeg"
            alt="Riverside Hotel"
            className="rounded-2xl shadow-xl object-cover w-full h-[420]"
          />
        </div>
      </section>

      {/* ROOMS */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Phòng nổi bật
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.title}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
                  hover:shadow-xl transition duration-300"
              >
                <div className="relative h-[220]">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {room.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {room.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7x1 mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dịch vụ tiện ích
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mang đến trải nghiệm nghỉ dưỡng trọn vẹn với hệ thống tiện ích hiện đại và đẳng cấp 
              </p>
            </div>  

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 cursor-pointer">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                <div key={index} onClick={() => router.push(`/dich-vu/${service.slugVi}`)}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl border 
                border-slate-100 transition-all duration-300 hover:-translate-y-2">
                <Icon className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white border-t border-slate-200/60">
        <h2 className="text-3xl font-bold mb-4">
          Sẵn sàng cho kỳ nghỉ của bạn?
        </h2>
        <button className="bg-gradient-to-r from-sky-400 to-sky-600 px-8 py-3 rounded-full
                text-white font-semibold shadow-lg shadow-sky-500/30 cursor-pointer transition-all duration-300
                hover:from-sky-500 hover:to-sky-700 hover:shadow-sky-600/50 hover:scale-105">
              Đặt phòng ngay
            </button>
      </section>
    </main>
  );
}
