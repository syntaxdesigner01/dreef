"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectHeader from "./components/ProjectHeader";
import Tabs from "./components/Tabs";
import ProjectDetails from "./components/ProjectDetails";
import ProjectTracker from "./components/ProjectTracker";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"details" | "tracker">("details");

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900 ">
      {/* Sidebar - Hidden on mobile, shown on large screens */}
     

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-6 md:p-8 pb-20">
            <ProjectHeader />
            
           <section className="flex gap-2">
          
          <section className="bg-white p-4 mt-4 rounded-md">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            
             <div className="mt-6 ">
                {activeTab === "details" ? (
                    <ProjectDetails />
                ) : (
                    <ProjectTracker />
                )}
            </div>
          </section>

             <div className="hidden lg:block  mt-4">
                <Sidebar />
             </div>
           </section>
        </div>
      </main>
    </div>
  );
}
