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
import { GoShareAndroid } from "react-icons/go";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbArrowBarToRight } from "react-icons/tb";

import bearish from "@/public/bearish.svg";
import bullish from "@/public/bullish.svg";

import bitcoin from "@/public/bitcoin.svg"
import bnb from "@/public/bnb.svg"
import solana from "@/public/solana.svg"
import ethereum from "@/public/ethereum.svg"
import ether from "@/public/ether.svg"

export default function WalletPage() {
  type RightTab = "send" | "receive" | "activities";
  type SendTab = "single" | "multi";
  type LeftTab = "assets" | "nft";

  const [activeTab, setActiveTab] = useState<RightTab>("send");
  const [activeSendTab, setActiveSendTab] = useState<SendTab>("single");
  const [sendStep, setSendStep] = useState<"form" | "confirm">("form");
  const [activeLeftTab, setActiveLeftTab] = useState<LeftTab>("assets");

  const [selectedNft, setSelectedNft] = useState<typeof nfts[number] | null>(null);


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
  const nfts = [
    { id: 1, name: "Cartoon-bird", floor: "6.10 ETH", image: "/nft1.svg" },
    { id: 2, name: "Alien Amphibian", floor: "0 ETH", image: "/nft2.svg" },
    { id: 3, name: "Cyber Guy", floor: "1.2 ETH", image: "/nft3.svg" },
    { id: 4, name: "Pixel Punk", floor: "0.8 ETH", image: "/nft4.svg" },
    { id: 5, name: "Cat", floor: "3.2 ETH", image: "/nft5.svg" },
    { id: 6, name: "Sorcerer", floor: "0.8 ETH", image: "/nft6.svg" },
  ];

  const transactions = [
    { type: "sent", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "sent", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
    { type: "received", date: "Jan 4, 2024", amount: "0,017 ETH", usd: "$725.00" },
  ];

  return (
    <section className="mt-4 md:mt-12 py-4">
      <div className="rounded-2xl flex w-full md:gap-2 md:max-w-232 mx-auto bg-[#121712]">

        {/* LEFT PANEL */}
        {/* <div className="relative rounded-2xl border border-[#121712] bg-[#010501] font-manrope p-2 w-full max-w-98"> */}
        <div className="relative rounded-2xl border border-[#121712] bg-[#010501] font-manrope p-2 w-full max-w-98 h-[600px] flex flex-col">
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
              <button
                onClick={() => setActiveLeftTab("assets")}
                className={`cursor-pointer rounded-full font-semibold text-base px-4 py-1 ${activeLeftTab === "assets"
                  ? "bg-[#081F02] text-[#B1F128]"
                  : "text-[#6E7873]"
                  }`}
              >
                Assets
              </button>
              <button
                onClick={() => setActiveLeftTab("nft")}
                className={`cursor-pointer rounded-full font-semibold text-base px-4 py-1 ${activeLeftTab === "nft"
                  ? "bg-[#081F02] text-[#B1F128]"
                  : "text-[#6E7873]"
                  }`}
              >
                NFTs
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/search-02.svg" alt="" width={20} height={20} className="bg-[#1B1B1B] p-1 rounded-full" />
              <Image src="/search-02.svg" alt="" width={20} height={20} className="bg-[#1B1B1B] p-1 rounded-full" />
            </div>
          </div>

          <div className="overflow-y-auto flex-1 pr-2">
            {/* Asset List */}
            {activeLeftTab === "assets" && (
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
            )}

            {/* NFT GRID */}
            {activeLeftTab === "nft" && (
              <div className="grid grid-cols-2 gap-3">
                {nfts.map((nft) => (
                  <button
                    key={nft.id}
                    onClick={() => setSelectedNft(nft)}
                    className={`relative group aspect-square w-full rounded-2xl overflow-hidden transition-all duration-300
                      ${selectedNft?.id === nft.id ? "" : "hover:ring-1 hover:ring-[#ffffff30]"}`}
                  >
                    {/* Image stretches to fill the button */}
                    <Image
                      src={nft.image}
                      alt={nft.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* GLASS CARD OVERLAY */}
                    <div className="absolute bottom-1 left-2 right-2 flex items-center justify-between rounded-xl border border-white/20 bg-black/20 backdrop-blur-md px-3 py-2 text-left shadow-lg">
                      <div>
                        <p className="text-xs font-semibold text-white drop-shadow-md">
                          {nft.name}
                        </p>
                        <p className="text-[10px] font-medium text-[#E0E0E0] drop-shadow-md">
                          Floor: {nft.floor}
                        </p>
                      </div>

                      <div className="text-white/80">
                       <TbArrowBarToRight />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="pt-2 w-full max-w-125 mx-auto font-manrope">
          {/* Top Actions */}
          <div className="bg-[#010501] p-1 rounded-2xl relative mb-6">
            <div className="pointer-events-none absolute inset-x-4 bottom-px h-px rounded-full bg-[linear-gradient(to_right,rgba(177,241,40,0),rgba(177,241,40,0.95),rgba(177,241,40,0))]" />
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

          {/* NFT TAB RIGHT PANEL DISPLAY */}
          {activeLeftTab === "nft" && (
            <div className="">
              {!selectedNft ? (
                <div className="mt-40 flex h-full items-center justify-center text-base text-[#6E7873]">
                  Select an NFT to view details
                </div>
              ) : (
                <div className="">
                  <Image
                    src={selectedNft.image}
                    alt={selectedNft.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-contain rounded-3xl mb-6"
                  />

                  <div>
                    <div className="flex justify-between items-center">
                      <span>
                        <p className="flex items-center gap-2 text-base font-medium text-white">
                          {selectedNft.name} <HiOutlineBadgeCheck size={14} />
                        </p>
                        <p className="text-sm text-[#FFF]">
                          By {selectedNft.name}_deployer
                        </p>
                      </span>
                      <CiStar />
                    </div>

                    <div className="grid grid-cols-3 gap-y-6 w-full mt-4">
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">1.2M ETH</p>
                        <p className="text-[#B5B5B5] text-[10px]">Total volume</p>
                      </div>

                      <div className="flex justify-center">
                        <div className="flex flex-col">
                          <p className="text-white font-medium text-sm">6.10 ETH</p>
                          <p className="text-[#B5B5B5] text-[10px]">Floor price</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-white font-medium text-sm">3.05%</p>
                        <p className="text-[#B5B5B5] text-[10px]">Listed</p>
                      </div>

                      <div className="text-left">
                        <p className="text-white font-medium text-sm">5,320</p>
                        <p className="text-[#B5B5B5] text-[10px]">Owners</p>
                      </div>

                      <div className="flex justify-center">
                        <div className="flex flex-col">
                          <p className="text-white font-medium text-sm">Ethereum</p>
                          <p className="text-[#B5B5B5] text-[10px]">Chain</p>
                        </div>
                      </div>


                      <div className="text-right">
                        <p className="text-white font-medium text-sm">April 2025</p>
                        <p className="text-[#B5B5B5] text-[10px]">Creation date</p>
                      </div>
                    </div>

                  </div>
                  <p className="text-sm uppercase mt-4">Recent activites</p>
                  <div className="mt-4 flex justify-between">
                    <span>
                      <p className="text-white font-medium text-sm">Recieved</p>
                      <p className="text-[10px] text-[#8A929A]">Jan 4, 2024</p>
                    </span>

                    <span>
                      <p className="text-[#498F00] font-medium text-sm">{selectedNft.name}</p>
                      <p className="text-[10px] text-right text-[#8A929A]">$725.00</p>
                    </span>

                  </div>
                </div>
              )}
            </div>
          )}


          {/* ASSETS TAB RIGHT PANEL DISPLAY */}
          {activeLeftTab === "assets" && (
            <>
              {/* Send tab content */}
              {activeTab === "send" && (
                <>
                  {/* Asset Header with Go Back button */}
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <span className="flex items-center gap-2">
                        <Image src={ethereum} alt="" width={20} height={20} />
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

                    {/* Go Back button - only shown in confirm step */}
                    {sendStep === "confirm" && (
                      <button
                        onClick={() => setSendStep("form")}
                        className="cursor-pointer flex items-center gap-2 rounded-md border border-[#B1F128] px-3 py-1.5 text-xs text-[#B1F128]"
                      >
                        <IoArrowBack size={14} />
                        Go Back
                      </button>
                    )}
                  </div>

                  {/* Form Step */}
                  {sendStep === "form" && (
                    <>
                      {/* Send Form */}
                      <div className="mb-2 space-y-2">
                        <div className="bg-[#010501] flex items-center justify-around gap-1 px-2 py-4 rounded-2xl">
                          <button
                            onClick={() => setActiveSendTab("single")}
                            className={`flex h-full cursor-pointer px-6 items-center justify-center gap-2 pb-1 text-sm font-medium
                           ${activeSendTab === "single"
                                ? "border-b-[1.5px] border-[#B1F128] text-[#B1F128]"
                                : "border-b-[1.5px] border-transparent text-[#B5B5B5]"
                              }`}
                          >
                            Send To One
                          </button>

                          <button
                            onClick={() => setActiveSendTab("multi")}
                            className={`flex h-full cursor-pointer px-6 items-center justify-center gap-2 pb-1 text-sm font-medium
                           ${activeSendTab === "multi"
                                ? "border-b-[1.5px] border-[#B1F128] text-[#B1F128]"
                                : "border-b-[1.5px] border-transparent text-[#B5B5B5]"
                              }`}
                          >
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

                        {activeSendTab === "single" ? (
                          <>
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
                          </>
                        ) : (
                          <>
                            <div className="rounded-xl bg-[#0B0F0A] px-4 py-5">
                              <p className="font-normal text-xs mb-2 text-[#B5B5B5]">Add multiple wallet addresses or upload a list.</p>
                              <span className="relative w-full">
                                <input
                                  placeholder="Enter Wallet Addresses"
                                  className="w-full rounded-xl bg-[#010501] px-4 py-5 text-sm text-[#E6ECE9] placeholder-[#6E7873] outline-none focus:ring-1 focus:ring-[#B1F128]"
                                />
                                {/* copy icon */}
                                <button
                                  type="button"
                                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                >
                                  <FiCopy size={18} />
                                </button>
                              </span>
                            </div>

                            <button className="cursor-pointer w-full rounded-full border border-[#B1F128] bg-transparent py-2 text-sm font-medium text-[#B1F128] flex items-center justify-center gap-2">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 10v2.667A1.333 1.333 0 0112.667 14H3.333A1.333 1.333 0 012 12.667V10m9.333-5.333L8 1.333m0 0L4.667 4.667M8 1.333v9.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              Attach CSV File
                            </button>
                          </>
                        )}

                        <button
                          onClick={() => setSendStep("confirm")}
                          className="cursor-pointer w-full rounded-full bg-[#B1F128] py-2 text-base font-semibold text-[#010501]">
                          Next
                        </button>
                      </div>
                    </>
                  )}

                  {/* Confirm Step */}
                  {sendStep === "confirm" && (
                    <>
                      {/* Confirm Header */}
                      <div className="bg-[#0B0F0A] px-4 py-4 rounded-2xl mb-2">
                        <p className="text-center text-sm text-[#B5B5B5]">Confirm</p>
                      </div>

                      {/* Transaction Details */}
                      <div className="space-y-2 mb-2">
                        {activeSendTab === "single" ? (
                          <>
                            <div className="rounded-xl bg-[#010501] px-4 py-4">
                              <p className="text-xs text-[#B5B5B5] mb-1">From</p>
                              <p className="text-sm text-[#B5B5B5]">0x06187ejie9urourT432</p>

                              <div className="mt-5 flex justify-between items-start">
                                <div>
                                  <p className="text-xs text-[#B5B5B5] mb-1">To:</p>
                                  <p className="text-sm text-[#B5B5B5]">0x06187ejie9urourT432</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-[#B5B5B5] mb-1">Network</p>
                                  <p className="text-sm text-[#B5B5B5]">ETH</p>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-xl bg-[#010501] px-4 py-2 flex justify-between items-center">
                              <span className="flex items-center gap-2">
                                <p className="text-sm text-[#B5B5B5]">Network Fee:</p>
                                <span className="text-[#B5B5B5]">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
                                    <text x="6" y="8.5" fontSize="8" textAnchor="middle" fill="currentColor">i</text>
                                  </svg>
                                </span>
                              </span>
                              <div className="text-right">
                                <p className="text-sm text-[#B5B5B5]">0.1ETH</p>
                                <p className="text-xs text-[#B5B5B5]">$0.044</p>
                              </div>
                            </div>

                            <button
                              className="cursor-pointer w-full rounded-full bg-[#B1F128] py-2 text-base font-semibold text-[#010501]">
                              Confirm
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="rounded-xl bg-[#010501] px-4 py-4 space-y-4">

                              <div>
                                <p className="text-xs text-[#B5B5B5] mb-1">Total Recipients</p>
                                <p className="text-sm text-[#B5B5B5]">12</p>
                              </div>


                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-xs text-[#B5B5B5] mb-1">Amount Per Recipient</p>
                                  <p className="text-sm text-[#B5B5B5]">10.0 ETH</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-[#B5B5B5] mb-1">Network</p>
                                  <p className="text-sm text-[#B5B5B5]">ETH</p>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-xl bg-[#010501] px-4 py-2 flex justify-between items-center">
                              <span className="flex items-center gap-2">
                                <p className="text-sm text-[#B5B5B5]">Estimated Network Fee (Batch Send):</p>
                                <span className="text-[#B5B5B5]">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
                                    <text x="6" y="8.5" fontSize="8" textAnchor="middle" fill="currentColor">i</text>
                                  </svg>
                                </span>
                              </span>
                              <div className="text-right">
                                <p className="text-sm text-[#B5B5B5]">$0.04460</p>
                                <p className="text-xs text-[#B5B5B5]">$0.044</p>
                              </div>
                            </div>

                            <button
                              className="cursor-pointer w-full rounded-full bg-[#B1F128] py-2 text-base font-semibold text-[#010501]">
                              Confirm Multi-Send
                            </button>
                          </>
                        )}
                      </div>
                    </>
                  )}

                  {/* Chart Placeholder */}
                  <div className="relative h-14 overflow-hidden bg-[#1A1F1C] animate-pulse flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#4DFF9A] to-transparent opacity-40 blur-sm" />
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
                  <div className="flex gap-4">
                    <div>
                      <Image
                        src="/qr-code2.svg"
                        alt="QR Code"
                        width={20}
                        height={20}
                        className="w-48 h-48 rounded-md"
                      />
                    </div>

                    <div className="flex flex-col space-y-4">
                      <p className="pt-4 text-xs break-all text-[#B5B5B5]">
                        0x06193i092j9g9iu2ngmu0939i-4ti938hT432
                      </p>
                      <button className="flex items-center gap-2 rounded-full border border-[#B1F128] w-40 px-3 py-1.5 text-xs text-[#B1F128]">
                        <FiCopy size={14} />
                        Copy Address
                      </button>

                      <button className="flex items-center gap-2 rounded-full border border-[#B1F128] w-40 px-3 py-1.5 text-xs text-[#B1F128]">
                        <GoShareAndroid size={14} />
                        Share Address
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Activities tab content */}
              {activeTab === "activities" && (
                <>
                  {/* div below to be displayed when no activity has been recorded */}
                  {/* <div className="flex flex-col items-center justify-center space-y-4">
               <IoFolderOpenOutline size={200} className="mt-10" />
               <p className="font-medium text-lg">No Activity Yet</p>
             </div> */}

                  <div className="h-125.5 w-full overflow-y-auto rounded-2xl px-4">
                    {transactions.map((tx, index) => (
                      <div
                        key={index}
                        className="flex w-full items-center justify-between border-b border-[#1B1B1B] py-2 last:border-b-0"
                      >
                        {/* LEFT */}
                        <div>
                          <p className="text-sm font-medium text-[#FFFFFF] capitalize">
                            {tx.type}
                          </p>
                          <p className="text-xs text-[#B5B5B5]">
                            {tx.date}
                          </p>
                        </div>

                        {/* RIGHT */}
                        <div className="text-right">
                          <p
                            className={`text-sm font-medium ${tx.type === "received"
                              ? "text-[#498F00]"
                              : "text-[#FFFFFF]"
                              }`}
                          >
                            {tx.amount}
                          </p>
                          <p className="text-xs text-[#B5B5B5]">
                            {tx.usd}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}