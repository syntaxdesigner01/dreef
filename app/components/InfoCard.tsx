import { IconType } from "react-icons";
import clsx from "clsx";

interface InfoCardProps {
  label: string;
  value: string;
  icon: IconType;
  colorClass: string; // Background color for the icon container
}

const InfoCard = ({ label, value, icon: Icon, colorClass }: InfoCardProps) => {
  return (
    <div className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-4 flex gap-4 items-start">
      <div className={clsx("p-2 rounded-full text-gray-700", colorClass)}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-xs text-gray-500 mb-1">{label}</h4>
        <p className="font-bold text-gray-900 leading-tight">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
