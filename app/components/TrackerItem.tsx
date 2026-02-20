"use client";

import clsx from "clsx";
import {
  LuChevronRight,
  LuClock,
  LuCircleCheck,
  LuFileText,
  LuVideo,
  LuChevronUp,
  LuCheck,
  LuLoader,
} from "react-icons/lu";

import { useState } from "react";
import CheckList from "./CheckList";
import Image from "next/image";

interface TrackerItemProps {
  id: string;
  title: string;
  statusCount?: number; // e.g., the number "2" in blue box
  bgClass?: string; // custom background for expanded state header
  isExpanded?: boolean;
  onToggle: () => void;
}

const TrackerItem = ({
  id,
  title,
  statusCount,
  bgClass,
  isExpanded = false,
  onToggle,
}: TrackerItemProps) => {
  const [comment, setComment] = useState("");
  const [openBody, setOpenBody] = useState(false);

  return (
    <div
      className={clsx(
        "border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm  ",
        isExpanded ? "w-full" : "md:w-[57vw]",
      )}
    >
      {/* Header */}
      <div
        className={clsx(
          "flex items-center justify-between p-4 cursor-pointer transition-colors",
          isExpanded ? bgClass || "bg-[#AEE4EA]" : "bg-white hover:bg-gray-50",
        )}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <LuChevronUp className="text-gray-500" />
          ) : (
            <LuChevronRight className="text-gray-500" />
          )}
          <span className={clsx("font-bold text-sm text-[#0E7581D6]")}>
            {title}
          </span>
        </div>
        {statusCount && (
          <div
            className={clsx(
              "text-xs font-bold px-2 py-1 rounded",
              isExpanded
                ? "bg-[#0E7581] text-[#AEE4EA]"
                : "bg-[#AEE4EA] text-[#0E7581]",
            )}
          >
            {statusCount}
          </div>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="md:p-6 p-2 bg-gray-100 border-t border-gray-100 flex flex-col gap-4 w-full ">
          {/* Site Identification and Selection */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between mt-2 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 mx-2">
                <LuChevronRight />
              </span>
              <span className="font-normal text-sm text-subPrimaryText">
                Site Identification and Selection
              </span>
            </div>
            <div className="text-xs  px-2 py-1 rounded bg-white border border-[#2B2E311F] text-subPrimaryText">
              2
            </div>
          </div>

          {/* Preliminary Assessment */}
          <section
            className={clsx(
              " rounded-md border-[#5DC1A61A]  ",
              openBody && "bg-white",
            )}
          >
            {/* Header Details */}
            <div className="flex justify-between items-start mb-6 bg-[#5DC1A61A] p-4 border border-[#5DC1A680] rounded-t-md">
              <div className="flex items-center gap-2">
                {openBody ? (
                  <LuChevronUp
                    className="  text-[#0E7581]"
                    onClick={(e) => setOpenBody(false)}
                  />
                ) : (
                  <LuChevronRight
                    className="  text-[#0E7581]"
                    onClick={(e) => setOpenBody(true)}
                  />
                )}
                <div>
                  <div className="text-[10px] font-medium  text-[#0E7581D6] uppercase tracking-wide mb-1">
                    Current Focus
                  </div>
                  <h3 className="font-medium text-[#2B2E31D6] text-[14px]">
                    Preliminary Assessment
                  </h3>
                  <div className="flex gap-2 mt-2 bg-white border text-[#0E7581D6] border-[#0E758180] items-center justify-center rounded-md">
                    <span className=" text-[10px]   px-2 py-1 rounded font-medium">
                      SOP STEP 3
                    </span>
                    <LuVideo />
                    <LuFileText />
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded px-3 py-1 bg-white text-xs font-bold text-gray-600">
                4 Outputs
              </div>
            </div>

            <div className={clsx(openBody ? " " : "hidden")}>
              <div className=" flex flex-col md:flex-row text-center items-center justify-center md:justify-start gap-4 mb-2 text-sm p-4 border-b border-[#ADB8CC]">
                <div className="flex items-center gap-2 md:border-r border-[#ADB8CC] px-2 ">
                  <span className="flex items-center gap-2 text-[#2B2E31D6]">
                    <LuLoader className="w-6 h-6 text-gray-400 " /> Status
                  </span>
                  <span className="bg-[#AEE4EA] px-2 py-0.5 rounded-full font-medium text-[10px]">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#2B2E31D6] pl-4 md:pl-0">
                  <LuClock className="w-4 h-4 text-gray-400" />
                  <span className="">Due Date</span>
                  <span className="bg-gray-100  px-2 py-0.5 rounded-full font-medium text-[10px]">
                    01/11/2025
                  </span>
                </div>
              </div>

              <div className="mb-4 p-4">
                <h4 className="font-semibold text-sm text-subPrimaryText mb-1">
                  Objectives & Output
                </h4>
                <p className="text-xs text-[#0E7581] font-medium">
                  Responsible: DREEF Technical team
                </p>
              </div>

              {/* Checklist Items */}

              <div className="flex flex-col md:gap-3 gap-4 p-4">
                {/* Completed */}
                <div className="bg-green-50/50 md:p-4 p-2 rounded-lg border border-green-100  ">
                  <div className="flex flex-row items-center gap-2  justify-between w-full pt-2 md:hidden pb-4">
                    <span className="bg-[#47B65C] text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">
                      01/11/2025
                    </span>
                    <div className="flex gap-1">
                      <span className="text-xs font-bold text-green-700">
                        SENT
                      </span>
                      <div className="w-4 h-4 border border-green-500 bg-white rounded flex items-center justify-center">
                        <LuCheck className="w-2 h-2 text-green-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <LuCircleCheck className="text-green-500 mt-1" />
                    <div className="flex-1 gap-4">
                      <p className="font-bold text-sm text-[#47B65C] line-clamp-1 line-through decoration-[#47B65C]">
                        Obtain initial load estimates
                      </p>

                      <div className="flex flex-col-reverse md:flex-row gap-1 md:justify-between justify-center">
                        <div className="flex items-center gap-2 mt-1 text-xs text-[#47B65C80]">
                          <Image
                            src={"/out.svg"}
                            alt="out"
                            height={12}
                            width={12}
                            priority
                          />{" "}
                          Output: Commercial & Feasibility Report
                        </div>
                        <div className="md:flex flex-row items-center gap-2  justify-end pt-2 hidden ">
                          <span className="bg-[#47B65C] text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">
                            01/11/2025
                          </span>
                          <span className="text-xs font-bold text-green-700">
                            SENT
                          </span>
                          <div className="w-4 h-4 border border-green-500 bg-white rounded flex items-center justify-center">
                            <LuCheck className="w-2 h-2 text-green-500" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <LuFileText className="h-3 w-3 text-[#47B65C80]" />{" "}
                        <span className="mt-2 inline-flex items-center gap-2 bg-[#47B65C] text-white px-2 md:px-3 py-1 rounded text-[10px] md:text-xs">
                          Focus on key load drivers for quick forecasting.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pending */}
                <CheckList
                  title=" Obtain community energy needs"
                  detail=" Capture productive-use data for more accurate sizing."
                />

                <CheckList
                  title=" Get information on number of connections and power house
                    size"
                  detail=" Validate with community reps to avoid over-/under-design."
                />

                <CheckList
                  title=" Conducts a high-level feasibility assessment"
                  detail=" Use quick benchmarks before deep analysis."
                />
              </div>
            </div>
          </section>
          {/* Execution of Exclusivity Agreement */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between mt-2 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 mx-2">
                <LuChevronRight />
              </span>
              <span className="font-normal text-sm text-subPrimaryText">
                Execution of Exclusivity Agreement
              </span>
            </div>
            <div className="text-xs  px-2 py-1 rounded bg-white border border-[#2B2E311F] text-subPrimaryText">
              1
            </div>
          </div>
          {/* Comments Section */}
          <div className="mt-8 md:p-10 p-4 border-t border-[#1111111F] ">
            <h3 className="font-bold text-sm text-gray-800 mb-4">Comments</h3>

            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-4">
                <div className=" rounded-full  overflow-hidden">
                  <Image
                    src="/user-avater1.svg"
                    alt="User"
                    width={50}
                    height={50}
                    quality={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900">
                      Monsurat Adeniyi
                    </span>
                    <span className="text-xs text-gray-400">1m</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A strong start with legal recognition and operational setup.
                    Wishing continued success.
                  </p>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-4">
                <div className=" rounded-full  overflow-hidden">
                  <Image
                    src="/user-avater2.svg"
                    alt="User"
                    width={50}
                    height={50}
                    quality={100}
                    priority
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900">
                      Precious Akinrin
                    </span>
                    <span className="text-xs text-gray-400">Just now</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Big step forward. Excited to see this new facility
                    officially established and ready to operate. The new
                    facility is officially ready to make an impact.
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-4 items-center border-b border-gray-500 pb-2">
                <div className=" rounded-full  overflow-hidden">
                  <Image
                    src="/user-avater1.svg"
                    alt="User"
                    width={50}
                    height={50}
                    quality={100}
                    priority
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full   px-4 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button className="bg-[#0E7581] hover:bg-teal-800 text-white text-xs font-bold px-4 py-2 rounded-md transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackerItem;
