"use client";

import clsx from "clsx";

interface TabsProps {
  activeTab: "details" | "tracker";
  onTabChange: (tab: "details" | "tracker") => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex justify-center w-full md:justify-start items-center md:gap-8 gap-10 mt-8 mb-6 overflow-x-auto pb-2">
      <button
        onClick={() => onTabChange("details")}
        className={clsx(
          "pb-3 text-md md:text-sm font-semibold transition-all relative",
          activeTab === "details"
            ? "text-grayMain border-b-2 border-grayMain pr-6"
            : "text-grayLight hover:text-gray-700",
        )}
      >
        Project Details
      </button>
      <button
        onClick={() => onTabChange("tracker")}
        className={clsx(
          "pb-3 text-md md:text-sm font-semibold transition-all relative",
          activeTab === "tracker"
            ? "text-grayMain border-b-2 border-grayMain pr-6"
            : "text-grayLight hover:text-gray-700",
        )}
      >
        Project Tracker
      </button>
    </div>
  );
};

export default Tabs;
