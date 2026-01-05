'use client';

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-dark-card border border-dark-stroke rounded-3xl p-6 h-96 flex flex-col gap-6 overflow-hidden relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" />
      
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-lg text-dark-text-secondary">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: 'Token Risk\nRadar',
      description: 'Spots honeypots, low liquidity, and risky contracts.',
    },
    {
      title: 'MEV Shield & Smart Slippage',
      description: 'Keeps your trade safe from sandwich attacks and bad price impacts.',
    },
    {
      title: 'Approval\nCenter',
      description: 'View, manage, and revoke token permissions easily.',
    },
    {
      title: 'Dumb Mistake\nFirewall',
      description: 'Catches wrong chains, low gas, and other human errors.',
    },
  ];

  return (
    <div className="w-full py-20 px-4 md:px-8 lg:px-0">
      {/* Header */}
      <div className="flex flex-col gap-6 items-center text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
          <span className="text-dark-text-secondary">Meet Your</span>
          <span> AI Guardian</span>
        </h2>
        <div className="inline-flex gap-3 items-center px-4 py-3 rounded-full border border-primary bg-dark-semi-bg">
          <div className="w-6 h-6 shrink-0">⭐</div>
          <p className="text-lg text-dark-text-secondary">
            Your safety <span className="text-purple-300">co-pilot</span> for DeFi.
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
