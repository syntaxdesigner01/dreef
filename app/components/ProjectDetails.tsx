"use client";

import { LuFileText, LuBox, LuCalendar, LuCircleCheck, LuClipboard, LuTriangleAlert, LuUser } from "react-icons/lu";
import InfoCard from "./InfoCard";
import ProgressBar from "./ProgressBar";

const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* About Section */}
      <section>
        <h3 className="text-gray-900 font-bold border-b border-gray-200 pb-2 mb-4 w-fit">About Project Sponsor</h3>
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
            icon={LuClipboard} 
            colorClass="bg-blue-100 text-blue-600"
        />
        <InfoCard 
            label="Initial deal size" 
            value="3.4" 
            icon={LuBox} 
            colorClass="bg-purple-100 text-purple-600"
        />
        <InfoCard 
            label="Due diligence Status" 
            value="Completed" 
            icon={LuCircleCheck} 
            colorClass="bg-teal-100 text-teal-600"
        />
        <InfoCard 
            label="Business Model" 
            value="Commercial & Industrial" 
            icon={LuFileText} 
            colorClass="bg-indigo-100 text-indigo-600"
        />
        <InfoCard 
            label="Closing Date" 
            value="Jun 2025" 
            icon={LuCalendar} 
            colorClass="bg-green-100 text-green-600"
        />
        <InfoCard 
            label="Credit Approval" 
            value="Completed" 
            icon={LuCircleCheck} 
            colorClass="bg-indigo-100 text-indigo-600"
        />
      </section>

      {/* Progress Bar */}
      <section>
         <ProgressBar />
         <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
            <span>Transaction Description</span>
            <span>Use of Proceeds</span>
            <span>Deal Pipeline</span>
            <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded">Transaction Update</span>
         </div>
         <p className="text-xs text-gray-500 mt-2">Credit Paper [maximum 20 pages] finalised [within 2 weeks of due diligence completion</p>
      </section>

      {/* Key Challenges */}
      <section className="rounded-lg overflow-hidden border border-teal-100">
          <div className="bg-teal-100/50 p-3 font-bold text-teal-800 text-sm">Key challenges</div>
          <div className="bg-white p-4 flex items-center justify-between">
              <div>
                  <h4 className="text-sm font-bold text-gray-900">Unresponsiveness of Client</h4>
                  <p className="text-xs text-gray-500 mt-1">Client is in the process of raising equity, hence has been unresponsive</p>
              </div>
               <div className="flex items-center gap-2 text-xs bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                  <LuUser className="text-teal-600" />
                  <span className="font-bold text-gray-700">Precious Akinrin</span>
              </div>
          </div>
      </section>

       {/* Area of management support */}
       <section className="rounded-lg overflow-hidden border border-teal-100">
          <div className="bg-teal-100/50 p-3 font-bold text-teal-800 text-sm">Area of mananagement support</div>
          <div className="bg-white p-4 flex items-center justify-between">
              <div>
                  <h4 className="text-sm font-bold text-gray-900">Client Unresponsiveness</h4>
                  <p className="text-xs text-gray-500 mt-1">Transaction Team needs management team to assist in following up with client.</p>
              </div>
              <div className="flex items-center gap-2 text-xs bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                  <LuUser className="text-teal-600" />
                  <span className="font-bold text-gray-700">Precious Akinrin</span>
              </div>
          </div>
      </section>

    </div>
  );
};

export default ProjectDetails;
