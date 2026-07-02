"use client";

import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Target, TrendingUp, Briefcase, CheckCircle } from "lucide-react";

const funnelData = [
  { stage: 'Applied', count: 124 },
  { stage: 'Screen', count: 45 },
  { stage: 'Interview', count: 12 },
  { stage: 'Offer', count: 2 },
];

const timelineData = [
  { month: 'Jan', applications: 15 },
  { month: 'Feb', applications: 35 },
  { month: 'Mar', applications: 42 },
  { month: 'Apr', applications: 28 },
  { month: 'May', applications: 65 },
  { month: 'Jun', applications: 40 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 lg:p-12 max-w-[1400px] mx-auto flex flex-col gap-10">
      <header>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Search Analytics</h1>
        <p className="text-lg font-medium text-black/70">Visualize your job hunt progress and optimize your pipeline.</p>
      </header>

      {/* Top Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-start justify-between">
          <div>
            <p className="font-bold text-black/60 uppercase text-xs mb-1">Total Sent</p>
            <h3 className="text-5xl font-black">227</h3>
          </div>
          <div className="size-12 bg-[#96C8FB] border-2 border-black flex items-center justify-center rounded-sm">
            <Briefcase className="size-6" />
          </div>
        </div>
        
        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-start justify-between">
          <div>
            <p className="font-bold text-black/60 uppercase text-xs mb-1">Interview Rate</p>
            <h3 className="text-5xl font-black">18<span className="text-2xl">%</span></h3>
          </div>
          <div className="size-12 bg-[#FAD390] border-2 border-black flex items-center justify-center rounded-sm">
            <Target className="size-6" />
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-start justify-between">
          <div>
            <p className="font-bold text-black/60 uppercase text-xs mb-1">Total Offers</p>
            <h3 className="text-5xl font-black">2</h3>
          </div>
          <div className="size-12 bg-[#65DFCD] border-2 border-black flex items-center justify-center rounded-sm">
            <CheckCircle className="size-6" />
          </div>
        </div>

        <div className="bg-[#FFD1DC] border-2 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-start justify-between relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-bold text-black/60 uppercase text-xs mb-1">Weekly Growth</p>
            <h3 className="text-5xl font-black">+24<span className="text-2xl">%</span></h3>
          </div>
          <div className="absolute -bottom-4 -right-4 text-black/10">
            <TrendingUp className="size-32" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        {/* Funnel Chart */}
        <div className="bg-white border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6">
          <h3 className="text-2xl font-extrabold mb-8">Application Funnel</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBar data={funnelData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#000" opacity={0.1} />
                <XAxis type="number" stroke="#000" tick={{fontWeight: 'bold'}} />
                <YAxis dataKey="stage" type="category" stroke="#000" tick={{fontWeight: 'bold'}} width={80} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} contentStyle={{border: '2px solid black', borderRadius: '0', boxShadow: '4px 4px 0 0 rgba(0,0,0,1)'}} />
                <Bar dataKey="count" fill="#F05542" stroke="#000" strokeWidth={2} radius={[0, 4, 4, 0]} />
              </RechartsBar>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timeline Chart */}
        <div className="bg-[#F4EFE6] border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6">
          <h3 className="text-2xl font-extrabold mb-8">Activity Over Time</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#96C8FB" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#96C8FB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#000" opacity={0.1} />
                <XAxis dataKey="month" stroke="#000" tick={{fontWeight: 'bold'}} />
                <YAxis stroke="#000" tick={{fontWeight: 'bold'}} />
                <Tooltip contentStyle={{border: '2px solid black', borderRadius: '0', boxShadow: '4px 4px 0 0 rgba(0,0,0,1)'}} />
                <Area type="monotone" dataKey="applications" stroke="#000" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
