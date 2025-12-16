import React from 'react';
import { Icons } from './components/Icons';
import { Card, CardHeader } from './components/Card';
import { CommitGraph } from './components/CommitGraph';
import { Metric, Task, Assessment, Project } from './types';

// --- MOCK DATA ---
const metrics: Metric[] = [
  { label: 'ATTITUDE', value: 90, max: 100, percentage: 20, icon: 'attitude' },
  { label: 'EFFORT', value: 95, max: 100, percentage: 30, icon: 'effort' },
  { label: 'ACADEMICS', value: 88, max: 100, percentage: 20, icon: 'academics' },
  { label: 'SKILLS', value: 94, max: 100, percentage: 30, icon: 'skills' },
];

const checklist: Task[] = [
  { id: '42', type: 'ISSUE', description: 'Integrity on assignments.', status: 'Resolved' },
  { id: '108', type: 'TASK', description: 'Morning Adhkar participation.', status: 'Completed' },
  { id: '21', type: 'BUG', description: 'Group prayer leadership initiative.', status: 'Open' },
];

const assessments: Assessment[] = [
  {
    title: 'MID-SEMESTER EVALUATION',
    tag: 'UTS',
    color: 'blue',
    exams: [
      { label: 'WRITTEN EXAM', score: 85, max: 100 },
      { label: 'PRACTICAL / INTERVIEW', score: 90, max: 100 }
    ]
  },
  {
    title: 'FINAL SEMESTER EVALUATION',
    tag: 'UAS',
    color: 'yellow',
    exams: [
      { label: 'WRITTEN EXAM', score: 88, max: 100 },
      { label: 'PRACTICAL / INTERVIEW', score: 94, max: 100 }
    ]
  }
];

