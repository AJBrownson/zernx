'use client';

import Image from 'next/image';
import { FC } from 'react';

interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-dark-bg ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-dark-card to-dark-bg" />
        
        {/* Glowing Orbs - Mobile */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl md:w-96 md:h-96" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl md:w-full md:h-full" />
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content - Mobile First */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full h-full px-5 pt-16 pb-12 md:justify-center md:pt-0 md:pb-0 md:px-8 lg:px-12">
        
        {/* Top Navigation Placeholder */}
        <nav className="w-full max-w-7xl mb-8 md:mb-16 flex justify-between items-center">
          <div className="text-primary font-bold text-lg md:text-2xl">ZernX</div>
          <button className="px-4 py-2 md:px-6 md:py-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm md:text-base font-semibold transition-colors">
            Launch ZernX
          </button>
        </nav>

        {/* Hero Content */}
        <div className="w-full max-w-7xl">
          {/* Mobile Layout: Text, then Prompt Box */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left Column - Headline & Description */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text-primary leading-tight">
                One prompt for <br className="hidden md:inline" /> every DeFi action
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg lg:text-xl text-dark-text-secondary leading-relaxed">
                ZernX is a fast multi-chain DEX with an AI guardian that helps you avoid risky trades and bad executions.
              </p>

              {/* CTA Buttons - Mobile Stack, Desktop Row */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-colors text-center">
                  Launch Testnet
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg border border-dark-stroke hover:border-dark-text-secondary text-dark-text-primary font-semibold transition-colors text-center">
                  Whitepaper
                </button>
              </div>
            </div>

            {/* Right Column - AI Prompt Box */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <PromptAIBox />
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Image - Desktop Only */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-3/4 pointer-events-none">
        <div className="relative w-full h-full opacity-30">
          <div className="absolute inset-0 bg-linear-to-l from-primary/20 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

/**
 * AI Prompt Component
 * Displays example prompts and input area
 */
const PromptAIBox: FC = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md bg-dark-card border border-dark-stroke rounded-2xl p-5 md:p-6 lg:p-8 shadow-xl">
      {/* Header */}
      <div className="mb-5 md:mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="text-dark-text-primary font-semibold text-sm md:text-base">Hello,</span>
        </div>
        <h2 className="text-dark-text-primary font-bold text-xl md:text-2xl">Welcome to ZernX</h2>
      </div>

      {/* Prompt Suggestions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-5 md:mb-6">
        <PromptChip text="Swap token" />
        <PromptChip text="Bridge token" />
        <PromptChip text="Transfer asset" />
        <PromptChip text="Gas tank" />
      </div>

      {/* Input Area */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Ask anything"
            className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-dark-semi-bg border border-dark-stroke text-dark-text-primary placeholder-dark-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm md:text-base"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 justify-end">
          {/* Mic Button */}
          <button className="p-2 md:p-3 rounded-lg bg-dark-semi-bg hover:bg-dark-card border border-dark-stroke transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-dark-text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 16.91c-1.48 1.46-3.51 2.36-5.75 2.36s-4.27-.9-5.75-2.36m11.5-9.5h1.5c0 2.13-.9 4.15-2.41 5.74" opacity="0.5" />
            </svg>
          </button>

          {/* Send Button */}
          <button className="p-2 md:p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.9702544,11.6889879 21.714504,3.30430197 4.13399899,1.16346973 C3.50612381,-0.1 2.40999481,-0.0740476149 1.77946707,0.52850339 C0.994999833,1.1 0.837030652,2.19 1.15159189,3.0171384 L3.03521743,9.4581314 C3.03521743,9.67623186 3.34915502,9.83253985 3.50612381,9.83253985 L16.6915026,10.6180221 C16.6915026,10.6180221 17.1624089,10.6180221 17.1624089,11.1012906 C17.1624089,11.5845591 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-xs md:text-sm text-dark-text-muted mt-4 text-center">
        Type, speak, or use prompt suggestions
      </p>
    </div>
  );
};

/**
 * Reusable Prompt Chip Component
 */
interface PromptChipProps {
  text: string;
  onClick?: () => void;
}

const PromptChip: FC<PromptChipProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-semi-bg hover:bg-dark-card border border-dark-stroke text-dark-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-medium whitespace-nowrap"
    >
      {text}
    </button>
  );
};
