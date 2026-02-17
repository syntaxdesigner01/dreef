import clsx from "clsx";

const stages = [
  { name: "Preliminary Assessment", status: "completed" },
  { name: "Mandate & Due diligence", status: "completed" },
  { name: "Credit Approval", status: "current" },
  { name: "Financial Close", status: "pending" },
];

const ProgressBar = () => {
  return (
    <div className="flex w-full overflow-hidden rounded-lg">
      {stages.map((stage, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex-1 py-3 px-2 text-center text-xs font-bold relative flex items-center justify-center",
            stage.status === "completed" && "bg-blue-200 text-blue-900",
            stage.status === "current" && "bg-teal-700 text-white",
            stage.status === "pending" && "bg-gray-100 text-gray-400"
          )}
        >
            {/* CSS Triangle / Chevron effect would be complex here without SVG or clip-path. 
                For MVP/Design match, using background colors. 
                To achieve the arrow effect: 
            */}
             <div 
                className={clsx(
                   "absolute top-0 right-0 h-full w-4 transform translate-x-2 skew-x-[-20deg] z-10 border-r-2 border-white",
                   stage.status === "completed" && "bg-blue-200",
                   stage.status === "current" && "bg-teal-700",
                   stage.status === "pending" && "bg-gray-100",
                   // Hide the last one's arrow or make it square? Design shows arrows for all except maybe last.
                   idx === stages.length - 1 && "hidden"
                )} 
            />
            {/* We need a better chevron approach. Let's try clip-path or absolute positioning overlay.
                Actually, simpler approach:
             */}
            <span className="z-20 relative">{stage.name}</span>
            
            {/* Right-side arrow overlay for previous element to "cut into" this one? 
                No, usually it's `clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)` for arrow shape.
                Let's use clip-path.
             */}
        </div>
      ))}
      <style jsx>{`
        div > div {
            clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
            margin-right: -10px; /* Overlap */
            padding-right: 15px; /* Compenstate */
            padding-left: 20px;
        }
        div > div:first-child {
             padding-left: 0;
             clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
        }
        div > div:last-child {
            margin-right: 0;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%);
             /* This is reverse arrow? No, standard flow. 
                Design: |> |> |> |>
             */
             clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
             padding-left: 20px;
        }
        /* 
           The design has a distinct arrow shape. 
           Let's simplify: Standard flex with chevron separator using borders or SVGs is safer than complex clip-path for resizing.
           BUT, clip-path is the most "Tailwind" way without images.
           
           Let's try a different HTML structure.
        */
      `}</style>
    </div>
  );
};

// Re-write component to be simpler and robust
const ProgressBarSimple = () => {
    return (
        <div className="flex w-full items-stretch h-10 bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex-1 bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold relative group">
                Preliminary Assessment
                <div className="absolute -right-3 top-0 h-full w-6 bg-blue-200 transform skew-x-[-20deg] z-10 border-r border-white"></div>
            </div>
            <div className="flex-1 bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold relative z-0">
               <div className="absolute -left-3 top-0 h-full w-6 bg-blue-200 transform skew-x-[-20deg]"></div>
               <span className="relative z-20">Mandate & Due diligence</span>
               <div className="absolute -right-3 top-0 h-full w-6 bg-blue-200 transform skew-x-[-20deg] z-10 border-r border-white"></div>
            </div>
            {/* This is getting messy with z-index. 
                Let's use a standard list with ::after chevron.
            */}
             <div className="flex-1 bg-teal-700 text-white flex items-center justify-center text-xs font-bold relative z-20">
               <div className="absolute -left-3 top-0 h-full w-6 bg-teal-700 transform skew-x-[-20deg]"></div>
               <span className="relative z-20">Credit Approval</span>
               <div className="absolute -right-3 top-0 h-full w-6 bg-teal-700 transform skew-x-[-20deg] z-30 border-r border-white"></div>
            </div>
             <div className="flex-1 bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold relative z-10">
               <div className="absolute -left-3 top-0 h-full w-6 bg-gray-100 transform skew-x-[-20deg]"></div>
               <span className="relative z-20">Financial Close</span>
            </div>
        </div>
    )
}

// Final attempt using clip-path utility classes if possible or inline styles.
// The design shows: [Blue >] [Blue >] [Dark Teal >] [Gray]
const ProgressBarFinal = () => {
    return (
        <div className="flex w-full text-xs font-bold text-center">
            <div className="flex-1 py-3 bg-blue-200 text-blue-900 clip-arrow-r pr-4 pl-2">Preliminary Assessment</div>
            <div className="flex-1 py-3 bg-blue-200 text-blue-900 clip-arrow-lr -ml-4 pl-6 pr-4">Mandate & Due diligence</div>
            <div className="flex-1 py-3 bg-teal-700 text-white clip-arrow-lr -ml-4 pl-6 pr-4">Credit Approval</div>
            <div className="flex-1 py-3 bg-gray-100 text-gray-400 clip-arrow-l -ml-4 pl-6">Financial Close</div>
             <style jsx>{`
                .clip-arrow-r { clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%); }
                .clip-arrow-lr { clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%); }
                .clip-arrow-l { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 50%); }
            `}</style>
        </div>
    )
}

export default ProgressBarFinal;
