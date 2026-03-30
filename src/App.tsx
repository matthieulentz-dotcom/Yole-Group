/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  Cpu, 
  Search, 
  Zap, 
  Layers, 
  Globe, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Database,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";

const reports = [
  { id: "01", title: "Status of the Semiconductor Industry 2026", category: "Market", date: "MAR 2026", price: "$6,990" },
  { id: "02", title: "Power SiC: Technology & Market Trends", category: "Power Electronics", date: "FEB 2026", price: "$5,490" },
  { id: "03", title: "Advanced Packaging: 2.5D/3D Architectures", category: "Packaging", date: "FEB 2026", price: "$7,290" },
  { id: "04", title: "CIS Market Monitor: Q1 2026 Update", category: "Imaging", date: "JAN 2026", price: "$4,990" },
];

const icps = [
  {
    title: "Strategic Decision Makers",
    desc: "CEOs and VPs of Strategy requiring data-driven insights to guide multi-million dollar investments.",
    icon: <Globe className="w-6 h-6 text-[#3E8EDE]" />
  },
  {
    title: "R&D & Tech Leaders",
    desc: "CTOs and R&D Managers needing to understand technology roadmaps and competitive teardowns.",
    icon: <Cpu className="w-6 h-6 text-[#3E8EDE]" />
  },
  {
    title: "Investment Analysts",
    desc: "VC/PE professionals specializing in high-tech sectors seeking deep market intelligence.",
    icon: <BarChart3 className="w-6 h-6 text-[#3E8EDE]" />
  }
];

const YoleLogo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Concentric ring segments representation */}
      <div className="absolute inset-0 border-2 border-dashed border-[#3E8EDE]/40 rounded-full"></div>
      <div className="absolute inset-1 border-2 border-dashed border-[#3E8EDE]/60 rounded-full rotate-45"></div>
      <div className="absolute inset-2 border-2 border-[#3E8EDE] rounded-full"></div>
      <div className="w-2 h-2 bg-[#3E8EDE] rounded-full"></div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-2xl font-black tracking-tight text-white">YOLE</span>
      <span className="text-sm font-medium text-[#3E8EDE]">Group</span>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050A15] text-white selection:bg-[#3E8EDE] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050A15]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <YoleLogo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-[#3E8EDE] transition-colors">Intelligence</a>
            <a href="#" className="text-sm font-medium hover:text-[#3E8EDE] transition-colors">Teardowns</a>
            <a href="#" className="text-sm font-medium hover:text-[#3E8EDE] transition-colors">Consulting</a>
            <a href="#" className="text-sm font-medium hover:text-[#3E8EDE] transition-colors">Events</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
              <Search className="w-4 h-4" />
              Search
            </button>
            <button className="px-6 py-2 bg-[#3E8EDE] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all">
              Client Portal
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3E8EDE]/30 bg-[#3E8EDE]/10 text-[#3E8EDE] text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                Strategic Intelligence
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                TURNING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3E8EDE]">COMPLEXITY</span> <br />
                INTO CLARITY.
              </h1>
              <p className="text-xl text-white/60 max-w-lg mb-10 font-light leading-relaxed">
                Market research, technology analysis, and strategy consulting for the semiconductor, electronics, and photonics industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full flex items-center gap-2 hover:bg-[#3E8EDE] hover:text-white transition-all group">
                  Explore Reports
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/5 transition-all">
                  Custom Consulting
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="glass p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3E8EDE]/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                      <BarChart3 className="text-[#3E8EDE]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Market Monitor</div>
                      <div className="font-bold">Semiconductor Q1</div>
                    </div>
                  </div>
                  <div className="text-[#3E8EDE] font-mono text-sm">+12.4%</div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 60 + 20}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#3E8EDE] to-[#3E8EDE]/40"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Analysts</div>
                    <div className="font-mono text-lg">100+</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Reports</div>
                    <div className="font-mono text-lg">250/yr</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ICP Section */}
      <section className="py-24 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#3E8EDE] mb-4">Ideal Customer Profile</h2>
            <h3 className="text-4xl font-bold tracking-tight">Who We Empower</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {icps.map((icp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-all"
              >
                <div className="mb-6">{icp.icon}</div>
                <h4 className="text-xl font-bold mb-4">{icp.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm">
                  {icp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#3E8EDE] mb-4">Intelligence</h2>
              <h3 className="text-4xl font-bold tracking-tight">Latest Strategic Reports</h3>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#3E8EDE] transition-colors">
              View All Reports
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[40px_1.5fr_1fr_1fr_100px] p-6 bg-white/5 border-b border-white/10">
              <div className="col-header">ID</div>
              <div className="col-header">Report Title</div>
              <div className="col-header">Category</div>
              <div className="col-header">Date</div>
              <div className="col-header text-right">Action</div>
            </div>
            {reports.map((report) => (
              <div key={report.id} className="data-row grid grid-cols-[40px_1.5fr_1fr_1fr_100px] p-6 items-center group">
                <div className="data-value text-white/40 text-xs">{report.id}</div>
                <div className="font-semibold group-hover:text-[#3E8EDE] transition-colors">{report.title}</div>
                <div className="text-sm text-white/60">{report.category}</div>
                <div className="data-value text-xs text-white/40">{report.date}</div>
                <div className="text-right">
                  <button className="p-2 hover:bg-[#3E8EDE] hover:text-black rounded-full transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teardowns Section */}
      <section className="py-24 bg-[#3E8EDE] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6">Technical Excellence</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                BEYOND THE <br /> DATASHEET.
              </h3>
              <p className="text-xl font-medium mb-10 leading-relaxed opacity-80">
                Our teardown services provide deep structural, process, and cost analysis of the world's most advanced electronic components.
              </p>
              <button className="px-8 py-4 bg-white text-[#3E8EDE] font-bold uppercase text-xs tracking-widest rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-all group">
                Explore Teardowns
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-3xl border-2 border-white/20 flex items-center justify-center p-12">
                <Layers className="w-48 h-48 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border border-white/20 rounded-full border-dashed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background text */}
        <div className="absolute -bottom-10 -right-10 text-[20vw] font-black opacity-5 select-none pointer-events-none">
          TEARDOWN
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Years of Expertise", value: "30+", icon: <Award className="w-5 h-5" /> },
              { label: "Full-time Analysts", value: "100+", icon: <Users className="w-5 h-5" /> },
              { label: "Global Clients", value: "10k+", icon: <Globe className="w-5 h-5" /> },
              { label: "Data Points", value: "1M+", icon: <Database className="w-5 h-5" /> },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#3E8EDE] mb-4">
                  {stat.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">Authority</span>
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <YoleLogo />
              <p className="text-white/40 max-w-sm leading-relaxed mb-8 mt-8">
                The leading source of strategic intelligence for the semiconductor ecosystem. Helping you navigate technical complexity with data-driven clarity.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#3E8EDE] hover:border-[#3E8EDE] transition-all cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#3E8EDE] hover:border-[#3E8EDE] transition-all cursor-pointer">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold uppercase text-xs tracking-widest mb-8">Solutions</h5>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Teardowns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Monitors</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase text-xs tracking-widest mb-8">Company</h5>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Analysts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
            <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
              © 2026 Yole Group. All rights reserved. Strategic Intelligence for High-Tech.
            </div>
            <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
