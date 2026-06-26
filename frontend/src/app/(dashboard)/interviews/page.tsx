"use client";

import { useInterviewStore } from "@/store/useInterviewStore";
import { Calendar, Clock, Video, Building2, User, Check, X } from "lucide-react";
import React from "react";

export default function InterviewsPage() {
  const { interviews, updateInterviewStatus } = useInterviewStore();

  const upcoming = interviews.filter((i) => i.status === "UPCOMING").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = interviews.filter((i) => i.status !== "UPCOMING");

  return (
    <div className="p-8 lg:p-12 max-w-[1200px] mx-auto flex flex-col gap-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Interview Tracker</h1>
          <p className="text-lg font-medium text-black/70">Never miss a meeting. Ace your interviews.</p>
        </div>
        <button className="px-6 py-3 font-bold text-black bg-[#FAD390] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
          + Log Interview
        </button>
      </header>

      <section>
        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
          <span className="size-8 bg-[#65DFCD] border-2 border-black flex items-center justify-center rounded-sm">🚀</span>
          Upcoming Interviews
        </h2>
        
        {upcoming.length === 0 ? (
          <div className="p-8 bg-white border-2 border-black rounded-xl border-dashed text-center font-bold text-black/50">
            No upcoming interviews. Keep applying!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {upcoming.map((interview) => (
              <div key={interview.id} className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 bg-[#FFD1DC] border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-md flex items-center justify-center font-bold text-xl">
                      {interview.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl">{interview.company}</h3>
                      <p className="text-sm font-bold text-black/60">{interview.role}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-sm border-2 border-black">
                    {interview.round}
                  </span>
                </div>

                <div className="flex flex-col gap-3 py-4 border-y-2 border-black/10 my-4">
                  <div className="flex items-center gap-3 font-bold">
                    <Calendar className="size-5 text-[#F05542]" />
                    {interview.date}
                  </div>
                  <div className="flex items-center gap-3 font-bold">
                    <Clock className="size-5 text-[#F05542]" />
                    {interview.time}
                  </div>
                  {interview.link && (
                    <a href={interview.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-bold text-blue-600 hover:underline">
                      <Video className="size-5" />
                      Join Meeting
                    </a>
                  )}
                </div>

                <div className="mt-auto flex gap-4">
                  <button 
                    onClick={() => updateInterviewStatus(interview.id, "COMPLETED")}
                    className="flex-1 py-2 bg-[#65DFCD] border-2 border-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all flex justify-center items-center gap-2"
                  >
                    <Check className="size-4" /> Done
                  </button>
                  <button 
                    onClick={() => updateInterviewStatus(interview.id, "CANCELLED")}
                    className="py-2 px-4 bg-white border-2 border-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black/5 hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="pt-8">
        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3 text-black/50">
          <span className="size-8 bg-black/10 border-2 border-black/20 flex items-center justify-center rounded-sm">📁</span>
          Past Interviews
        </h2>
        
        <div className="flex flex-col gap-4">
          {past.map((interview) => (
            <div key={interview.id} className="bg-white/50 border-2 border-black/20 rounded-xl p-4 flex items-center justify-between opacity-80">
              <div className="flex items-center gap-6">
                <div className="size-10 bg-black/5 border-2 border-black/20 rounded-md flex items-center justify-center font-bold text-black/40">
                  {interview.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-black/80">{interview.company}</h3>
                  <p className="text-sm font-bold text-black/50">{interview.role} • {interview.date}</p>
                </div>
              </div>
              <div>
                {interview.status === "COMPLETED" ? (
                  <span className="px-3 py-1 bg-[#65DFCD]/30 text-emerald-800 border-2 border-black/20 font-bold text-xs rounded-sm">Completed</span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 text-red-800 border-2 border-black/20 font-bold text-xs rounded-sm">Cancelled</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
