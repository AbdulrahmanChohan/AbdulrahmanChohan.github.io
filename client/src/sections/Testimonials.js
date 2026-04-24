import React from 'react';

const testimonials = [
  { id:1, name: 'Katherine Johnson', title: 'Founder, Tech Co', text: 'Abdulrahman delivered exceptional design and fast turnaround.' },
  { id:2, name: 'Benjamin Smith', title: 'Product Manager', text: 'Great communication and reliable delivery on time.' },
  { id:3, name: 'Nicole D.', title: 'CEO, Startup', text: 'Our conversion improved after the redesign.' }
];

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Testimonials</span>
          </div>
          <h2 className="text-3xl font-extrabold">What Clients Say</h2>
          <p className="text-gray-300 mt-2">Don’t take our word for it — here’s what clients say about working with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <article
              key={t.id}
              data-reveal
              data-reveal-delay={String(index * 90)}
              className="bg-black/40 rounded-xl p-6 border border-white/5 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 icon-wrap" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-300">{t.title}</div>
                </div>
              </div>
              <p className="text-gray-300 flex-1">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
