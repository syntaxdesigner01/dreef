import { IconType } from "react-icons";
import clsx from "clsx";
import Image from "next/image";

interface InfoCardProps {
  label: string;
  value: string;
  icon: string;
  colorClass: string; // Background color for the icon container
}

const InfoCard = ({ label, value, icon, colorClass }: InfoCardProps) => {
  return (
    <div className="bg-[#6ADFF126] border border-cyan-100 rounded-lg p-4 flex gap-4 items-start">
      <div className={clsx("p-2 rounded-full text-gray-700", colorClass)}>
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>
      <div>
        <h4 className="text-xs text-textLight mb-1">{label}</h4>
        <p className="font-semibold text-[12px] text-gray-900 leading-tight">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
