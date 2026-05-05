import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/roboxData";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            FAQ
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            Clear answers for a strong product presentation.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Use this section to make the project feel complete, polished, and easy for the RoboX team to understand quickly.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="flex w-full items-center justify-between gap-5 p-6 text-left"
              >
                <span className="text-lg font-black text-white">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-cyan-300 transition ${open === idx ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-6 pb-6 leading-8 text-slate-300">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}