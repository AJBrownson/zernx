'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-dark-stroke rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-dark-semi-bg transition-colors text-left"
      >
        <span className="text-white font-medium text-lg">{question}</span>
        <span className={`text-secondary text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-dark-semi-bg border-t border-dark-stroke">
          <p className="text-dark-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQs() {
  const faqs: FAQItem[] = [
    {
      question: 'How does ZernX protect my wallet?',
      answer: 'ZernX analyzes every transaction in real-time using AI to detect scams, MEV attacks, and dangerous permissions before you confirm them.',
    },
    {
      question: 'Is ZernX safe to use?',
      answer: 'Yes, ZernX is non-custodial and never stores your keys or funds. It only monitors transactions and alerts you to risks.',
    },
    {
      question: 'What blockchains does ZernX support?',
      answer: 'ZernX supports all major blockchains including Ethereum, Polygon, Arbitrum, Optimism, and more.',
    },
    {
      question: 'Can I revoke approvals with ZernX?',
      answer: 'Yes, the Approval Center lets you easily view and revoke token permissions from anywhere.',
    },
    {
      question: 'How much does ZernX cost?',
      answer: 'ZernX is completely free to use. We never charge transaction fees or monthly subscriptions.',
    },
    {
      question: 'Do I need a wallet extension?',
      answer: 'Yes, ZernX works as a browser extension that integrates with your existing wallet.',
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
            Got Questions? We&apos;ve got answers
          </h2>
        </div>

        {/* FAQs Grid */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQAccordion key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
