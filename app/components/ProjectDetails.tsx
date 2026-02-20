"use client";

import { useRef, useEffect } from "react";
import { LuUser, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import InfoCard from "./InfoCard";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

const ProjectDetails = () => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollLeft = tabsRef.current.scrollWidth;
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full ">
      <div className="flex flex-col gap-8 ">
        {/* About Section */}
        <section>
          <h3 className="text-subPrimaryText font-medium text-center md:text-start border-b-2 border-grayMain pb-2 mb-4 w-full md:w-fit text-lg">
            About Project Sponsor
          </h3>
          <p className="text-subPrimaryText text-sm leading-relaxed">
            Arnergy Solar Limited ("Arnergy" or "the Company") is a distributed
            utility company that provides sustainable renewable energy solutions
            to customers, leveraging solar and lithium-ion storage technologies.
          </p>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard
            label="Transaction Stage"
            value="Credit Approval"
            icon={"/routing-2.svg"}
            colorClass="bg-[#B6D4EC] text-blue-600"
          />
          <InfoCard
            label="Initial deal size"
            value="3.4"
            icon={"/box.svg"}
            colorClass="bg-[#D6C8EF] text-purple-600"
          />
          <InfoCard
            label="Due diligence Status"
            value="Completed"
            icon={"/document-text.svg"}
            colorClass="bg-[#AEE4EA] text-indigo-600"
          />
          <InfoCard
            label="Business Model"
            value="Commercial & Industrial"
            icon={"/document-text2.svg"}
            colorClass="bg-[#B5C4EE] text-indigo-600"
          />
          <InfoCard
            label="Closing Date"
            value="Jun 2025"
            icon={"/document-text3.svg"}
            colorClass="bg-[#BBE7D0] text-indigo-600"
          />
          <InfoCard
            label="Credit Approval"
            value="Completed"
            icon={"/clipboard-tick.svg"}
            colorClass="bg-[#C4CDF2] text-indigo-600"
          />
        </section>

        {/* Progress Bar & Tabs */}
        <section>
          <ProgressBar />
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-[#11111185] mt-6 px-2 border-b border-gray-100 pb-0 w-full overflow-x-auto no-scrollbar">
            <span className="pb-3 hover:text-gray-600 cursor-pointer whitespace-nowrap">
              Transaction Description
            </span>
            <span className="pb-3 hover:text-gray-600 cursor-pointer whitespace-nowrap">
              Use of Proceeds
            </span>
            <span className="pb-3 hover:text-gray-600 cursor-pointer whitespace-nowrap">
              Deal Pipeline
            </span>
            <span className="bg-[#AEE4EA] text-[#0E7581] px-4 py-2 rounded-t-lg font-medium border-b-2 border-[#0E7581] whitespace-nowrap">
              Transaction Update
            </span>
          </div>
          <p className="text-subPrimaryText  mt-4 font-normal text-sm">
            Credit Paper [maximum 20 pages] finalised [within 2 weeks of due
            diligence completion
          </p>
        </section>

        {/* Cards Section */}
        <div className="flex flex-col gap-4">
          {/* Key Challenges */}
          <section className="rounded-xl overflow-hidden border border-cyan-100 shadow-sm">
            <div className="bg-cyan-100 p-3 px-5 font-bold text-teal-800 text-sm">
              Key challenges
            </div>
            <div className="bg-white p-5 flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h4 className="text-base font-semibold text-primaryText mb-1">
                  Unresponsiveness of Client
                </h4>
                <p className="text-xs text-subPrimaryText">
                  Client is in the process of raising equity, hence has been
                  unresponsive
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full  self-start md:self-auto">
                <div className="p-1 bg-[#E9FAFD] rounded-full text-primaryText">
                  <Image
                    src="/userIcon.svg"
                    alt="user"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="font-bold text-gray-800">
                  Precious Akinrin
                </span>
              </div>
            </div>
          </section>

          {/* Area of management support */}
          <section className="rounded-xl overflow-hidden  shadow-sm">
            <div className="bg-cyan-100 p-3 px-5 font-bold text-teal-800 text-sm">
              Area of mananagement support
            </div>
            <div className="bg-white p-5 flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h4 className="text-base font-semibold text-primaryText mb-1">
                  Client Unresponsiveness
                </h4>
                <p className="text-xs text-subPrimaryText">
                  Transaction Team needs management team to assist in following
                  up with client.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full  self-start md:self-auto">
                <div className="p-1 bg-[#E9FAFD] rounded-full text-primaryText">
                  <Image
                    src="/userIcon.svg"
                    alt="user"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="font-bold text-gray-800">
                  Precious Akinrin
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
