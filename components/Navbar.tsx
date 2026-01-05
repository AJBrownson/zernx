
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4 md:px-8 lg:px-0 backdrop-blur-sm bg-dark-bg/80 border-b border-dark-stroke/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-2xl shrink-0">
          ZernX
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8 flex-1 ml-12">
          <Link href="#features" className="text-dark-text-secondary hover:text-white transition text-sm">
            Features
          </Link>
          <Link href="#roadmap" className="text-dark-text-secondary hover:text-white transition text-sm">
            Roadmap
          </Link>
          <Link href="#faq" className="text-dark-text-secondary hover:text-white transition text-sm">
            FAQ
          </Link>
          <Link href="https://docs.zernx.ai" className="text-dark-text-secondary hover:text-white transition text-sm">
            Docs
          </Link>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity shrink-0">
          Launch ZernX
        </button>
      </div>
    </nav>
  );
}