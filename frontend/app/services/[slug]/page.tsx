import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params; // ⭐ BẮT BUỘC

  const service = services.find(
    s => s.slugVi === slug
  );

  if (!service) {
    return <div>Không tìm thấy dịch vụ</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-4">{service.desc}</p>
    </div>
  );
}
