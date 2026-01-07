"use client";

// Placeholder Image constants
const imgCoins01 = "/coins.svg";
const imgRobot02 = "/robot.svg";
const imgValidationApproval = "/validation.svg";
const imgUserBlock01 = "/user-block.svg";

type ThreatCardProps = {
  icon: string;
  title: string;
  description: string;
};

// Data for the cards
const threatCardsData = [
  {
    icon: imgCoins01,
    title: "Scam Tokens",
    description: "Fake assets that drain funds",
  },
  {
    icon: imgRobot02,
    title: "MEV & Slippage",
    description: "Value lost before execution",
  },
  {
    icon: imgValidationApproval,
    title: "Dangerous Approvals",
    description: "Unlimited access risks",
  },
  {
    icon: imgUserBlock01,
    title: "Human Errors",
    description: "Costly clicks and mistakes",
  },
];

function ThreatCard({ icon, title, description }: ThreatCardProps) {
  return (
    <div className="flex flex-col gap-4 items-center text-center z-10 w-full max-w-[180px] ">
      {/* Card Box - Fixed Height for alignment */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg shadow-black/50 shrink-0">
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 md:w-12 md:h-12 opacity-80"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col ">
        <h3 className="text-white text-sm md:text-base font-bold">{title}</h3>
        <p className="text-[#A0A0A0] text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="w-full flex flex-col gap-16 items-center py-20 px-4 md:px-8 lg:px-0 font-satoshi bg-dark-bg">
      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center text-center max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-medium leading-tight tracking-tight">
          <span className="text-[#A0A0A0]">Most DEX users trade blind.</span>
          <br />
          <span className="text-white">We change that.</span>
        </h2>
        <p className="text-sm md:text-lg text-[#A0A0A0] max-w-lg mx-auto leading-relaxed">
          Risky tokens and bad trades cost users every day. ZernX watches each
          transaction so you can trade with confidence.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-6xl mx-auto">
        {/* --- MOBILE VIEW (Two Stacked Rows) --- */}
        <div className="flex flex-col gap-12 lg:hidden">
          {/* Row 1 */}
          <div className="relative flex justify-between gap-4 px-4 sm:px-12">
            {/* Gradient Line: Positioned at top-10 (40px) which is center of h-20 (80px) card */}
            <div
              className="absolute left-0 right-0 top-10 h-px z-0"
              style={{
                background:
                  "linear-gradient(90deg, #2A2A2A 0%, #9B51E0 50%, #2A2A2A 100%)",
              }}
            />
            <ThreatCard {...threatCardsData[0]} />
            <ThreatCard {...threatCardsData[1]} />
          </div>

          {/* Row 2 */}
          <div className="relative flex justify-between gap-4 px-4 sm:px-12">
            {/* Gradient Line */}
            <div
              className="absolute left-0 right-0 top-10 h-px z-0"
              style={{
                background:
                  "linear-gradient(90deg, #2A2A2A 0%, #9B51E0 50%, #2A2A2A 100%)",
              }}
            />
            <ThreatCard {...threatCardsData[2]} />
            <ThreatCard {...threatCardsData[3]} />
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:grid grid-cols-4 relative gap-8 justify-items-center">
          <div className="max-w-236 mx-auto absolute left-0 right-0 top-24 h-px z-0 opacity-80 bg-linear-to-r from-[#2A2A2A] via-primary to-[#2A2A2A]" />

          {threatCardsData.map((card, index) => (
            <ThreatCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
