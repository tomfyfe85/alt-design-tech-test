interface ServiceCardProps {
  title: string;
}

export default function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div
      className={`bg-white text-gray-800 hover:bg-pink-500 hover:text-white rounded-lg p-6 shadow-lg transition-all duration-300 group`}
    >
      {/* Title */}
      <h3 className="font-semibold text-lg text-center mb-3">{title}</h3>

      {/* Description */}
    </div>
  );
}
