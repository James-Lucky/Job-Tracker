"use client";

import { useState } from "react";
import { CheckSquare, XSquare, Search, FileText, Briefcase } from "lucide-react";

export default function EligibilityPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{ skill: string; found: boolean }[] | null>(null);

  const mockAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults([
        { skill: "React.js", found: true },
        { skill: "TypeScript", found: true },
        { skill: "Next.js", found: true },
        { skill: "GraphQL", found: false },
        { skill: "Tailwind CSS", found: true },
        { skill: "PostgreSQL", found: false },
      ]);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1400px] mx-auto flex flex-col gap-10">
      <header>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Eligibility Tracker</h1>
        <p className="text-lg font-medium text-black/70">Compare your resume against job requirements to spot missing skills.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Side: Inputs */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 rounded-xl flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold flex items-center gap-3">
              <Briefcase className="size-6 text-[#F05542]" />
              Job Description
            </h2>
            <textarea 
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-40 bg-[#F4EFE6] border-2 border-black p-4 font-medium rounded-md resize-none outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 rounded-xl flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold flex items-center gap-3">
              <FileText className="size-6 text-[#96C8FB]" />
              Your Resume
            </h2>
            <textarea 
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume text here..."
              className="w-full h-40 bg-[#F4EFE6] border-2 border-black p-4 font-medium rounded-md resize-none outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button 
            onClick={mockAnalyze}
            disabled={isAnalyzing || (!jobDescription && !resumeText)}
            className="w-full py-4 bg-[#65DFCD] font-extrabold text-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="size-6" />
            {isAnalyzing ? "Analyzing Match..." : "Check Eligibility"}
          </button>
        </div>

        {/* Right Side: Results */}
        <div className="bg-[#FFD1DC] border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 rounded-xl flex flex-col">
          <h2 className="text-3xl font-extrabold mb-8 border-b-2 border-black pb-4">Match Results</h2>
          
          {results ? (
            <div className="flex-1 flex flex-col gap-6">
              
              <div className="flex items-center justify-between p-6 bg-white border-2 border-black rounded-xl">
                <span className="font-extrabold text-xl">Overall Match</span>
                <span className="text-4xl font-black text-[#F05542]">
                  {Math.round((results.filter(r => r.found).length / results.length) * 100)}%
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg mb-2">Skill Breakdown:</h3>
                {results.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white/50 border-2 border-black/20 p-3 rounded-md">
                    <span className="font-bold">{item.skill}</span>
                    {item.found ? (
                      <span className="flex items-center gap-2 text-emerald-700 font-bold">
                        <CheckSquare className="size-5" /> Found
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-700 font-bold">
                        <XSquare className="size-5" /> Missing
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-6">
                <div className="p-4 bg-white border-2 border-black rounded-lg text-sm font-bold">
                  💡 Tip: Consider adding <span className="text-[#F05542]">GraphQL</span> and <span className="text-[#F05542]">PostgreSQL</span> to your resume to increase your chances for this role.
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
              <div className="size-24 border-4 border-dashed border-black rounded-full flex items-center justify-center mb-6">
                <Search className="size-10" />
              </div>
              <p className="font-extrabold text-xl max-w-xs">
                Paste your details and hit Check Eligibility to see your score!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
