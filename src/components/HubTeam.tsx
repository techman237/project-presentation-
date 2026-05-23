import { motion } from 'motion/react';

export default function HubTeam() {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-xl font-bold text-xl mb-4 shadow-sm">
            T
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">TekMen Revolution</h2>
          <p className="text-sm font-medium text-lime-600 mb-6">Innovating for Safety</p>
          
          <div className="flex flex-wrap justify-center gap-3">
             <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 font-medium">
                [Founder Placeholder]
             </span>
             <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 font-medium">
                [Team Member Placeholder]
             </span>
             <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 font-medium">
                [Team Member Placeholder]
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
