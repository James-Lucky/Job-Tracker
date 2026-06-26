import { Bell, Search, MapPin, Briefcase, Bookmark, ChevronDown, SlidersHorizontal, Banknote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            Welcome back, <span className="text-[#F05542]">Sarah!</span>
          </h1>
          <p className="text-lg font-medium text-black/70">
            Ready to track your next big opportunity?
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="size-14 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all relative">
            <Bell className="size-6" />
            <span className="absolute top-3 right-3 size-3 bg-[#F05542] border-2 border-black rounded-full"></span>
          </button>
          <button className="size-14 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all overflow-hidden relative">
            {/* Placeholder avatar image */}
            <div className="absolute inset-0 bg-[#EAC9A7]"></div>
            <div className="absolute bottom-0 w-8 h-10 bg-black/20 rounded-t-full"></div>
            <div className="absolute top-2 w-6 h-6 bg-black/30 rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 w-full flex items-center gap-3 px-4 h-14 bg-[#F4EFE6] border-2 border-black rounded-md">
          <Search className="size-5 text-black/50" />
          <input 
            type="text" 
            placeholder="Search roles, companies..." 
            className="bg-transparent border-none outline-none w-full font-medium placeholder:text-black/50 text-black"
          />
        </div>
        
        <button className="w-full md:w-auto h-14 px-6 bg-white border-2 border-black rounded-md flex items-center justify-between gap-8 font-bold hover:bg-black/5">
          Location
          <ChevronDown className="size-5 text-black/50" />
        </button>

        <button className="w-full md:w-auto h-14 px-6 bg-white border-2 border-black rounded-md flex items-center justify-between gap-8 font-bold hover:bg-black/5">
          Experience
          <ChevronDown className="size-5 text-black/50" />
        </button>

        <button className="w-full md:w-auto h-14 px-8 bg-[#96C8FB] border-2 border-black rounded-md flex items-center justify-center gap-3 font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all">
          <SlidersHorizontal className="size-5" />
          Filter
        </button>
      </div>

      {/* Best for you Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b-2 border-black pb-4">
          <h2 className="text-3xl font-extrabold">Best for you</h2>
          <Link href="#" className="font-bold text-[#F05542] hover:underline flex items-center gap-1">
            View all <span className="text-xl leading-none">&rarr;</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1 */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl p-6 relative flex flex-col">
            <div className="absolute -top-4 right-6 bg-[#059669] text-white border-2 border-black px-3 py-1 font-bold text-sm rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Match 98%
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="size-14 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-md flex items-center justify-center text-2xl font-bold text-blue-600">
                G
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight mb-1">Product <br /> Designer</h3>
                <p className="font-medium text-black/60">TechFlow Inc.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-white">San Francisco, CA</span>
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-white">Full-time</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-black/80 mb-6">
              <Banknote className="size-5" /> $120k - $150k
            </div>

            <div className="mt-auto pt-6 border-t-2 border-black/10 flex gap-4">
              <button className="flex-1 py-3 bg-[#9B2C2C] text-white font-bold border-2 border-black rounded-md shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#822525] transition-colors">
                Apply Now
              </button>
              <button className="size-[52px] shrink-0 bg-white border-2 border-black rounded-md flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black/5">
                <Bookmark className="size-5" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl p-6 relative flex flex-col">
            
            <div className="flex items-start gap-4 mb-6">
              <div className="size-14 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-md flex items-center justify-center text-2xl font-bold overflow-hidden relative">
                <div className="absolute inset-0 bg-green-800"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight mb-1">Frontend Dev</h3>
                <p className="font-medium text-black/60">EcoSystems LLC</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-[#96C8FB]/50 text-blue-900">Remote</span>
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-white">Contract</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-black/80 mb-6">
              <Banknote className="size-5" /> $70 - $90 / hr
            </div>

            <div className="mt-auto pt-6 border-t-2 border-black/10 flex gap-4">
              <button className="flex-1 py-3 bg-[#9B2C2C] text-white font-bold border-2 border-black rounded-md shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#822525] transition-colors">
                Apply Now
              </button>
              <button className="size-[52px] shrink-0 bg-white border-2 border-black rounded-md flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black/5">
                <Bookmark className="size-5" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl p-6 relative flex flex-col">
            
            <div className="flex items-start gap-4 mb-6">
              <div className="size-14 bg-[#F4EFE6] border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-md flex items-center justify-center text-2xl font-bold">
                <div className="size-6 bg-red-900 rotate-45 rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight mb-1">UX Researcher</h3>
                <p className="font-medium text-black/60">Studio Brutal</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-white">New York, NY</span>
              <span className="px-3 py-1 text-sm font-bold border-2 border-black rounded-sm bg-white">Full-time</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-black/80 mb-6">
              <Banknote className="size-5" /> $110k - $130k
            </div>

            <div className="mt-auto pt-6 border-t-2 border-black/10 flex gap-4">
              <button className="w-full py-3 bg-[#F4EFE6] font-bold border-2 border-black rounded-md shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#EBE5D9] transition-colors">
                View Details
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
