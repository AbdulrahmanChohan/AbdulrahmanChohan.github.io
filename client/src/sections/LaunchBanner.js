import React from 'react';

export default function LaunchBanner() {
  return (
    <section id="launch-banner" className="py-16 px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 via-black/40 to-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl p-8 lg:p-12 bg-gradient-to-br from-black/50 to-black/30 border border-white/5 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">Launch Your Website or Online Business with Confidence</h3>
            <p className="text-gray-300 mb-6 max-w-xl">Comprehensive launch-ready packages that include design, development, and performance optimization so you can go live with confidence.</p>
            <div className="flex items-center gap-4">
              <button className="px-5 py-3 rounded-full bg-white text-[#07060a] font-semibold">Launch Now</button>
              <button className="px-4 py-2 rounded-full bg-white/6 text-white">View Plans</button>
            </div>
          </div>

          <div className="w-full md:w-96">
            <div className="bg-gradient-to-br from-purple-800 to-pink-700 rounded-lg p-4 shadow-xl">
              <img src="https://via.placeholder.com/520x300" alt="launch preview" className="w-full h-44 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
