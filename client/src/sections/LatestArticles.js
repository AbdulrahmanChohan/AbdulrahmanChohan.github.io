import React from 'react';

const articles = [
  { id:1, title:'How to Grab an Internship in Web Development?', img:'https://via.placeholder.com/320x200', link:'https://medium.com' },
  { id:2, title:'Will Artificial Intelligence Replace Web Developers?', img:'https://via.placeholder.com/320x200', link:'https://dev.to' },
  { id:3, title:'HTML, CSS, JavaScript Roadmap for Beginners', img:'https://via.placeholder.com/320x200', link:'https://www.freecodecamp.org' }
];

export default function LatestArticles(){
  return (
    <section id="articles" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Articles</span>
          </div>
          <h2 className="text-3xl font-extrabold">Latest Articles</h2>
          <p className="text-gray-300 mt-2">Get the latest insights, tutorials, and project highlights from the blog.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, index) => (
            <article
              key={a.id}
              data-reveal
              data-reveal-delay={String(index * 90)}
              className="bg-black/40 rounded-xl overflow-hidden border border-white/5 h-full flex flex-col"
            >
              <img src={a.img} alt={a.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex w-fit bg-white/6 px-4 py-2 rounded-full text-white hover:bg-white/10">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
