import React, { useEffect, useRef } from 'react';
import { Heart, ArrowRight, Quote, Sparkles } from 'lucide-react';

const OpenHearts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.story-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 400);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="open-hearts" ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-serif-title">
            OPEN HEARTS
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            A space where individuals can freely share their experiences with counselors and fellow inmates. 
            Here, we not only confess but also seek guidance and offer advice, creating a supportive community 
            where we navigate life's challenges together.
          </p>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mb-16">
          <div className="story-card opacity-0 transform translate-y-10">
            <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-24 h-24 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/30 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6 font-serif-title">Ready to Share Your Story?</h3>
                <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                  Join our supportive community where your voice matters and your healing journey is honored.
                </p>
                <button className="group bg-white text-purple-600 hover:bg-gray-50 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl inline-flex items-center">
                  Go to Open Hearts
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenHearts;