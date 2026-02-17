"use client";

import clsx from "clsx";

interface TabsProps {
  activeTab: "details" | "tracker";
  onTabChange: (tab: "details" | "tracker") => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex items-center gap-8 border-b border-gray-200 mt-8 mb-6">
      <button
        onClick={() => onTabChange("details")}
        className={clsx(
          "pb-3 text-sm font-bold transition-all relative",
          activeTab === "details"
            ? "text-gray-900 border-b-2 border-gray-900"
            : "text-gray-500 hover:text-gray-700"
        )}
      >
        
        Project Details
      </button>
      <button
        onClick={() => onTabChange("tracker")}
        className={clsx(
          "pb-3 text-sm font-bold transition-all relative",
          activeTab === "tracker"
            ? "text-gray-900 border-b-2 border-gray-900 top-px" /* top-px to overlap border */
            : "text-gray-500 hover:text-gray-700"
        )}
      >
        Project Tracker
      </button>
    </div>
  );
};

export default Tabs;
