import clsx from "clsx";

const stages = [
  { name: "Preliminary Assessment", status: "completed" },
  { name: "Mandate & Due diligence", status: "completed" },
  { name: "Credit Approval", status: "current" },
  { name: "Financial Close", status: "pending" },
];

const ProgressBar = () => {
  return (
    <div className="md:w-full overflow-hidden ">
      <div className="flex filter drop-shadow-sm overflow-x-auto no-scrollbar">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className={clsx(
              "relative h-10 flex items-center justify-center whitespace-nowrap text-[10px] md:text-xs font-medium shrink-0 rounded-l-md",

              "px-4 flex-1  ",

              // Arrow shape
              idx !== stages.length - 1
                ? "clip-arrow-right "
                : "clip-arrow-end ",

              // Colors
              stage.status === "completed" && "bg-[#AEE4EA] text-[#0E7581] ",
              stage.status === "current" && "bg-[#0E7581] text-white z-10",
              stage.status === "pending" &&
                "bg-[#EEF0F2] text-[#2B2E31AD] font-medium",

              //  Smaller overlap on mobile
              idx !== 0 && "md:-ml-3 -ml-2",
            )}
            style={{
              zIndex: stages.length - idx,
            }}
          >
            {stage.name}
          </div>
        ))}
        <style jsx>{`
          .clip-arrow-right {
            clip-path: polygon(
              0% 0%,
              92% 0%,
              100% 50%,
              92% 100%,
              0% 100%,
              8% 50%
            );
          }
          .clip-arrow-end {
            clip-path: polygon(
              0% 0%,
              92% 0%,
              100% 50%,
              92% 100%,
              0% 100%,
              8% 50%
            );
          }
          /* First item needs straight left edge */
          div:first-child.clip-arrow-right {
            clip-path: polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%);
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProgressBar;
