"use client";

import { useState } from "react";
import TrackerItem from "./TrackerItem";

const ProjectTracker = () => {
  // State to manage expanded items. For now, only one open or specific one.
  // Based on design, P2 is open.
  const [expandedIds, setExpandedIds] = useState<string[]>(["p0"]);

  const toggle = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [id],
    );
  };

  return (
    <div className="max-w-full bg-white ">
      <div className="flex flex-col gap-2">
        <TrackerItem
          id="p1"
          title="P1: Engagement & Documentation"
          statusCount={2}
          isExpanded={expandedIds.includes("p1")}
          onToggle={() => toggle("p1")}
        />
        <TrackerItem
          id="p2"
          title="P2: Site Identification & Screening"
          statusCount={3}
          isExpanded={expandedIds.includes("p2")}
          onToggle={() => toggle("p2")}
        />
        <TrackerItem
          id="p3"
          title="P3: Technical Site Assessment"
          statusCount={3}
          isExpanded={expandedIds.includes("p3")}
          onToggle={() => toggle("p3")}
        />
        <TrackerItem
          id="p4"
          title="P4: Load & Supply Studies"
          statusCount={1}
          isExpanded={expandedIds.includes("p4")}
          onToggle={() => toggle("p4")}
        />
      </div>

      <div className="py-10 flex w-full justify-center items-center">
        <button className="font-semibold text-white bg-[#0E7581] px-4 py-2 rounded-full capitalize">
          show more{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectTracker;
