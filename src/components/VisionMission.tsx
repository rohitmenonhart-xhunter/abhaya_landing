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
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Vision Card */}
          <div className="vision-card opacity-0 transform translate-y-10 group">
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif-title">VISION</h2>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                    <span className="text-purple-600 font-medium">Our Future</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower survivors of sexual abuse through counseling and fostering gender education. 
                ABHAYA envisions a future where every individual thrives in a safe and equitable society.
              </p>
              <div className="h-2 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vision-card opacity-0 transform translate-y-10 group">
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-teal-100 hover:border-teal-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif-title">MISSION</h2>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 text-teal-500 mr-2" />
                    <span className="text-teal-600 font-medium">Our Purpose</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ABHAYA stands with survivors of sexual abuse and their families. It offers accessible 
                psychological and legal support, guiding them through their healing journey and advocating 
                for their rights. Together, we work towards a safer future through education and community action.
              </p>
              <div className="h-2 w-24 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

        </div>

        {/* Enhanced Community Section */}
        <div className="mt-20">
          <div className="vision-card opacity-0 transform translate-y-10 text-center relative">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-3xl p-16 text-white shadow-2xl overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-5xl font-bold mb-8 font-serif-title">Join Our Community</h3>
                <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-10">
                  Together, we create a supportive environment where healing begins and hope flourishes. 
                  Every voice matters, every story counts, and every step forward brings us closer to a safer world.
                </p>
                <button className="group bg-white text-purple-600 hover:bg-gray-50 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl">
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