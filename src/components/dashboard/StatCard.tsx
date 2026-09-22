type StatCardProps = {
  title: string;
  value: string;
  change: string;
};

export default function StatCard({
  title,
  value,
  change,
}: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>

      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>

        <span className="text-sm font-medium text-green-600">
          {change}
        </span>
      </div>
    </div>
  );
}