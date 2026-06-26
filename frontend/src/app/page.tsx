import Link from "next/link";
import { Bell, User, Check, CheckSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-black font-sans selection:bg-[#F05542] selection:text-white">
      {/* Navigation */}
      <nav className="w-full h-20 border-b-2 border-black flex items-center justify-between px-6 lg:px-12 bg-[#F4EFE6] z-50 relative">
        <div className="flex items-center gap-8">
          <div className="font-extrabold text-xl tracking-tight">
            Opp<span className="text-[#F05542]">Track</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm">
            <Link href="#" className="hover:text-[#F05542]">Jobs</Link>
            <Link href="#" className="hover:text-[#F05542]">Internships</Link>
            <Link href="#" className="hover:text-[#F05542]">Hackathons</Link>
            <Link href="#" className="text-[#F05542] border-b-2 border-[#F05542] pb-1">My Tracker</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full">
            <Bell className="size-5" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full">
            <User className="size-5" />
          </button>
          <Link 
            href="/dashboard"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 font-bold text-white bg-[#F05542] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
          >
            Post Opportunity
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Master Your <br />
              <span className="text-[#F05542]">Job Search</span>
            </h1>
            <p className="text-lg font-medium text-black/80 max-w-md mb-8 leading-relaxed">
              Manage every application, interview, and offer in one place. Stop losing track of emails and start landing offers with our intuitive tracking dashboard.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link 
                href="/dashboard"
                className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-white bg-[#F05542] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
              >
                Start Tracking for Free
              </Link>
              <Link 
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-black bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
              >
                View Demo
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="size-8 rounded-full border-2 border-black bg-[#65DFCD] z-30 flex items-center justify-center text-[10px] font-bold">JD</div>
                <div className="size-8 rounded-full border-2 border-black bg-[#96C8FB] z-20 flex items-center justify-center text-[10px] font-bold">AL</div>
                <div className="size-8 rounded-full border-2 border-black bg-[#F05542] z-10 flex items-center justify-center text-[10px] font-bold text-white">MK</div>
              </div>
              <span className="text-sm font-bold">Trusted by 50,000+ candidates</span>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Background offset squares */}
            <div className="absolute -top-4 -right-4 size-24 bg-[#65DFCD] border-2 border-black z-0"></div>
            <div className="absolute -bottom-6 -left-6 size-24 bg-[#96C8FB] border-2 border-black z-0"></div>
            
            {/* Main Window */}
            <div className="relative z-10 bg-white border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col w-full aspect-[4/3] max-w-2xl mx-auto overflow-hidden">
              {/* Window Header */}
              <div className="h-10 border-b-2 border-black flex items-center px-4 bg-white">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full border-2 border-black bg-[#FFD1DC]"></div>
                  <div className="size-3 rounded-full border-2 border-black bg-[#FAD390]"></div>
                  <div className="size-3 rounded-full border-2 border-black bg-[#65DFCD]"></div>
                </div>
              </div>
              {/* Window Body Mockup */}
              <div className="flex-1 bg-[#F19C79] p-6 flex flex-col gap-4">
                {/* Mockup Rows */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-16 bg-white/90 border-2 border-black flex items-center px-4 justify-between shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-3">
                      <div className="size-8 bg-black/10 rounded-full border border-black"></div>
                      <div className="h-2 w-24 bg-black/20 rounded-full"></div>
                    </div>
                    <div className="h-2 w-16 bg-black/20 rounded-full hidden sm:block"></div>
                    <div className="h-2 w-20 bg-black/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-[#EBE5D9] border-y-2 border-black py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Everything You Need to Track</h2>
            <p className="text-lg font-medium text-black/80">
              Designed for clarity and speed. Our tools keep you focused on what matters: landing the job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="size-12 bg-[#FFD1DC] border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <span className="font-bold text-xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Visual Kanban Board</h3>
              <p className="font-medium text-black/80">Drag and drop applications through stages effortlessly. From 'Applied' to 'Offer', see your entire pipeline at a glance.</p>
            </div>
            
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="size-12 bg-[#96C8FB] border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <span className="font-bold text-xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Automated Reminders</h3>
              <p className="font-medium text-black/80">Never miss a follow-up or deadline. Set custom reminders for interviews, coding tests, and thank-you notes.</p>
            </div>

            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="size-12 bg-[#65DFCD] border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <span className="font-bold text-xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Search Analytics</h3>
              <p className="font-medium text-black/80">Gain insights into your application success rates, average response times, and identify bottlenecks in your process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#F4EFE6] border-b-2 border-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visual */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-[#EAC9A7] border-2 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] -rotate-3 p-8 flex flex-col gap-6 items-center justify-center">
               <div className="w-[90%] h-[40%] bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-2 flex flex-col">
                  <div className="h-6 border-b-2 border-black bg-zinc-800 flex items-center px-2">
                    <div className="size-2 rounded-full bg-white/50"></div>
                  </div>
                  <div className="p-4">
                    <div className="h-2 w-1/3 bg-black/20 mb-4 rounded-full"></div>
                    <div className="flex gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full bg-[#65DFCD] border border-black"></div>
                      <div className="flex-1">
                        <div className="h-2 w-1/2 bg-black/20 mb-1 rounded-full"></div>
                        <div className="h-2 w-1/4 bg-black/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
               </div>
               
               <div className="w-[95%] h-[35%] bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] -rotate-1 flex flex-col">
                  <div className="h-6 border-b-2 border-black bg-zinc-100 flex items-center px-2">
                    <div className="size-2 rounded-full bg-black/50"></div>
                  </div>
                  <div className="p-4">
                     <div className="h-2 w-1/4 bg-[#96C8FB] mb-2 rounded-full"></div>
                     <div className="h-2 w-full bg-black/10 mb-1 rounded-full"></div>
                     <div className="h-2 w-2/3 bg-black/10 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-[#65DFCD] border-2 border-black text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_0_rgba(0,0,0,1)] mb-6">
              Dashboard View
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Your Command Center</h2>
            <p className="text-lg font-medium text-black/80 mb-8">
              A dedicated workspace designed specifically for job seekers. Organize company notes, attach resumes, and track interview loops without the clutter of a generic spreadsheet.
            </p>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3">
                <CheckSquare className="text-[#F05542] size-5" />
                Customizable stages
              </li>
              <li className="flex items-center gap-3">
                <CheckSquare className="text-[#F05542] size-5" />
                Document storage (Resumes, Cover Letters)
              </li>
              <li className="flex items-center gap-3">
                <CheckSquare className="text-[#F05542] size-5" />
                Interview preparation notes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#EBE5D9] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg font-medium text-black/80">Start tracking for free, upgrade when you need more power.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-end">
          {/* Free Tier */}
          <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-extrabold mb-2">Free</h3>
            <p className="font-medium text-black/60 mb-6">Perfect for casual job seekers.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">$0</span>
              <span className="font-bold text-black/60">/mo</span>
            </div>
            <ul className="space-y-4 font-medium mb-10">
              <li className="flex items-center gap-3"><Check className="size-5" /> Up to 50 active applications</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Basic Kanban board</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Standard reminders</li>
            </ul>
            <button className="w-full py-4 font-bold border-2 border-black bg-white hover:bg-black/5 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Get Started Free
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-[#FFD1DC] border-2 border-black p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative translate-y-0 md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 text-xs font-bold uppercase border-b-2 border-l-2 border-black -translate-y-[2px] translate-x-[2px]">
              Most Popular
            </div>
            <h3 className="text-3xl font-extrabold mb-2">Pro</h3>
            <p className="font-medium text-black/80 mb-6">For the serious candidate.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">$9</span>
              <span className="font-bold text-black/60">/mo</span>
            </div>
            <ul className="space-y-4 font-bold mb-10">
              <li className="flex items-center gap-3"><Check className="size-5" /> Unlimited applications</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Advanced analytics</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Document storage (5GB)</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Priority support</li>
            </ul>
            <button className="w-full py-4 font-bold border-2 border-black bg-[#F05542] text-white hover:bg-[#d94a39] transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EBE5D9] border-t-2 border-black py-8 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-extrabold">OppTrack</span>
          <span className="text-sm font-medium text-black/60">© 2024 OppTrack. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:underline">About Us</Link>
          <Link href="#" className="hover:underline">Contact</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
