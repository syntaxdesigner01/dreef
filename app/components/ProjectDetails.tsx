"use client";

import { LuFileText, LuBox, LuCalendar, LuCircleCheck, LuClipboard, LuTriangleAlert, LuUser } from "react-icons/lu";


import InfoCard from "./InfoCard";
import ProgressBar from "./ProgressBar";

const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* About Section */}
      <section>
        <h3 className="text-gray-900 font-bold border-b-2 border-gray-900 pb-2 mb-4 w-fit text-lg">About Project Sponsor</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Arnergy Solar Limited ("Arnergy" or "the Company") is a distributed utility company that provides sustainable
          renewable energy solutions to customers, leveraging solar and lithium-ion storage technologies.
        </p>
      </section>

      {/* Info Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoCard 
            label="Transaction Stage" 
            value="Credit Approval" 
            icon={'/routing-2.svg'} 
            colorClass="bg-[#B6D4EC] text-blue-600"
        />
        <InfoCard 
            label="Initial deal size" 
            value="3.4" 
            icon={'/box.svg'}  
            colorClass="bg-[#D6C8EF] text-purple-600"
        />
        <InfoCard 
            label="Due diligence Status" 
            value="Completed" 
            icon={'/document-text.svg'} 
            colorClass="bg-[#AEE4EA] text-indigo-600"
        />
        <InfoCard 
            label="Business Model" 
            value="Commercial & Industrial" 
            icon={'/document-text2.svg'} 
            colorClass="bg-[#B5C4EE] text-indigo-600"
        />
        <InfoCard 
            label="Closing Date" 
            value="Jun 2025" 
           icon={'/document-text3.svg'} 
            colorClass="bg-[#BBE7D0] text-indigo-600"
        />
        <InfoCard 
            label="Credit Approval" 
            value="Completed" 
            icon={'/clipboard-tick.svg'} 
            colorClass="bg-[#C4CDF2] text-indigo-600"
        />
      </section>

      {/* Progress Bar & Tabs */}
      <section>
         <ProgressBar />
         <div className="flex items-center gap-6 text-sm text-gray-400 mt-6 px-2 border-b border-gray-100 pb-0">
            <span className="pb-3 hover:text-gray-600 cursor-pointer">Transaction Description</span>
            <span className="pb-3 hover:text-gray-600 cursor-pointer">Use of Proceeds</span>
            <span className="pb-3 hover:text-gray-600 cursor-pointer">Deal Pipeline</span>
            <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-t-lg font-bold border-b-2 border-cyan-500">Transaction Update</span>
         </div>
         <p className="text-gray-500 mt-4 font-medium text-sm">Credit Paper [maximum 20 pages] finalised [within 2 weeks of due diligence completion</p>
      </section>

      {/* Cards Section */}
      <div className="flex flex-col gap-4">
        {/* Key Challenges */}
        <section className="rounded-xl overflow-hidden border border-cyan-100 shadow-sm">
            <div className="bg-cyan-100 p-3 px-5 font-bold text-teal-800 text-sm">Key challenges</div>
            <div className="bg-white p-5 flex items-start justify-between">
                <div className="max-w-2xl">
                    <h4 className="text-base font-bold text-gray-900 mb-1">Unresponsiveness of Client</h4>
                    <p className="text-sm text-gray-500">Client is in the process of raising equity, hence has been unresponsive</p>
                </div>
                 <div className="flex items-center gap-2 text-xs bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-100">
                    <div className="p-1 bg-cyan-100 rounded-full text-cyan-700">
                        <LuUser size={12} fill="currentColor" />
                    </div>
                    <span className="font-bold text-gray-800">Precious Akinrin</span>
                </div>
            </div>
        </section>

         {/* Area of management support */}
         <section className="rounded-xl overflow-hidden border border-cyan-100 shadow-sm">
            <div className="bg-cyan-100 p-3 px-5 font-bold text-teal-800 text-sm">Area of mananagement support</div>
            <div className="bg-white p-5 flex items-start justify-between">
                <div className="max-w-2xl">
                    <h4 className="text-base font-bold text-gray-900 mb-1">Client Unresponsiveness</h4>
                    <p className="text-sm text-gray-500">Transaction Team needs management team to assist in following up with client.</p>
                </div>
                <div className="flex items-center gap-2 text-xs bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-100">
                    <div className="p-1 bg-cyan-100 rounded-full text-cyan-700">
                        <LuUser size={12} fill="currentColor" />
                    </div>
                    <span className="font-bold text-gray-800">Precious Akinrin</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
