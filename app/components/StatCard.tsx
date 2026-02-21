import { motion } from "framer-motion";
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

const StatCard = ({
  label,
  value,
  icon,
  colorClass,
  iconColorClass = "text-gray-700",
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={clsx(
        "rounded-xl p-6 flex items-center gap-4 text-gray-800 cursor-pointer transition-shadow border border-[#45CEE3]",
        colorClass,
      )}
    >
      <div className="p-3 bg-[#DCECF9] rounded-full backdrop-blur-sm">
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={clsx("w-6 h-6", iconColorClass)}
          priority
        />
      </div>
      <div>
        <p className="text-xs md:text-sm text-[#2B2E3185] font-normal">
          {label}
        </p>
        <p className="text-xl md:text-2xl font-semibold text-[#111111EB] tracking-tight">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
