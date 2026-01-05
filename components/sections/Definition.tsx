'use client';

type DefinitionCardProps = {
  title: string;
  items: string[];
};

function DefinitionCard({ title, items }: DefinitionCardProps) {
  return (
    <div className="bg-dark-card border border-dark-stroke rounded-3xl p-8">
      <h3 className="text-white text-2xl font-bold mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-dark-text-secondary">
            <span className="text-secondary shrink-0 mt-1">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Definition() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-2xl mx-auto">
            ZernX, Clearly Defined
          </h2>
        </div>

        {/* Two Column Definition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DefinitionCard
            title="What ZernX Is"
            items={[
              'Your personal DeFi safety guardian powered by AI',
              'Real-time token and transaction analysis',
              'Protection against scams, MEV, and human errors',
              'Non-custodial solution for your security',
              'Multi-chain support for complete coverage',
            ]}
          />
          <DefinitionCard
            title="What ZernX Isn't"
            items={[
              'Not a wallet (but integrates with yours)',
              'Not a trading bot (we don\'t execute trades)',
              'Not a replacement for due diligence',
              'Not storing your keys or funds',
              'Not charging transaction fees',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
