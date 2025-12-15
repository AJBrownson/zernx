"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ChartHeader from "@/components/chartHeader";
import { FaShareFromSquare } from "react-icons/fa6";
import { FiCopy, FiCheck } from "react-icons/fi";
import { LuArrowRightToLine } from "react-icons/lu";



export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const userWalletAddress = "0x09....879";
  const reward = 20.61;
  const referralRules = [
    "When someone signs up using your referral link or code, they become your referee permanently.",
    "You earn a percentage of the TIWI Protocol fee (0.25%) from their spot trades only",
    "Rebates are paid in USDT, not in TIWI tokens.",
    "Your earnings depend on your Referral Level, which is based on how much your referees traded in the past 28 days.",
    "You only earn from spot trading volume made by people you referred.",
    "Fees are automatically converted to USDT and stored for monthly payout.",
    "Your rebate rate increases as your referees generate more trading volume.",
    "Rebate earnings update continuously throughout the month.",
    "The claim window opens every 28th of the month.",
    "You can claim your USDT directly to your wallet once claims are enabled.",
  ];

  const handleCopy = async () => {
    if (!inputRef.current) return;

    await navigator.clipboard.writeText(inputRef.current.value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <ChartHeader />

      <section className="mt-4 md:mt-12 px-4 py-4">
        {/* Invite friends banner */}
        <div className="flex justify-between items-center rounded-md bg-linear-to-b from-[#B1F128] via-[#00C65F] via-31% to-[#009288] w-full md:max-w-225 mx-auto">
          <p className="ml-5 md:ml-10 font-bold font-manrope text-base md:text-2xl w-8 md:w-52.5 text-[#010501]">
            Invite Friends. Unlock rewards.
          </p>

          <Image
            src="/banner-img.svg"
            alt=""
            width={200}
            height={200}
            className="rounded-br-md"
          />
        </div>

        {/* referral rules div */}
        <div className="flex flex-col md:flex-row w-full md:gap-2 md:max-w-225 mx-auto">

          {/* referral code input */}
          <div className="bg-[#010501] mt-5 py-3 md:px-4 rounded-md">
            <div className="relative mt-4 flex justify-between items-center py-2 px-3 rounded-xl bg-[#0b0f0e] border border-white/5 overflow-hidden md:w-[440px]">
              {/* bottom glow */}
              <div className="pointer-events-none absolute left-0.5 right-0.5 bottom-px h-0.5 rounded-full bg-[linear-gradient(to_top,rgba(32,245,105,0.95),rgba(32,245,105,0.35),rgba(32,245,105,0))]" />

              <span>
                <p className="font-manrope font-medium text-xs md:text-sm">
                  {userWalletAddress} has recently invited...
                </p>
                <p className="font-manrope font-semibold text-sm md:text-base text-[#B1F128]">
                  {reward} USDT
                </p>
              </span>

              <button className="text-[#B5B5B5] flex items-center gap-1 font-manrope font-medium text-xs md:text-sm">
                Position <LuArrowRightToLine size={12} />
              </button>
            </div>

            {/* <div className="mt-4 flex justify-between items-center py-2 border border-green-500 rounded-md md:w-108.5">
              <span className="">
                <p className="font-manrope font-medium text-base">
                  {userWalletAddress} has recently invited...
                </p>
                <p className="font-manrope font-semibold text-base md:text-lg text-[#B1F128]">
                  {reward} USDT
                </p>
              </span>

              <button className="text-[#B5B5B5] font-manrope font-medium text-sm md:text-base">
                Position
              </button>
            </div> */}

            <div className="mt-2 md:mt-4">
              <p className="font-manrope text-[#B5B5B5] font-normal text-xs md:text-sm mb-2">
                Enter Referral Code (Optional)
              </p>
              <span className="flex justify-between items-center gap-2 mb-3">
                <div className="relative w-full">
                  <input
                    ref={inputRef}
                    className="bg-[#0B0F0A] w-full p-4 pr-12 text-[#7C7C7C] placeholder:text-[#7C7C7C] outline-0 ring-0 focus:outline-none focus:ring-0 border border-white/5 focus:border-[#B1F128] transition rounded-xl"
                    placeholder="Enter Referral Code"
                  />
                  {/* copy icon */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B1F128] cursor-pointer"
                  >
                   {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                  </button>
                </div>
                <button className="bg-[#0D3600] p-4 border-[1.5px] border-[#156200] rounded-full text-[#498F00] font-manrope text-sm cursor-pointer">
                  Confirm
                </button>
              </span>

              <button className="border-[1.5px] border-[#B1F128] text-[#B1F128] rounded-full py-2 w-full font-medium font-manrope text-sm md:text-base cursor-pointer">
                Generate Referral Code
              </button>
            </div>
          </div>

          {/* referral rules */}
          <div className="bg-transparent md:bg-[#010501] mt-3 md:mt-5 md:px-4 rounded-md">
            <h2 className="font-manrope font-semibold text-sm md:text-base mb-3 md:mb-0">
              Referral rules
            </h2>
          
          <div className="bg-[#151313] md:bg-transparent py-2 px-2 rounded-xl">
            <ol className="space-y-2 md:space-y-4 mt-2 md:mb-4">
              {referralRules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start text-xs md:text-sm font-manrope font-medium"
                >
                  <span className="shrink-0 mr-2">{index + 1}.</span>
                  <span className="">{rule}</span>
                </li>
              ))}
            </ol>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
