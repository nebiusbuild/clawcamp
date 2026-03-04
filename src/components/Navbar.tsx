"use client";

import Link from "next/link";
import { useState } from "react";

const REGISTER_URL = "https://cerebralvalley.ai/e/nebius-build-sf";

function LobsterLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="32" cy="36" rx="10" ry="14" fill="#BAFF00" />
      {/* Head */}
      <circle cx="32" cy="20" r="8" fill="#BAFF00" />
      {/* Eyes */}
      <circle cx="28.5" cy="18" r="1.5" fill="#0A1628" />
      <circle cx="35.5" cy="18" r="1.5" fill="#0A1628" />
      {/* Left claw */}
      <path d="M22 30 L12 24 L8 28 L14 30 L12 34 L8 30 L4 34 L14 36 L22 34Z" fill="#BAFF00" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Right claw */}
      <path d="M42 30 L52 24 L56 28 L50 30 L52 34 L56 30 L60 34 L50 36 L42 34Z" fill="#BAFF00" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Antennae */}
      <path d="M28 13 Q24 4 18 2" stroke="#BAFF00" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36 13 Q40 4 46 2" stroke="#BAFF00" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Tail segments */}
      <path d="M26 48 L32 54 L38 48" stroke="#BAFF00" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 52 L32 60 L40 52" stroke="#BAFF00" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <line x1="26" y1="38" x2="20" y2="44" stroke="#BAFF00" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="42" x2="20" y2="48" stroke="#BAFF00" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="38" x2="44" y2="44" stroke="#BAFF00" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="42" x2="44" y2="48" stroke="#BAFF00" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-nebius-border bg-nebius-dark/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LobsterLogo className="w-9 h-9" />
          <span className="text-lg font-semibold text-white">
            Claw<span className="text-nebius-lime"> Camp</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#workshops" className="text-sm text-nebius-text-muted hover:text-white transition-colors">
            Workshops
          </Link>
          <a
            href="https://docs.tokenfactory.nebius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href="https://tokenfactory.nebius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            Token Factory
          </a>
          <a
            href="https://nebius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-nebius-text-muted hover:text-white transition-colors"
          >
            AI Cloud
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-nebius-lime hover:bg-nebius-lime-hover text-nebius-navy text-sm font-semibold rounded-lg transition-colors"
          >
            Coming Soon
          </a>
        </div>

        <button
          className="md:hidden text-nebius-text-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-nebius-border bg-nebius-dark px-6 py-4 flex flex-col gap-4">
          <Link href="/#workshops" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Workshops</Link>
          <a href="https://docs.tokenfactory.nebius.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Docs</a>
          <a href="https://tokenfactory.nebius.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-nebius-text-muted hover:text-white" onClick={() => setMenuOpen(false)}>Token Factory</a>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-nebius-lime text-nebius-navy text-sm font-semibold rounded-lg text-center" onClick={() => setMenuOpen(false)}>Coming Soon</a>
        </div>
      )}
    </nav>
  );
}
