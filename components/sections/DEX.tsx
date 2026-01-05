'use client';

export function DEX() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-2xl mx-auto">
            Everything you expect from a great DEX
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Swap/Bridge */}
          <div className="bg-dark-card border border-dark-stroke rounded-3xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-dark-text-secondary text-lg">Swap & Bridge Interface</p>
              <p className="text-white font-medium mt-2">Coming Soon</p>
            </div>
          </div>

          {/* Right Column - Portfolio */}
          <div className="bg-dark-card border border-dark-stroke rounded-3xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-dark-text-secondary text-lg">Portfolio Dashboard</p>
              <p className="text-white font-medium mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
