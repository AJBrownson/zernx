'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-dark-stroke/30 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:px-0">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <Link href="/" className="text-white font-bold text-2xl mb-4 block">
              ZernX
            </Link>
            <p className="text-dark-text-secondary text-sm leading-relaxed">
              Your AI-powered guardian for secure DeFi trading
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-dark-text-secondary hover:text-white transition text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-stroke/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-dark-text-muted text-sm mb-4 md:mb-0">
            © 2024 ZernX. All rights reserved.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/zernx" className="text-dark-text-secondary hover:text-primary transition">
              Twitter
            </a>
            <a href="https://discord.gg/zernx" className="text-dark-text-secondary hover:text-primary transition">
              Discord
            </a>
            <a href="https://github.com/zernx" className="text-dark-text-secondary hover:text-primary transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
