import clsx from "clsx";

const stages = [
  { name: "Preliminary Assessment", status: "completed" },
  { name: "Mandate & Due diligence", status: "completed" },
  { name: "Credit Approval", status: "current" },
  { name: "Financial Close", status: "pending" },
];

const ProgressBar = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex filter drop-shadow-sm overflow-x-auto no-scrollbar">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className={clsx(
              "relative h-10 flex items-center justify-center whitespace-nowrap text-[10px] md:text-xs font-medium shrink-0",

              // 👇 IMPORTANT: fixed width instead of flex-1
              "px-4 min-w-[140px] md:min-w-[180px]",

              // Arrow shape
              idx !== stages.length - 1 ? "clip-arrow-right" : "clip-arrow-end",

              // Colors
              stage.status === "completed" && "bg-cyan-100 text-teal-800",
              stage.status === "current" && "bg-teal-700 text-white z-10",
              stage.status === "pending" && "bg-gray-100 text-gray-500",

              // 👇 Smaller overlap on mobile
              idx !== 0 && "-ml-2 md:-ml-4",
            )}
            style={{
              zIndex: stages.length - idx,
            }}
          >
            {stage.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
