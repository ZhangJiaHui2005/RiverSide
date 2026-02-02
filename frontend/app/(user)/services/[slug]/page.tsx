import { services } from "@/data/services";
import { iconMap } from "./icon-map";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params; 

  const service = services.find(
    s => s.slugVi === slug
  );

  if (!service) return null;

  const Icon = iconMap[service.icon];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-10">
      
      <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {Icon && <Icon className="w-9 h-9 text-sky-500" />}
        {service.title}
      </h1>


      <div className="h-1 w-20 bg-sky-500 rounded-full mb-6" />

      <p className="text-slate-600 leading-relaxed text-lg">
        {service.desc}
      </p>

    </div>
  </div>
  );
}
