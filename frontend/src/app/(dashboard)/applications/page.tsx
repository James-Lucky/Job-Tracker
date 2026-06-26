"use client";

import { useApplicationStore, ApplicationStatus } from "@/store/useApplicationStore";
import { Building2, MapPin, DollarSign, GripVertical } from "lucide-react";
import React from "react";

const COLUMNS: { id: ApplicationStatus; title: string; color: string }[] = [
  { id: "WISHLIST", title: "Wishlist", color: "bg-[#FFD1DC]" },
  { id: "APPLIED", title: "Applied", color: "bg-[#96C8FB]" },
  { id: "OA", title: "Online Assessment", color: "bg-[#FAD390]" },
  { id: "INTERVIEW", title: "Interview", color: "bg-[#65DFCD]" },
  { id: "OFFER", title: "Offer", color: "bg-[#059669]" },
  { id: "REJECTED", title: "Rejected", color: "bg-[#9B2C2C]" },
];

export default function ApplicationsPage() {
  const { applications, updateApplicationStatus } = useApplicationStore();

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("applicationId", id);
    // Optional: Add some visual feedback during drag
    const target = e.target as HTMLElement;
    target.style.opacity = "0.5";
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    target.style.opacity = "1";
  };

  const handleDrop = (e: React.DragEvent, status: ApplicationStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("applicationId");
    if (id) {
      updateApplicationStatus(id, status);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto flex flex-col gap-10 h-full">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Applications Board</h1>
          <p className="text-lg font-medium text-black/70">Drag and drop to update application status</p>
        </div>
        <button className="px-6 py-3 font-bold text-white bg-[#F05542] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
          + New Application
        </button>
      </header>

      <div className="flex gap-6 overflow-x-auto pb-8 min-h-[600px]">
        {COLUMNS.map((col) => {
          const colApps = applications.filter((app) => app.status === col.id);
          const isDarkText = col.id === "OFFER" || col.id === "REJECTED";
          
          return (
            <div
              key={col.id}
              className="min-w-[320px] max-w-[320px] flex flex-col gap-4"
              onDrop={(e) => handleDrop(e, col.id)}
              onDragOver={handleDragOver}
            >
              {/* Column Header */}
              <div className={`h-14 ${col.color} border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-sm flex items-center justify-between px-4`}>
                <h3 className={`font-extrabold text-lg ${isDarkText ? "text-white" : "text-black"}`}>{col.title}</h3>
                <div className={`size-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-sm ${isDarkText ? "bg-white text-black" : "bg-white text-black"}`}>
                  {colApps.length}
                </div>
              </div>

              {/* Column Body */}
              <div className="flex flex-col gap-4 flex-1 rounded-md p-2 bg-black/5 border-2 border-dashed border-black/20">
                {colApps.map((app) => (
                  <div
                    key={app.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, app.id)}
                    onDragEnd={handleDragEnd}
                    className="bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-4 cursor-grab active:cursor-grabbing hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all relative group"
                  >
                    <div className="absolute top-4 right-4 text-black/20 group-hover:text-black/40 transition-colors">
                      <GripVertical className="size-5" />
                    </div>
                    
                    <h4 className="font-extrabold text-xl pr-6 mb-1">{app.role}</h4>
                    <div className="flex items-center text-sm font-bold text-black/60 mb-4 gap-1">
                      <Building2 className="size-4" />
                      {app.company}
                    </div>
                    
                    {(app.location || app.package) && (
                      <div className="flex flex-wrap gap-2 mt-3 text-xs font-bold text-black border-t-2 border-black/10 pt-3">
                        {app.location && (
                          <span className="flex items-center gap-1 bg-[#F4EFE6] px-2 py-1 border-2 border-black rounded-sm">
                            <MapPin className="size-3" /> {app.location}
                          </span>
                        )}
                        {app.package && (
                          <span className="flex items-center gap-1 bg-[#65DFCD]/30 px-2 py-1 border-2 border-black rounded-sm">
                            <DollarSign className="size-3" /> {app.package}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                {colApps.length === 0 && (
                  <div className="h-24 flex items-center justify-center text-black/40 font-bold text-sm">
                    Drop cards here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
