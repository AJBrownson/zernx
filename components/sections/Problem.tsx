'use client';

// Image constants
const imgCoins01 = 'https://www.figma.com/api/mcp/asset/0ec78eda-db9f-4eb3-942d-280eaf314acb';
const imgRobot02 = 'https://www.figma.com/api/mcp/asset/edf01ffc-9c0c-4352-ab2c-8e1cdcaff64e';
const imgValidationApproval = 'https://www.figma.com/api/mcp/asset/f2fc02dd-f841-4298-a9c0-b9d5c58b5688';
const imgUserBlock01 = 'https://www.figma.com/api/mcp/asset/3b0bfa32-a934-4ce2-ba57-a806d4d58a5a';
const imgLine7241 = 'https://www.figma.com/api/mcp/asset/bb94a1d0-004d-4e62-bee4-9662334dcc87';

type ThreatCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ThreatCard({ icon, title, description }: ThreatCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center w-56 text-center">
      <div className="relative w-26 h-26 rounded-3xl border-2 border-primary bg-dark-card flex items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-dark-text-secondary text-lg">{description}</p>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <div className="w-full flex flex-col gap-20 items-center py-20 px-4 md:px-8 lg:px-0">
      {/* Header */}
      <div className="flex flex-col gap-6 items-center text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
          <span className="text-dark-text-secondary">Most DEX users trade blind. </span>
          We change that.
        </h2>
        <p className="text-lg md:text-xl text-dark-text-secondary">
          Risky tokens and bad trades cost users every day. ZernX watches each transaction so you can trade with confidence.
        </p>
      </div>

      {/* Threat Cards */}
      <div className="relative w-full flex flex-col md:flex-row gap-12 md:gap-22 items-stretch justify-center flex-wrap">
        {/* Connecting line (hidden on mobile) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl hidden lg:flex items-center pointer-events-none">
          <img src={imgLine7241} alt="" className="w-full h-auto opacity-50" />
        </div>

        <ThreatCard
          icon={imgCoins01}
          title="Scam Tokens"
          description="Fake assets that drain funds"
        />
        <ThreatCard
          icon={imgRobot02}
          title="MEV & Slippage"
          description="Value lost before execution"
        />
        <ThreatCard
          icon={imgValidationApproval}
          title="Dangerous Approvals"
          description="Unlimited access risks"
        />
        <ThreatCard
          icon={imgUserBlock01}
          title="Human Errors"
          description="Costly clicks and mistakes"
        />
      </div>
    </div>
  );
}
