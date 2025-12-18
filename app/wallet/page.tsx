"use client";

import { useRef, useState } from "react";

import Image from "next/image"
import { IoEyeOutline } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { FiCopy, FiCheck } from "react-icons/fi";

import bearish from "@/public/bearish.svg";
import bullish from "@/public/bullish.svg";

import bitcoin from "@/public/bitcoin.svg"
import bnb from "@/public/bnb.svg"
import solana from "@/public/solana.svg"
import ethereum from "@/public/ethereum.svg"
import ether from "@/public/ether.svg"

export default function WalletPage() {
  type RightTab = "send" | "receive" | "activities";

  const [activeTab, setActiveTab] = useState<RightTab>("send");
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);


  const handleCopy = async () => {
    if (!inputRef.current) return;

    await navigator.clipboard.writeText(inputRef.current.value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const balance = 4631.21
  const assets = [
    { name: "Bitcoin", symbol: "BTC", amount: "0.01912343", value: "$10,234.23", icon: bitcoin, trend: "bearish" },
    { name: "Solana", symbol: "SOL", amount: "20,000.85", value: "$10,234.23", icon: solana, trend: "bullish" },
    { name: "BNB Smart Chain", symbol: "BNB", amount: "1,580.8565", value: "$10,234.23", icon: bnb, trend: "bearish" },
    { name: "Ethereum", symbol: "ETH", amount: "0.15828", value: "$10,234.23", icon: ethereum, trend: "bullish" },
    { name: "Ethereum", symbol: "ETH", amount: "0.15828", value: "$10,234.23", icon: ether, trend: "bullish" },
    { name: "Ethereum", symbol: "ETH", amount: "0.15828", value: "$10,234.23", icon: ether, trend: "bullish" },
  ];


  return (
    <section className="mt-4 md:mt-12 py-4">
      <div className="flex w-full md:gap-2 md:max-w-232 mx-auto bg-[#121712]">

        {/* LEFT PANEL */}
        <div className="relative rounded-2xl border border-[#121712] bg-[#010501] font-manrope p-2 w-full max-w-98">
          <div className="pointer-events-none absolute inset-x-4 bottom-px h-px rounded-full bg-[linear-gradient(to_right,rgba(177,241,40,0),rgba(177,241,40,0.95),rgba(177,241,40,0))]" />
          {/* Balance */}
          <div className="ml-5 mb-6">
            <span className="flex items-center gap-2">
              <p className="text-xs text-[#B5B5B5]">Total Balance</p>
              <IoEyeOutline color="B5B5B5" size={10} />
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#E6ECE9]">
              ${balance}
            </h1>
            <p className="mt-1 text-sm text-[#3FEA9B]">
              +$61.69 (+2.15%) <span className="text-[#9DA4AE]">today</span>
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex justify-between items-center gap-2">
            <div className="bg-[#1B1B1B] rounded-full">
              <button className="rounded-full font-semibold text-base bg-[#081F02] px-4 py-1 text-[#B1F128]">
                Assets
              </button>
              <button className="rounded-full font-semibold text-base px-4 py-1 text-[#6E7873] hover:bg-[#151A17]">
                NFTs
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/search-02.svg" alt="" width={20} height={20} className="bg-[#1B1B1B] p-1 rounded-full" />
              <Image src="/search-02.svg" alt="" width={20} height={20} className="bg-[#1B1B1B] p-1 rounded-full" />
            </div>
          </div>

          {/* Asset List */}
          <ul className="space-y-3">
            {assets.map((asset, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-xl bg-[#0E1310] px-2 py-3 hover:bg-[#141A16]"
              >
                {/* Left: Asset Info */}
                <div className="flex items-center gap-2">
                  <Image
                    src={asset.icon}
                    alt={`${asset.symbol} icon`}
                    width={20}
                    height={20}
                    className="opacity-90"
                  />
                  <span className="">
                    <p className="text-sm font-medium text-[#FFFFFF]">
                      {asset.symbol}
                    </p>
                    <p className="text-xs text-[#8A929A]">
                      {asset.name}
                    </p>
                  </span>
                </div>

                {/* Middle: Chart */}
                <div className="">
                  <Image
                    src={asset.trend === "bearish" ? bearish : bullish}
                    alt={`${asset.symbol} chart`}
                    width={80}
                    height={28}
                    className="opacity-90"
                  />
                </div>

                {/* Right: Numbers */}
                <div className="text-right">
                  <p className="text-sm font-medium text-[#FFF]">
                    {asset.amount}
                  </p>
                  <p className="text-xs text-[#8A929A]">
                    {asset.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT PANEL */}
        <div className="pt-2 w-full max-w-125 mx-auto font-manrope">
          {/* Top Actions */}
          <div className="bg-[#010501] p-1 rounded-2xl relative mb-6">
            <div className="pointer-events-none absolute inset-x-4 bottom-px h-px rounded-full bg-[linear-gradient(to_right,rgba(177,241,40,0),rgba(177,241,40,0.95),rgba(177,241,40,0))]" />
            {/* <div className="grid grid-cols-3 gap-1">
              <button className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-[#0B0F0A] py-3.25 text-sm font-medium text-[#B5B5B5]">
                <RiSendPlaneLine size={16} />
                Send
              </button>

              <button className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-[#0B0F0A] py-3.25 text-sm font-medium text-[#B5B5B5]">
                <HiDownload size={16} />
                Receive
              </button>

              <button className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-[#0B0F0A] py-3.25 text-sm font-medium text-[#B5B5B5]">
                <MdHistory size={16} />
                Activities
              </button>
            </div> */}
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setActiveTab("send")}
                className={`flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.25 text-sm font-medium transition
                ${activeTab === "send"
                    ? "bg-[#081F02] text-[#B1F128]"
                    : "bg-[#0B0F0A] text-[#B5B5B5]"
                  }`}
              >
                <RiSendPlaneLine size={16} />
                Send
              </button>

              <button
                onClick={() => setActiveTab("receive")}
                className={`flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.25 text-sm font-medium transition
                ${activeTab === "receive"
                    ? "bg-[#081F02] text-[#B1F128]"
                    : "bg-[#0B0F0A] text-[#B5B5B5]"
                  }`}
              >
                <HiDownload size={16} />
                Receive
              </button>

              <button
                onClick={() => setActiveTab("activities")}
                className={`flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.25 text-sm font-medium transition
                  ${activeTab === "activities"
                    ? "bg-[#081F02] text-[#B1F128]"
                    : "bg-[#0B0F0A] text-[#B5B5B5]"
                  }`}
              >
                <MdHistory size={16} />
                Activities
              </button>
            </div>

          </div>

          {/* Send tab content */}
          {activeTab === "send" && (
            <>
              {/* Asset Header */}
              <div className="mb-2">
                <span className="flex items-center gap-2"><Image src={ethereum} alt="" width={20} height={20} />
                  <p className="text-sm text-[#FFF]">Ethereum</p>
                </span>
                <p className="text-xl text-[#FFF] font-medium">
                  0.01912343
                </p>
                <div className="text-xs flex gap-2 items-center">
                  <p className="text-[#8A929A]">$10,234.23</p>
                  <span className="text-[#34C759] flex">
                    <FaArrowUp size={16} className="bg-[#1B1B1B] p-1 rounded-full" />
                    0.10%
                  </span>
                  <p className="text-[#B5B5B5]">Today</p>
                </div>
              </div>

              {/* Send Form */}
              <div className="mb-2 space-y-2">
                <div className="bg-[#010501] flex items-center justify-around gap-1 px-2 py-4 rounded-2xl">
                  <button className="flex h-full px-6 items-center justify-center gap-2 border-b-[1.5px] border-[#B1F128] pb-1 text-sm font-medium text-[#B5B5B5]">
                    Send To One
                  </button>

                  <button className="flex h-full px-6 items-center justify-center gap-2 border-b-[1.5px] border-[#B1F128] pb-1 text-sm font-medium text-[#B5B5B5]">
                    Multi-Send
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#0B0F0A] px-4 py-3">
                  {/* crypto dropdown */}
                  <details className="bg-[#121712] rounded-full group relative w-fit">
                    {/* Trigger */}
                    <summary
                      className="flex cursor-pointer list-none items-center gap-3 rounded-full bg-[#121712] px-2 py-3 text-left outline-none">
                      {/* Icon */}
                      <Image
                        src={ethereum}
                        alt="Ethereum"
                        width={36}
                        height={36}
                        className="shrink-0"
                      />

                      {/* Text */}
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-[#FFF]">ETH</p>
                        <p className="text-xs font-medium text-[#7C7C7C]">Ethereum</p>
                      </div>
                      <IoChevronDown size={16} className="ml-2 text-[#B5B5B5] transition-transform group-open:rotate-180" />
                    </summary>

                    {/* Dropdown menu */}
                    <div
                      className="absolute left-0 z-10 mt-2 w-full min-w-55 rounded-xl bg-[#0B0F0A] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#141A16]">
                        <Image src={ethereum} alt="" width={24} height={24} />
                        <span className="text-sm text-[#E6ECE9]">Ethereum</span>
                      </button>

                      {/* Add more assets here */}
                    </div>
                  </details>

                  <div>
                    <span className="flex items-center gap-1">
                      <BsWallet2 size={10} />
                      <p className="text-xs text-[#B5B5B5]">0.0342ETH</p>
                      <p className="text-[#B1F128] text-xs py-1 px-2 ml-1 rounded-full bg-[#1F261E]">Max</p>
                    </span>
                    <p className="text-right text-[#7C7C7C] font-medium text-xl">11.496</p>
                    <p className="text-right text-[#7C7C7C] font-medium text-xs">$0</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#0B0F0A] px-4 py-5">
                  <p className="font-semibold text-xs mb-2">To:</p>
                  <span className="relative w-full">
                    <input
                      ref={inputRef}
                      placeholder="Enter Wallet Address"
                      className="w-full rounded-xl bg-[#010501] px-4 py-5 text-sm text-[#E6ECE9] placeholder-[#6E7873] outline-none focus:ring-1 focus:ring-[#B1F128]"
                    />
                    {/* copy icon */}
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                    </button>
                  </span>
                </div>
                <button className="w-full rounded-full bg-[#B1F128] py-2 text-base font-semibold text-[#010501]">
                  Next
                </button>
              </div>

              {/* Chart Placeholder */}
              <div className="relative h-14 overflow-hidden bg-[#1A1F1C] animate-pulse flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4DFF9A] to-transparent opacity-40 blur-sm" />
                <span className="relative z-10 text-xs font-medium tracking-wide text-[#E6ECE9]">
                  Loading chart...
                </span>
              </div>

              {/* Chart Range */}
              <div className="w-full mt-4 flex justify-between gap-4 text-xs text-[#6E7873]">
                <span className="text-[#4DFF9A]">1D</span>
                <span>1W</span>
                <span>1M</span>
                <span>1Y</span>
                <span>5Y</span>
                <span>All</span>
              </div>
            </>
          )}

          {/* Recieve tab content */}
          {activeTab === "receive" && (
            <div className="space-y-4">
              <div className="bg-[#0B0F0A] p-4 rounded-md">
                <p className="text-xs text-[#7C7C7C] mb-2">Select Asset</p>


                {/* Asset dropdown */}
                <details className="bg-[#121712] rounded-full group relative w-full">
                  {/* Trigger */}
                  <summary
                    className="w-full flex cursor-pointer list-none items-center rounded-full bg-[#121712] p-2 text-left outline-none"
                  >
                    {/* Icon */}
                    <Image
                      src={ethereum}
                      alt="Ethereum"
                      width={36}
                      height={36}
                      className="shrink-0"
                    />

                    {/* Text */}
                    <div className="ml-3 leading-tight">
                      <p className="text-sm font-semibold text-[#FFF]">ETH</p>
                      <p className="text-xs font-medium text-[#7C7C7C]">Ethereum</p>
                    </div>

                    {/* Chevron pushed to far right */}
                    <IoChevronDown
                      size={16}
                      className="ml-auto text-[#B5B5B5] transition-transform group-open:rotate-180"
                    />
                  </summary>


                  {/* Dropdown menu */}
                  <div
                    className="absolute left-0 z-10 mt-2 w-full min-w-55 rounded-xl bg-[#0B0F0A] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#141A16]">
                      <Image src={ethereum} alt="" width={24} height={24} />
                      <span className="text-sm text-[#E6ECE9]">Ethereum</span>
                    </button>

                    {/* Add more assets here */}
                  </div>
                </details>
              </div>

              {/* Warning */}
              <div className="rounded-xl bg-[#2B1F0D] px-4 py-3 text-xs text-center text-[#FFF]">
                Only send <span className="font-semibold">Ethereum (ETH)</span> to this address.
                Other assets will be lost forever.
              </div>

              {/* QR + Address */}
              <div className="bg-[#010501] rounded-2xl p-4 flex gap-4">
                <Image
                  src="/qr.png"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="rounded-lg bg-white p-2"
                />

                <div className="flex flex-col justify-between">
                  <p className="text-xs break-all text-[#B5B5B5]">
                    0x06193i092j9g9iu2ngmu0939i-4ti938hT432
                  </p>

                  <div className="flex gap-2 mt-2">
                    <button className="flex items-center gap-2 rounded-full border border-[#B1F128] px-3 py-1.5 text-xs text-[#B1F128]">
                      <FiCopy size={14} />
                      Copy Address
                    </button>

                    <button className="flex items-center gap-2 rounded-full bg-[#081F02] px-3 py-1.5 text-xs text-[#B1F128]">
                      Share Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities tab content */}
          {activeTab === "activities" && (
            <div className="rounded-2xl bg-[#010501] p-6 text-center">
              <p className="text-sm text-[#B5B5B5]">
                No recent activity
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
