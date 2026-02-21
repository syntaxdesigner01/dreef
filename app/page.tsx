"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import ProjectHeader from "./components/ProjectHeader";
import Tabs from "./components/Tabs";
import ProjectDetails from "./components/ProjectDetails";
import ProjectTracker from "./components/ProjectTracker";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"details" | "tracker">("details");

  return (
    <div className="flex flex-1 bg-white font-sans text-gray-900 overflow-hidden">
      {/* Sidebar - Hidden on mobile, shown on large screens */}

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-2 md:p-8 pb-10">
          <ProjectHeader />

          <section className="md:flex gap-2 ">
            <section className="bg-white md:p-4 p-2 mt-4 rounded-md max-w-full flex-1">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

              <div className="mt-6 ">
                <AnimatePresence mode="wait">
                  {activeTab === "details" ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProjectDetails />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="tracker"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProjectTracker />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            <div className="hidden md:block  mt-4">
              <Sidebar />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
