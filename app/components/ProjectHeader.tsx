"use client";
import { LuBriefcase, LuChevronLeft, LuChevronRight, LuSun } from "react-icons/lu";
import StatCard from "./StatCard";

const ProjectHeader = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Navigation & Logo */}
      <div className="flex items-center justify-between py-2">
        <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
          <LuChevronLeft /> Previous Project
        </button>
        
        <div className="flex items-center gap-2">
             {/* Placeholder for Arnergy Logo */}
            <div className="flex items-center gap-2">
                <LuSun className="text-orange-500 text-3xl" />
                <span className="text-2xl font-bold text-orange-500 tracking-tight">arnergy</span>
            </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
          Next Project <LuChevronRight />
        </button>
      </div>

      {/* Project Title & Pipeline */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Anergy Solar Ltd</h1>
        
        <div className="flex items-center gap-3">
             <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200">
                <LuBriefcase size={20} />
             </div>
             <div className="flex flex-col">
                <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Deal Pipeline</span>
                <span className="text-2xl font-bold text-gray-800">84.2Bn</span>
             </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
            label="Energy" 
            value="7,500Kwp" 
            icon={LuBriefcase} 
            colorClass="bg-[#CFF4FC]"
            iconColorClass="text-blue-900"
        />
        <StatCard 
            label="Connections" 
            value="59,115" 
            icon={LuBriefcase} 
            colorClass="bg-[#E2E3E5]"
            iconColorClass="text-gray-800"
        />
        <StatCard 
            label="Communities" 
            value="100" 
            icon={LuBriefcase} 
            colorClass="bg-[#D1E7DD]"
            iconColorClass="text-green-900"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
