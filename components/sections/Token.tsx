'use client';

export function Token() {
  // Placeholder token grid
  const tokens = Array(12).fill(null);

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-2xl mx-auto">
            Liquidity Without Limits
          </h2>
          <p className="text-dark-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Access tokens across multiple blockchains with unified liquidity
          </p>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tokens.map((_, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-stroke rounded-2xl aspect-square flex items-center justify-center hover:border-primary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-secondary opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