const projects: Project[] = [
  {
    title: 'Student Inventory System',
    description: 'Full-stack web app: React frontend, Node.js Express backend, MongoDB. Implemented QR scanning, role-based auth, PDF reporting.',
    tags: ['React', 'Node.js', 'TailwindCSS'],
    type: 'FINAL PROJECT',
    score: 98,
    imageIcon: 'terminal'
  },
  {
    title: 'PORTFOLIO V1.0',
    description: 'HTML, CSS, JS',
    tags: [],
    type: 'PORTFOLIO',
    imageIcon: 'person'
  },
  {
    title: 'PRAYER TIME APP',
    description: 'FLUTTER, API',
    tags: [],
    type: 'PORTFOLIO',
    imageIcon: 'mobile'
  },
  {
    title: 'PYTHON WEB SCRAPER',
    description: 'PYTHON, BEAUTIFULSOUP',
    tags: [],
    type: 'PORTFOLIO',
    imageIcon: 'data'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-vs-bg font-mono text-vs-fg selection:bg-vs-gray/30">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-vs-border bg-vs-bg/95 backdrop-blur-sm group">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-vs-border/50 p-1.5 rounded-sm group-hover:text-vs-green transition-colors text-vs-gray">
              <Icons.Terminal size={18} className="text-current" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white leading-none">DevLog: HSI IT Program</h1>
              <p className="text-[10px] text-vs-gray mt-0.5">SMAIT HSI - Developer Report</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-vs-gray hover:text-white transition-colors">
              <Icons.Sun size={18} />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-vs-card hover:bg-vs-border text-vs-gray hover:text-white border border-vs-border font-bold px-3 py-1.5 rounded-sm text-xs transition-colors">
              <Icons.Download size={14} />
              <span>Download Log</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-vs-border/50 group">
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-vs-card border border-vs-border flex items-center justify-center overflow-hidden transition-colors group-hover:border-vs-green">
               <Icons.User size={40} className="text-vs-gray group-hover:text-vs-green transition-colors" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-vs-card border border-vs-border text-vs-gray text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg group-hover:text-vs-green group-hover:border-vs-green transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-vs-gray group-hover:bg-vs-green transition-colors"></div>
              Active
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-tight group-hover:text-vs-green transition-colors">AHMAD FULAN</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-vs-gray">
              <span className="group-hover:text-vs-blue transition-colors">@ahmad-fulan-hsi</span>
              <span className="hidden sm:inline text-vs-border">•</span>
              <span>CLASS 10 RPL - SOFTWARE ENGINEERING</span>
            </div>
            <div className="flex items-center gap-4 text-xs pt-1">
              <div className="flex items-center gap-1.5 text-vs-gray">
                <Icons.Calendar size={14} />
                <span>SEMESTER 1 / 2024</span>
              </div>
              <div className="flex items-center gap-1.5 text-vs-gray">
                <Icons.TrendingUp size={14} />
                <span className="group-hover:text-white transition-colors">GRADE: <span className="text-vs-gray font-bold group-hover:text-vs-green transition-colors">A (92.5)</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. PERFORMANCE SUMMARY */}
        <Card>
          <CardHeader icon={<Icons.Activity size={20} />} title="Performance Summary Report" date="01 JAN 2024" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, idx) => {
              // Determine hover color class based on metric type
              const hoverColorClass = 
                m.icon === 'attitude' ? 'group-hover:text-vs-yellow' : 
                m.icon === 'effort' ? 'group-hover:text-vs-green' : 
                m.icon === 'academics' ? 'group-hover:text-vs-blue' : 
                'group-hover:text-vs-purple';

              const hoverBorderClass = 
                m.icon === 'attitude' ? 'hover:border-vs-yellow/50' : 
                m.icon === 'effort' ? 'hover:border-vs-green/50' : 
                m.icon === 'academics' ? 'hover:border-vs-blue/50' : 
                'hover:border-vs-purple/50';

              return (
                <div key={idx} className={`group bg-vs-bg border border-vs-border p-4 rounded-sm ${hoverBorderClass} transition-colors duration-300`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className={`text-vs-gray ${hoverColorClass} transition-colors duration-300`}>
                      {m.icon === 'attitude' && <Icons.User size={18} />}
                      {m.icon === 'effort' && <Icons.Zap size={18} />}
                      {m.icon === 'academics' && <Icons.BookOpen size={18} />}
                      {m.icon === 'skills' && <Icons.Code size={18} />}
                    </div>
                    <span className={`text-[10px] text-vs-gray ${hoverColorClass} transition-colors duration-300`}>{m.percentage}%</span>
                  </div>
                  <h3 className={`text-xs font-bold text-vs-gray mb-1 ${hoverColorClass} transition-colors duration-300`}>{m.label}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-vs-fg group-hover:text-white transition-colors duration-300">{m.value}</span>
                    <span className="text-xs text-vs-gray">/{m.max}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 2. REFLECT & FEEDBACK */}
        <Card>
          <CardHeader icon={<Icons.User size={20} />} title="Reflect: Self-Assessment & Mentor Feedback" date="20 DEC 2023" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Code Editor View */}
            <div className="group lg:col-span-2 flex flex-col h-full bg-[#1e1e1e] border border-vs-border rounded-sm overflow-hidden transition-colors hover:border-vs-purple/50">
               <div className="px-3 py-1 bg-vs-card border-b border-vs-border flex items-center justify-between">
                 <span className="text-xs text-vs-gray group-hover:text-vs-purple font-bold uppercase tracking-wider transition-colors">feat: Self-Reflection & Growth Mindset</span>
               </div>
               <div className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
                 <div className="text-vs-gray/60 italic mb-1 group-hover:text-vs-comment transition-colors"># Learning agility in Python loops</div>
                 <div>
                   <span className="text-vs-gray group-hover:text-vs-purple transition-colors">def</span> <span className="text-vs-gray group-hover:text-vs-yellow transition-colors">self_reflection</span>():
                 </div>
                 <div className="pl-4">
                   <span className="text-vs-gray group-hover:text-vs-yellow transition-colors">print</span>(<span className="text-vs-gray group-hover:text-vs-orange transition-colors">"Initial struggle with loops, then daily practice."</span>)
                 </div>
                 <div className="pl-4">
                   <span className="text-vs-gray group-hover:text-vs-yellow transition-colors">print</span>(<span className="text-vs-gray group-hover:text-vs-orange transition-colors">"Consistency &gt; intensity. Applied this concept daily."</span>)
                 </div>
                 <div className="pl-4">
                   <span className="text-vs-gray group-hover:text-vs-yellow transition-colors">print</span>(<span className="text-vs-gray group-hover:text-vs-orange transition-colors">"Identified areas for improvement: time_management.py"</span>)
                 </div>
                 <div className="text-vs-gray/60 italic mt-2 group-hover:text-vs-comment transition-colors"># Next sprint focus</div>
                 <div><span className="text-vs-gray group-hover:text-vs-yellow transition-colors">self_reflection</span>()</div>
                 <div className="text-vs-gray/60 italic group-hover:text-vs-comment transition-colors"># Expected output: "Consistency &gt; intensity. Improved time management."</div>
               </div>
               <div className="mt-auto p-3 border-t border-vs-border bg-vs-bg/50">
                 <a href="#" className="inline-flex items-center gap-2 text-xs text-vs-gray group-hover:text-vs-blue hover:underline transition-colors">
                   <span>View full journal.md</span>
                   <Icons.ExternalLink size={10} />
                 </a>
               </div>
            </div>

            {/* Mentor Checklist */}
            <div className="group bg-vs-bg border border-vs-border p-4 rounded-sm flex flex-col hover:border-vs-green/50 transition-colors">
              <h3 className="text-[10px] font-bold text-vs-gray uppercase tracking-wider mb-4 group-hover:text-vs-green transition-colors">Mentor Review: Behavior Log</h3>
              <ul className="space-y-4 flex-1">
                {checklist.map((item) => (
                  <li key={item.id} className="flex gap-3 items-start">
                    <div className="mt-0.5 text-vs-gray group-hover:text-vs-green transition-colors">
                      {item.status === 'Open' ? (
                        <Icons.Alert size={16} className="group-hover:text-vs-yellow transition-colors" />
                      ) : (
                        <Icons.CheckCircle size={16} />
                      )}
                    </div>
                    <div className="text-xs leading-relaxed">
                       <span className="font-bold text-vs-gray group-hover:text-white uppercase transition-colors">{item.type} #{item.id}: </span>
                       <span className="text-vs-gray group-hover:text-vs-fg transition-colors">{item.description}</span>
                       <div className={`mt-1 font-bold text-vs-gray transition-colors ${
                         item.status === 'Resolved' || item.status === 'Completed' ? 'group-hover:text-vs-green' : 'group-hover:text-vs-yellow'
                       }`}>{item.status}.</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-4 border-t border-vs-border flex items-center justify-between">
                <span className="text-[10px] text-vs-gray">OVERALL RATING:</span>
                <div className="flex text-vs-gray group-hover:text-vs-yellow gap-0.5 transition-colors">
                  {[1,2,3,4].map(i => <span key={i}>★</span>)}
                  <span className="text-vs-border group-hover:text-vs-yellow/30">★</span>
                </div>
              </div>
            </div>

          </div>
        </Card>

        {/* 3. ACTIVITY LOG */}
        <Card>
          <CardHeader icon={<Icons.Clock size={20} />} title="Commit: Performance & Activity Log" date="15 DEC 2023" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Session Stats */}
            <div className="group bg-vs-bg border border-vs-border p-5 rounded-sm hover:border-vs-green/50 transition-colors">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-vs-gray group-hover:text-white flex items-center gap-2 text-sm transition-colors">
                  <Icons.Clock size={16} className="text-vs-gray group-hover:text-vs-green transition-colors" />
                  SESSION CHECK-INS
                </h3>
                <span className="bg-vs-card border border-vs-border text-vs-gray text-[10px] px-2 py-0.5 rounded font-bold group-hover:bg-vs-green/10 group-hover:text-vs-green group-hover:border-vs-green/20 transition-all">98% PRESENT</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-vs-card p-3 rounded-sm border border-vs-border">
                    <p className="text-[10px] text-vs-gray mb-1">TOTAL SESSIONS</p>
                    <p className="text-xl font-bold text-vs-fg group-hover:text-white transition-colors">120</p>
                 </div>
                 <div className="bg-vs-card p-3 rounded-sm border border-vs-border">
                    <p className="text-[10px] text-vs-gray mb-1">SUBMISSIONS ON-TIME</p>
                    <p className="text-xl font-bold text-vs-fg group-hover:text-white transition-colors">100%</p>
                 </div>
              </div>
            </div>

            {/* Commit Graph */}
            <div className="group bg-black/20 border border-vs-border p-5 rounded-sm hover:border-vs-green/50 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-vs-gray group-hover:text-white flex items-center gap-2 text-sm transition-colors">
                  <Icons.GitCommit size={16} className="text-vs-gray group-hover:text-white transition-colors" />
                  CODE CONTRIBUTION
                </h3>
                <span className="text-[10px] text-vs-gray">LAST 30 DAYS</span>
              </div>
              
              <CommitGraph />

              <div className="flex justify-between mt-4 pt-4 border-t border-vs-border/50 text-xs text-vs-gray">
                <div className="transition-colors">TOTAL COMMITS: <span className="text-vs-fg group-hover:text-white font-bold transition-colors">482</span></div>
                <div className="transition-colors">CODE QUALITY: <span className="text-vs-fg group-hover:text-vs-green font-bold transition-colors">A+</span></div>
              </div>
            </div>

          </div>
        </Card>

        {/* 4. ACADEMIC ASSESSMENT */}
        <Card>
          <CardHeader icon={<Icons.FileText size={20} />} title="Review: Academic Assessment Results" date="10 DEC 2023" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessments.map((a, i) => {
              const activeColor = a.color === 'blue' ? 'group-hover:bg-vs-blue' : 'group-hover:bg-vs-yellow';
              const activeText = a.color === 'blue' ? 'group-hover:text-vs-blue' : 'group-hover:text-vs-yellow';
              const activeBorder = a.color === 'blue' ? 'hover:border-vs-blue/50' : 'hover:border-vs-yellow/50';

              return (
              <div key={i} className={`group bg-vs-bg border border-vs-border p-5 rounded-sm relative overflow-hidden transition-colors ${activeBorder}`}>
                <div className={`absolute top-0 left-0 w-1 h-full bg-vs-card ${activeColor} transition-colors duration-300`}></div>
                
                <div className="flex justify-between items-center mb-6 pl-2">
                   <h3 className="font-bold text-vs-fg group-hover:text-white transition-colors">{a.title}</h3>
                   <span className="text-[10px] px-2 py-0.5 rounded bg-vs-border/50 text-vs-gray">{a.tag}</span>
                </div>

                <div className="space-y-5 pl-2">
                   {a.exams.map((exam, idx) => (
                     <div key={idx}>
                       <div className="flex justify-between text-xs mb-1.5">
                         <span className="text-vs-gray font-medium">{exam.label}</span>
                         <span className={`text-vs-fg group-hover:text-white font-bold transition-colors`}>{exam.score}/{exam.max}</span>
                       </div>
                       <div className="h-1.5 w-full bg-vs-border rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-vs-gray ${activeColor} transition-colors duration-300`} 
                            style={{ width: `${(exam.score / exam.max) * 100}%` }}
                          ></div>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            )})}
          </div>
        </Card>

        {/* 5. PROJECTS PORTFOLIO */}
        <Card>
           <CardHeader icon={<Icons.Code size={20} />} title="Feature: Project Portfolio Contributions" date="05 DEC 2023" />
           
           {/* Featured Project */}
           <div className="group border border-vs-border bg-vs-bg rounded-sm overflow-hidden mb-6 cursor-pointer hover:border-vs-green/60 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2">
                 {/* Preview Area */}
                 <div className="bg-[#0d1117] relative h-48 md:h-auto border-b md:border-b-0 md:border-r border-vs-border flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <Icons.Terminal size={64} className="text-vs-border group-hover:text-vs-green/40 transition-colors duration-500 relative z-10" />
                 </div>
                 
                 {/* Details Area */}
                 <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                       <span className="px-1.5 py-0.5 rounded text-[10px] uppercase bg-vs-card text-vs-gray border border-vs-border group-hover:bg-vs-green/10 group-hover:text-vs-green group-hover:border-vs-green/20 font-bold transition-all">
                         {projects[0].type}
                       </span>
                       <span className="px-1.5 py-0.5 rounded text-[10px] uppercase bg-vs-border text-vs-gray font-bold">
                         SCORE: {projects[0].score}
                       </span>
                    </div>
                    <h3 className="text-xl font-bold text-vs-fg group-hover:text-vs-green transition-colors">{projects[0].title}</h3>
                    <p className="text-sm text-vs-gray mb-4 leading-relaxed">
                      {projects[0].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[0].tags.map(t => (
                        <span key={t} className="text-[10px] text-vs-gray bg-vs-border/40 px-2 py-1 rounded border border-vs-border">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                       <button className="flex items-center gap-1.5 px-3 py-1.5 bg-vs-border hover:bg-vs-border/80 text-vs-fg hover:text-white text-xs font-bold rounded-sm transition-colors">
                         <Icons.Eye size={14} /> DEMO
                       </button>
                       <button className="flex items-center gap-1.5 px-3 py-1.5 text-vs-gray hover:text-white text-xs font-bold rounded-sm transition-colors">
                         <Icons.Code size={14} /> CODE
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Small Projects Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.slice(1).map((p, i) => (
                <div key={i} className="group bg-vs-bg border border-vs-border p-4 rounded-sm hover:-translate-y-1 transition-all cursor-pointer hover:border-vs-blue/50">
                   <div className="h-24 bg-[#0d1117] rounded-sm mb-3 border border-vs-border/50 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:200%_0,0_0] duration-[1500ms]"></div>
                     {p.imageIcon === 'person' && <Icons.User size={32} className="text-vs-gray/40 group-hover:text-vs-blue transition-colors" />}
                     {p.imageIcon === 'mobile' && <Icons.Smartphone size={32} className="text-vs-gray/40 group-hover:text-vs-blue transition-colors" />}
                     {p.imageIcon === 'data' && <Icons.Database size={32} className="text-vs-gray/40 group-hover:text-vs-blue transition-colors" />}
                   </div>
                   <h4 className="text-sm font-bold text-vs-fg group-hover:text-vs-blue transition-colors">{p.title}</h4>
                   <p className="text-[10px] text-vs-gray mt-1 uppercase">{p.description}</p>
                </div>
              ))}
           </div>
        </Card>
        
        {/* 6. ISSUE LOG (Positive & Negative) */}
        <Card>
          <CardHeader icon={<Icons.FileText size={20} />} title="Issue Log: Mentor Feedback" date="01 DEC 2023" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="group bg-vs-bg border border-vs-border border-t-2 border-t-vs-border hover:border-t-vs-green p-4 rounded-sm transition-colors">
                <h3 className="flex items-center gap-2 text-sm font-bold text-vs-fg group-hover:text-white mb-3 transition-colors">
                  <Icons.CheckCircle size={16} className="text-vs-gray group-hover:text-vs-green transition-colors" />
                  POSITIVE ATTRIBUTES
                </h3>
                <ul className="space-y-2">
                  {['Excellent problem-solving in algorithm challenges.', 'Consistent documentation in code repositories.', 'Strong understanding of database normalization.'].map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-vs-fg leading-relaxed">
                      <span className="w-1 h-1 bg-vs-gray group-hover:bg-vs-green rounded-full mt-1.5 shrink-0 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="group bg-vs-bg border border-vs-border border-t-2 border-t-vs-border hover:border-t-vs-yellow p-4 rounded-sm transition-colors">
                <h3 className="flex items-center gap-2 text-sm font-bold text-vs-fg group-hover:text-white mb-3 transition-colors">
                  <Icons.Alert size={16} className="text-vs-gray group-hover:text-vs-yellow transition-colors" />
                  AREAS FOR DEVELOPMENT
                </h3>
                <ul className="space-y-2">
                  {['Improve public speaking for presentations.', 'Refine UI/UX design: focus on contrast ratios.'].map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-vs-fg leading-relaxed">
                      <span className="w-1 h-1 bg-vs-gray group-hover:bg-vs-yellow rounded-full mt-1.5 shrink-0 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </Card>

        {/* 7. CERTIFICATE */}
        <div className="group relative p-8 border-2 border-vs-border bg-vs-card rounded-sm text-center overflow-hidden transition-colors hover:border-vs-green/50">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-vs-border group-hover:border-vs-green/50 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-vs-border group-hover:border-vs-green/50 transition-colors"></div>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-vs-bg border border-vs-border flex items-center justify-center transition-colors group-hover:border-vs-green">
              <Icons.Award size={32} className="text-vs-gray group-hover:text-vs-green transition-colors" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-vs-gray group-hover:text-vs-green mb-1 uppercase tracking-wider transition-colors">Milestone: Program Completion</h2>
          <p className="text-[10px] text-vs-gray uppercase tracking-widest mb-6">Achieved By</p>

          <h3 className="text-3xl font-bold text-white tracking-widest mb-6">AHMAD FULAN</h3>

          <p className="max-w-xl mx-auto text-sm text-vs-gray leading-loose mb-10">
            Successfully completed the <strong className="text-vs-fg group-hover:text-white transition-colors">COMPUTER SCIENCE FOUNDATION</strong> curriculum for 
            Semester 1, Year 2024 at HSI Boarding School with a final grade of <strong className="text-vs-fg group-hover:text-white transition-colors">A (EXCELLENT)</strong>.
          </p>

          <div className="flex justify-center gap-16 border-t border-vs-border/50 pt-8 max-w-md mx-auto">
             <div>
                <p className="font-serif italic text-vs-gray mb-1">Abdullah</p>
                <p className="text-[10px] font-bold text-vs-gray uppercase tracking-wider">Head of IT Dept</p>
             </div>
             <div>
                <p className="font-serif italic text-vs-gray mb-1">Umar Al-Faruq</p>
                <p className="text-[10px] font-bold text-vs-gray uppercase tracking-wider">Principal</p>
             </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-vs-border bg-vs-bg py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-vs-gray">
          <div className="flex items-center gap-2">
            <Icons.User size={14} />
            <span>© 2024 HSI BOARDING SCHOOL</span>
          </div>
          <div className="flex gap-6 font-bold">
            <a href="#" className="hover:text-white transition-colors">GITHUB</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;