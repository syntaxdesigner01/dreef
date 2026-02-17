"use client";

import { useState } from "react";
import TrackerItem from "./TrackerItem";
import { LuSend, LuCircleUser } from "react-icons/lu";

const ProjectTracker = () => {
    // State to manage expanded items. For now, only one open or specific one.
    // Based on design, P2 is open.
    const [expandedIds, setExpandedIds] = useState<string[]>(["p2"]);
    const [comment, setComment] = useState("");

    const toggle = (id: string) => {
        setExpandedIds(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full">
            <div className="flex flex-col gap-2">
                <TrackerItem 
                    id="p1" 
                    title="P1: Engagement & Documentation" 
                    statusCount={2} 
                    isExpanded={expandedIds.includes("p1")}
                    onToggle={() => toggle("p1")}
                />
                 <TrackerItem 
                    id="p2" 
                    title="P2: Site Identification & Screening" 
                    statusCount={3} 
                    bgClass="bg-teal-100/50" // Special color for active one
                    isExpanded={expandedIds.includes("p2")}
                    onToggle={() => toggle("p2")}
                />
                 <TrackerItem 
                    id="p3" 
                    title="P3: Technical Site Assessment" 
                    statusCount={3} 
                    isExpanded={expandedIds.includes("p3")}
                    onToggle={() => toggle("p3")}
                />
                 <TrackerItem 
                    id="p4" 
                    title="P4: Load & Supply Studies" 
                    statusCount={1} 
                    isExpanded={expandedIds.includes("p4")}
                    onToggle={() => toggle("p4")}
                />

                {/* Execution of Exclusivity Agreement (Separate style?) */}
                 <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between mt-2 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                         <span className="text-gray-400 mx-2">{'>'}</span>
                         <span className="font-bold text-sm text-gray-700">Execution of Exclusivity Agreement</span>
                    </div>
                    <div className="text-xs font-bold px-2 py-1 rounded bg-gray-50 border border-gray-200 text-gray-600">
                        1
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
                <h3 className="font-bold text-sm text-gray-800 mb-4">Comments</h3>
                
                <div className="space-y-6">
                    {/* Comment 1 */}
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-teal-800 overflow-hidden">
                             {/* Placeholder image or icon */}
                             <img src="https://ui-avatars.com/api/?name=Monsurat+Adeniyi&background=0D9488&color=fff" alt="User" />
                        </div>
                        <div>
                             <div className="flex items-center gap-2 mb-1">
                                 <span className="font-bold text-sm text-gray-900">Monsurat Adeniyi</span>
                                 <span className="text-xs text-gray-400">1m</span>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                 A strong start with legal recognition and operational setup. Wishing continued success.
                             </p>
                        </div>
                    </div>

                     {/* Comment 2 */}
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 overflow-hidden">
                             {/* Placeholder image or icon */}
                             <img src="https://ui-avatars.com/api/?name=Precious+Akinrin&background=2563EB&color=fff" alt="User" />
                        </div>
                        <div>
                             <div className="flex items-center gap-2 mb-1">
                                 <span className="font-bold text-sm text-gray-900">Precious Akinrin</span>
                                 <span className="text-xs text-gray-400">Just now</span>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                 Big step forward. Excited to see this new facility officially established and ready to operate.
                                 The new facility is officially ready to make an impact.
                             </p>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-600 overflow-hidden">
                             <img src="https://ui-avatars.com/api/?name=CurrentUser&background=DB2777&color=fff" alt="User" />
                        </div>
                        <div className="flex-1 relative">
                            <input 
                                type="text" 
                                placeholder="Add a comment..." 
                                className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                         <button className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                             Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTracker;
