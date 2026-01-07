"use client";

import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="font-satoshi bg-dark-card border border-dark-stroke rounded-3xl p-6 h-96 flex flex-col gap-6 overflow-hidden relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" />

      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-white leading-tight whitespace-pre-line">{title}</h3>
        <p className="text-lg text-dark-text-secondary">{description}</p>
        <div className="mt-auto">
          <Image
            src={image}
            alt=""
            width={24}
            height={24}
            className="w-24 h-24 md:w-40 md:h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "Token Risk \nRadar",
      description: "Spots honeypots, low liquidity, and risky contracts.",
      image: "/feature-img1.svg",
    },
    {
      title: "MEV Shield & Smart \nSlippage",
      description:
        "Keeps your trade safe from sandwich attacks and bad price impacts.",
         image: "/feature-img2.svg",
    },
    {
      title: "Approval \nCenter",
      description: "View, manage, and revoke token permissions easily.",
       image: "/feature-img3.svg",
    },
    {
      title: "Dumb Mistake \nFirewall",
      description: "Catches wrong chains, low gas, and other human errors.",
       image: "/feature-img4.svg",
    },
  ];

  return (
    <div className="font-satoshi w-full py-20 px-4 md:px-8 lg:px-0">
      {/* Header */}
      <div className="flex flex-col gap-6 items-center text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-white leading-tight">
          <span className="text-[#B5B5B5]">Meet Your </span>
          AI Guardian
        </h2>
        <div className="inline-flex gap-3 items-center px-4 py-3 rounded-full border border-b-primary bg-black">
          <Image
            src="/stars.svg"
            alt="Stars Icon"
            width={20}
            height={20}
            className="w-6 h-6"
          />
          <p className="text-sm md:text-base text-[#B5B5B5]">
            Your safety <span className="text-[#D7B2F9]">co-pilot</span> for
            DeFi.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
