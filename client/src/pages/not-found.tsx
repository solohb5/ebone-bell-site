import { useEffect } from "react";
import { Link } from "wouter";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — Eboné F. Bell";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-secondary-foreground px-6 relative overflow-hidden">
      {/* Giant Background 404 */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vw] font-serif text-secondary-foreground/[0.03] pointer-events-none select-none leading-none">
        404
      </span>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-serif mb-6">
          Wrong turn<span className="text-accent">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-foreground/85 mb-12 font-light">
          This page doesn't exist. But the work of building belonging does.
        </p>
        <Link href="/">
          <a className="group inline-block bg-accent text-white px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:bg-white hover:text-secondary hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
            <span className="inline-flex items-center gap-3">
              Back to Start
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
