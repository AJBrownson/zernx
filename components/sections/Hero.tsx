"use client";

import Image from "next/image";
import { FC } from "react";

interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative font-satoshi w-full min-h-screen overflow-hidden bg-dark-bg ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.svg"
          alt="Background Gradient"
          fill
          priority
          className="object-contain w-100 object-center"
          quality={100}
        />

        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image
            src="/hero-grid.svg"
            alt="Grid Pattern"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>
      </div>

      {/* Main Content - Mobile First */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full h-full px-5 pt-40 pb-12 md:justify-center md:pt-44 md:pb-0 md:px-8 lg:px-12">
        {/* Hero Content */}
        <div className="w-full max-w-7xl font-family-satoshi">
          {/* Mobile Layout: Text, then Prompt Box */}
          <div className="flex flex-col items-center">
            {/* Headline & Description */}
            <div className="w-full flex flex-col items-center text-center gap-6 mb-8 md:mb-12 lg:mb-16">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-[80px] font-medium text-dark-text-secondary leading-tight">
                One prompt for <br className="hidden md:inline" />
                every <span className="text-primary">Defi action </span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-100 md:max-w-150 mx-auto md:my-6 text-base md:text-2xl text-dark-text-secondary leading-tight">
                ZernX is a fast multi-chain DEX with an AI guardian that helps
                you avoid risky trades and bad executions.
              </p>

              {/* CTA Buttons - Mobile Stack, Desktop Row */}
              <div className="flex justify-center gap-4 w-full md:w-auto pt-4">
                <button className="cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-lg bg-blue hover:bg-blue/90 text-black font-semibold transition-colors text-center">
                  Launch Testnet
                </button>
                <button className="cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-lg bg-black border border-dark-stroke hover:border-dark-text-secondary text-white font-semibold transition-colors text-center">
                  Read Docs
                </button>
              </div>
            </div>

            {/* AI Prompt Box */}
            <div className="mt-20 md:mt-40 w-full flex justify-center">
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
    <div className="w-full max-w-sm md:max-w-218.5 bg-dark-card border border-dark-stroke rounded-2xl p-5 md:p-6 lg:p-8 shadow-xl">
      {/* Header */}
      <div className="mb-10 md:mb-20">
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          <div className="">
            <Image
              src="/stars.svg"
              alt="Stars Icon"
              width={24}
              height={24}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          <span className="text-dark-text-primary font-medium text-sm md:text-xl">
            Hello,
          </span>
        </div>
        <h2 className="text-dark-text-primary font-medium text-base md:text-2xl">
          Welcome to ZernX
        </h2>
      </div>

      {/* Input Area */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative group">
          <div className="relative bg-black rounded-2xl w-full flex flex-row md:flex-col items-center md:items-stretch justify-between p-3 pl-6 md:p-6 md:min-h-35">
            <input
              type="text"
              placeholder="Ask anything"
              className="flex-1 w-full bg-transparent text-lg md:text-xl text-white placeholder-gray-500 focus:outline-none resize-none font-medium md:mb-4"
              autoFocus
            />

            {/* Bottom/Right Section */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:w-full">
              {/* Chips - Hidden on Mobile */}
              <div className="hidden md:flex flex-wrap items-center gap-2">
                <PromptChip text="Swap token" />
                <PromptChip text="Bridge token" />
                <PromptChip text="Transfer asset" />
                <PromptChip text="Gas tank" />
              </div>

              {/* Action Buttons - Always visible */}
              <div className="flex items-center gap-1 shrink-0">
                <button className="text-gray-400 hover:text-white transition-colors p-1">
                  <Image
                    src="/mic.svg"
                    alt="Mic Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 cursor-pointer group-hover/btn:opacity-80 transition-opacity"
                  />
                </button>

                <button className="relative group/btn">
                  <Image
                    src="/connect wallet.svg"
                    alt="Send Icon"
                    width={32}
                    height={32}
                    className="w-6 h-6 md:w-8 md:h-8 cursor-pointer group-hover/btn:opacity-80 transition-opacity"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      className="
        px-3 py-1.5 md:px-4 md:py-2 
        rounded-full 
        bg-[#161616] border border-[#2A2A2A] 
        text-gray-400 hover:text-white hover:border-primary/50 
        transition-all duration-200 cursor-pointer
        text-xs md:text-sm font-medium whitespace-nowrap
      "
    >
      {text}
    </button>
  );
};
