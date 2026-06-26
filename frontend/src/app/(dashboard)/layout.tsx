"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Briefcase, Bookmark, CheckCircle, Target, 
  FileText, FolderOpen, BarChart, Calendar, Settings 
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Applications", url: "/dashboard/applications", icon: Briefcase },
  { title: "Saved Jobs", url: "/dashboard/saved", icon: Bookmark },
  { title: "Eligibility Tracker", url: "/dashboard/eligibility", icon: CheckCircle },
  { title: "Interview Tracker", url: "/dashboard/interviews", icon: Target },
  { title: "Resume Manager", url: "/dashboard/resumes", icon: FileText },
  { title: "Notes", url: "/dashboard/notes", icon: FolderOpen },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart },
  { title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
  { title: "Goals", url: "/dashboard/goals", icon: Target },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full bg-[#F4EFE6] text-black font-sans selection:bg-[#F05542] selection:text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r-2 border-black flex flex-col h-screen sticky top-0 shrink-0 z-20 bg-[#F4EFE6]">
        <div className="h-20 flex items-center px-6 border-b-2 border-black shrink-0">
          <div className="font-extrabold text-xl tracking-tight">
            Opp<span className="text-[#F05542]">Track</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 flex flex-col gap-2 font-bold text-sm overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.url || (item.url !== "/dashboard" && pathname.startsWith(item.url));
            return (
              <Link 
                key={item.title}
                href={item.url} 
                className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-all border-2 ${
                  isActive 
                    ? "bg-[#FFD1DC] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" 
                    : "border-transparent hover:bg-black/5"
                }`}
              >
                <item.icon className="size-5 shrink-0" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t-2 border-black shrink-0">
          <button className="w-full py-3 font-bold text-white bg-[#F05542] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
            Post Opportunity
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        
        <footer className="border-t-2 border-black py-6 px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
          <span className="font-extrabold text-base">OppTrack</span>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="#" className="hover:underline">About Us</Link>
            <Link href="#" className="hover:underline">Contact</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
          <span className="text-black/60">© 2024 OppTrack. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
