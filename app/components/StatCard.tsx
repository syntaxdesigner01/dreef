import clsx from "clsx";
import Image from "next/image";

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  colorClass: string; // TailWind class for background
  iconColorClass?: string;
  subValue?: string;
}

const StatCard = ({ label, value, icon, colorClass, iconColorClass = "text-gray-700" }: StatCardProps) => {
  return (
    <div className={clsx("rounded-xl p-6 flex items-center gap-4 text-gray-800", colorClass)}>
      <div className="p-3 bg-[#DCECF9] rounded-full backdrop-blur-sm">
         <Image src={icon} alt="icon" width={20} height={20} className={clsx("w-6 h-6", iconColorClass)} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-semibold text-[#111111] tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
