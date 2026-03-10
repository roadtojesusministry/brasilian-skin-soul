"use client";

import { useState } from "react";
import { techScience } from "@/lib/techScience";

interface Props {
  techNames: string[];
  groupName?: string;
}

export default function TechInfoButton({ techNames, groupName }: Props) {
  const [open, setOpen] = useState(false);
  const items = techNames.map((name) => ({ name, info: techScience[name] })).filter((t) => t.info);
  if (items.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="The science behind this treatment"
        className="inline-flex items-center gap-1 text-xs border border-white/20 text-white/40 hover:text-gold hover:border-gold/50 px-2.5 py-1 rounded-full transition-colors flex-shrink-0"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-5m0-3.75h.008M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        </svg>
        The Science
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-forest/85 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-forest px-6 py-5 flex items-start justify-between gap-4 flex-shrink-0">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-1">The Science</p>
                <h3 className="font-serif text-xl text-white leading-snug">
                  {groupName ?? "Why This Works"}
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors mt-0.5 flex-shrink-0"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 divide-y divide-forest-100">
              {items.map(({ name, info }) => (
                <div key={name} className="px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-2">{name}</p>
                  <p className="font-serif text-base text-forest italic leading-snug mb-2">
                    &ldquo;{info.headline}&rdquo;
                  </p>
                  <p className="text-sm text-forest-500 leading-relaxed">{info.body}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-forest-100 bg-cream-100 flex items-start gap-2 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <p className="text-xs text-forest-300 leading-relaxed">
                {items.map((t) => t.info.source).filter((v, i, a) => a.indexOf(v) === i).join(" · ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
