import React, { useEffect, useRef } from 'react';
import { Eye, Target, Users, Sparkles } from 'lucide-react';

const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.vision-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-warm-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-warm-white-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-warm-white-300 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Vision Card */}
          <div className="vision-card opacity-0 transform translate-y-10 group">
            <div className="bg-warm-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-warm-white-200 hover:border-off-black-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-warm-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-off-black mb-2 font-serif-title">VISION</h2>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 text-off-black-100 mr-2" />
                    <span className="text-off-black-100 font-medium">Our Future</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-off-black-100 leading-relaxed mb-6">
                To empower survivors of sexual abuse through counseling and fostering gender education. 
                ABHAYA envisions a future where every individual thrives in a safe and equitable society.
              </p>
              <div className="h-2 w-24 bg-off-black rounded-full"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vision-card opacity-0 transform translate-y-10 group">
            <div className="bg-warm-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-warm-white-200 hover:border-off-black-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-warm-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-off-black mb-2 font-serif-title">MISSION</h2>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 text-off-black-100 mr-2" />
                    <span className="text-off-black-100 font-medium">Our Purpose</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-off-black-100 leading-relaxed mb-6">
                ABHAYA stands with survivors of sexual abuse and their families. It offers accessible 
                psychological and legal support, guiding them through their healing journey and advocating 
                for their rights. Together, we work towards a safer future through education and community action.
              </p>
              <div className="h-2 w-24 bg-off-black rounded-full"></div>
            </div>
          </div>

        </div>

        {/* Enhanced Community Section */}
        <div className="mt-20">
          <div className="vision-card opacity-0 transform translate-y-10 text-center relative">
            <div className="bg-off-black rounded-3xl p-16 text-warm-white shadow-2xl overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-warm-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border border-warm-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-warm-white/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-warm-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-10 h-10 text-warm-white" />
                  </div>
                </div>
                <h3 className="text-5xl font-bold mb-8 font-serif-title">Join Our Community</h3>
                <p className="text-xl text-warm-white-100 max-w-4xl mx-auto leading-relaxed mb-10">
                  Together, we create a supportive environment where healing begins and hope flourishes. 
                  Every voice matters, every story counts, and every step forward brings us closer to a safer world.
                </p>
                <button className="group bg-warm-white text-off-black hover:bg-warm-white-200 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <span className="flex items-center">
                    Get Involved
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;