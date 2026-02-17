import clsx from "clsx";
import { IconType } from "react-icons";

interface StatCardProps {
  label: string;
  value: string;
  icon: IconType;
  colorClass: string; // TailWind class for background
  iconColorClass?: string;
  subValue?: string;
}

const StatCard = ({ label, value, icon: Icon, colorClass, iconColorClass = "text-gray-700" }: StatCardProps) => {
  return (
    <div className={clsx("rounded-xl p-6 flex items-center gap-4 text-gray-800", colorClass)}>
      <div className="p-3 bg-white/60 rounded-full backdrop-blur-sm">
         <Icon className={clsx("w-6 h-6", iconColorClass)} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
