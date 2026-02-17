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
    <div className="flex min-h-screen bg-white font-sans text-gray-900">
      {/* Sidebar - Hidden on mobile, shown on large screens */}
     

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto p-6 md:p-8 pb-20">
            <ProjectHeader />
            
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            
           <section className="flex gap-4">
             <div className="mt-6 overflow-y-auto h-screen">
                {activeTab === "details" ? (
                    <ProjectDetails />
                ) : (
                    <ProjectTracker />
                )}
            </div>

             <div className="hidden lg:block h-screen sticky top-0">
        <Sidebar />
      </div>
           </section>
        </div>
      </main>
    </div>
  );
}
