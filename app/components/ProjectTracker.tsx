"use client";

import { useState } from "react";
import TrackerItem from "./TrackerItem";
import { motion } from "framer-motion";

const ProjectTracker = () => {
  // State to manage expanded items. For now, only one open or specific one.
  // Based on design, P2 is open.
  const [expandedIds, setExpandedIds] = useState<string[]>(["p0"]);

  const toggle = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [id],
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-full bg-white ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2"
      >
        {[
          { id: "p1", title: "P1: Engagement & Documentation", count: 2 },
          { id: "p2", title: "P2: Site Identification & Screening", count: 3 },
          { id: "p3", title: "P3: Technical Site Assessment", count: 3 },
          { id: "p4", title: "P4: Load & Supply Studies", count: 1 },
        ].map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <TrackerItem
              id={item.id}
              title={item.title}
              statusCount={item.count}
              isExpanded={expandedIds.includes(item.id)}
              onToggle={() => toggle(item.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 mb-4 flex w-full justify-center items-center">
        <button className="font-semibold text-white bg-[#0E7581] px-4 py-2 rounded-full capitalize">
          show more{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectTracker;
