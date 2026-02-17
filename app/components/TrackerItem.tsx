"use client";

import { useState } from "react";
import clsx from "clsx";
import { LuChevronRight, LuChevronDown, LuClock, LuCircleCheck, LuFileText, LuMessageSquare, LuMoreHorizontal, LuVideo, LuImage } from "react-icons/lu";

interface TrackerItemProps {
  id: string;
  title: string;
  statusCount?: number; // e.g., the number "2" in blue box
  bgClass?: string; // custom background for expanded state header
  isExpanded?: boolean;
  onToggle: () => void;
}

const TrackerItem = ({ id, title, statusCount, bgClass, isExpanded = false, onToggle }: TrackerItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
      {/* Header */}
      <div 
        className={clsx(
            "flex items-center justify-between p-4 cursor-pointer transition-colors",
            isExpanded ? (bgClass || "bg-blue-50") : "bg-white hover:bg-gray-50"
        )}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
            {isExpanded ? <LuChevronDown className="text-gray-500" /> : <LuChevronRight className="text-gray-500" />}
            <span className={clsx("font-bold text-sm", isExpanded ? "text-teal-800" : "text-blue-600")}>
                {title}
            </span>
        </div>
        {statusCount && (
            <div className={clsx("text-xs font-bold px-2 py-1 rounded", isExpanded ? "bg-teal-600 text-white" : "bg-blue-100 text-blue-600")}>
                {statusCount}
            </div>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 bg-white border-t border-gray-100">
            {/* Header Details */}
            <div className="flex justify-between items-start mb-6">
                <div>
                     <div className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Current Focus</div>
                     <h3 className="font-bold text-gray-900 text-lg">Preliminary Assessment</h3>
                     <div className="flex gap-2 mt-2">
                        <span className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded font-bold">SOP STEP 3</span>
                        <LuVideo className="text-gray-400" />
                        <LuImage className="text-gray-400" />
                     </div>
                </div>
                <div className="border border-gray-200 rounded px-3 py-1 bg-white text-xs font-bold text-gray-600">
                    4 Outputs
                </div>
            </div>

            <div className="flex gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">Status</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold text-xs">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                    <LuClock className="text-gray-400" />
                    <span className="text-gray-400">Due Date</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-bold text-xs">01/11/2025</span>
                </div>
            </div>

            <div className="mb-4">
                <h4 className="font-bold text-sm text-gray-800 mb-1">Objectives & Output</h4>
                <p className="text-xs text-teal-600 font-medium">Responsible: DREEF Technical team</p>
            </div>

            {/* Checklist Items */}
            <div className="flex flex-col gap-3">
                
                {/* Item 1 - Completed */}
                <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-start gap-3">
                         <LuCircleCheck className="text-green-500 mt-1" />
                         <div className="flex-1">
                             <p className="font-bold text-sm text-green-800 line-through decoration-green-800/50">Obtain initial load estimates</p>
                             <div className="flex items-center gap-2 mt-1 text-xs text-green-600">
                                 <LuFileText /> Output: Commercial & Feasibility Report
                             </div>
                             <div className="mt-2 inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded text-xs">
                                 Focus on key load drivers for quick forecasting.
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">01/11/2025</span>
                             <span className="text-xs font-bold text-green-700">SENT</span>
                             <div className="w-4 h-4 border border-green-500 bg-white rounded flex items-center justify-center">
                                 <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Item 2 - Pending */}
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                     <div className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                         <div className="flex-1">
                             <p className="font-bold text-sm text-gray-800">Obtain community energy needs</p>
                             <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                 <LuFileText /> Output: Commercial & Feasibility Report
                             </div>
                             <div className="mt-2 inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">
                                 Capture productive-use data for more accurate sizing.
                             </div>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                             <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded">10 DAYS</span>
                             <span className="text-[10px] font-bold text-gray-400 tracking-wider">PENDING</span>
                              <div className="w-4 h-4 border border-gray-300 rounded"></div>
                         </div>
                    </div>
                </div>

                {/* Item 3 - Pending */}
                 <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                     <div className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                         <div className="flex-1">
                             <p className="font-bold text-sm text-gray-800">Get information on number of connections and power house size</p>
                             <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                 <LuFileText /> Output: Commercial & Feasibility Report
                             </div>
                             <div className="mt-2 inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">
                                 Validate with community reps to avoid over-/under-design.
                             </div>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                             <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded">10 DAYS</span>
                             <span className="text-[10px] font-bold text-gray-400 tracking-wider">PENDING</span>
                              <div className="w-4 h-4 border border-gray-300 rounded"></div>
                         </div>
                    </div>
                </div>

                 {/* Item 4 - Pending */}
                 <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                     <div className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                         <div className="flex-1">
                             <p className="font-bold text-sm text-gray-800">Conducts a high-level feasibility assessment</p>
                             <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                 <LuFileText /> Output: Productive Use Demand Survey Report
                             </div>
                             <div className="mt-2 inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">
                                 Use quick benchmarks before deep analysis.
                             </div>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                             <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded">10 DAYS</span>
                             <span className="text-[10px] font-bold text-gray-400 tracking-wider">PENDING</span>
                              <div className="w-4 h-4 border border-gray-300 rounded"></div>
                         </div>
                    </div>
                </div>

            </div>

        </div>
      )}
    </div>
  );
};

export default TrackerItem;
