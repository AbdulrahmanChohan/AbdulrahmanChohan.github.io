import React from 'react';

const plans = [
  { id: 1, name: 'Basic Design', price: '$119', features: ['1 Page Design', 'Responsive Layout', 'Basic SEO'] },
  { id: 2, name: 'Standard Design', price: '$249', features: ['Up to 5 Pages', 'Responsive', 'SEO Optimized', 'CMS Setup'] },
  { id: 3, name: 'Premium Design', price: '$389', features: ['Custom Design', 'Ecommerce', 'Advanced SEO', 'Performance'] }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Transparent Pricing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3">Straightforward pricing options to fit your project needs and budget.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className="rounded-xl p-6 bg-gradient-to-br from-black/40 to-transparent border border-white/5">
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <div className="text-3xl font-extrabold mb-4">{p.price}</div>
              <ul className="mb-6 text-gray-300 space-y-2">
                {p.features.map((f,i) => <li key={i}>• {f}</li>)}
              </ul>
              <button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
