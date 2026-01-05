'use client';

type PhaseProps = {
  phase: number;
  title: string;
  features: string[];
};

function PhaseCard({ phase, title, features }: PhaseProps) {
  return (
    <div className="bg-dark-card border border-dark-stroke rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-primary font-bold text-2xl">Phase {phase}</span>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-2 text-dark-text-secondary text-sm">
            <span className="text-secondary">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Roadmap() {
  const phases = [
    {
      phase: 1,
      title: 'Foundation',
      features: ['Core safety features', 'Token Risk Radar', 'Basic UI'],
    },
    {
      phase: 2,
      title: 'Advanced Protection',
      features: ['MEV Shield', 'Approval Center', 'Portfolio tracking'],
    },
    {
      phase: 3,
      title: 'AI Enhancement',
      features: ['Machine learning', 'Predictive alerts', 'Smart routing'],
    },
    {
      phase: 4,
      title: 'Ecosystem',
      features: ['Mobile app', 'API access', 'Community features'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-2xl mx-auto">
            <span className="text-dark-text-secondary">Foundation </span>
            Phase
          </h2>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p) => (
            <PhaseCard key={p.phase} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
